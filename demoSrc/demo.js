import { BezierUtil } from "@masatomakino/particle-waypoint";
import { RAFTicker } from "@masatomakino/raf-ticker";
import { Easing } from "@tweenjs/tween.js";
import GUI from "lil-gui";
import { Canvas2DParticleGenerator } from "../esm/index.js";
import { getCircle, getHeartPath, getTriangle } from "./SamplePath.js";
import { initCanvas, initWay } from "./common.js";

/**
 * DOMContentLoaded後の初期化処理。
 * デモに必要なパーツを一式初期化する。
 */
const onDomContentsLoaded = () => {
  const canvas = initCanvas();
  const ctx = canvas.getContext("2d");
  const way = initWay();
  const generator = initGenerator(way, canvas);

  RAFTicker.addListener("tick", (e) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    generator.draw();
  });
  initGUI(generator);
};

/**
 * パーティクル生成機を初期化する。
 * @param way
 * @param canvas
 * @return {CanvasParticleGenerator}
 */
const initGenerator = (way, canvas) => {
  const img = new Image();
  img.src = "./circle.png";

  const generator = new Canvas2DParticleGenerator(
    canvas.getContext("2d"),
    way,
    img,
    {
      ease: Easing.Cubic.InOut,
    },
  );
  generator.animator.setSpeed(100, 50);
  generator.play();
  return generator;
};

/**
 * デモのパラメーターを操作するGUIを初期化する。
 * @param generator
 */
const initGUI = (generator) => {
  const prop = {
    isPlay: true,
    path: "heart",
    ease: "cubicInOut",
    valve: true,
    mode: "sequential",
    clear: () => {
      generator.particleContainer.removeAll();
    },
  };
  const gui = new GUI();
  const animator = generator.animator;
  gui.add(animator, "generationInterval", 33, 1000);
  gui.add(animator, "speedPerSec", 0.0001, 0.5);

  gui.add(generator, "rangeR", 0.0, 32.0, 0.1);
  gui.add(generator, "rangeRotationSpeed", 0.0, 3.14 * 4, 0.01);

  gui.add(prop, "ease", ["cubicOut", "cubicInOut", "liner"]).onChange(() => {
    let ease = null;
    switch (prop.ease) {
      case "cubicOut":
        ease = Easing.Cubic.Out;
        break;
      case "cubicInOut":
        ease = Easing.Cubic.InOut;
        break;
      case "liner":
        ease = Easing.Linear.None;
        break;
    }
    generator.animator.updateEase(ease, generator.modeManager.mode);
  });
  gui.add(prop, "path", ["heart", "circle", "triangle"]).onChange(() => {
    let path;
    switch (prop.path) {
      case "heart":
        path = BezierUtil.subdivide(getHeartPath());
        break;
      case "circle":
        path = BezierUtil.subdivide(getCircle());
        break;
      case "triangle":
        path = getTriangle();
        break;
    }
    generator.multipleWays.ways[0].points = path;
  });
  gui.add(prop, "isPlay").onChange(() => {
    if (prop.isPlay) {
      generator.play();
    } else {
      generator.stop();
    }
  });
  gui.add(generator.modeManager, "mode", ["sequential", "loop"]);
  gui.add(prop, "valve").onChange(() => {
    if (prop.valve) {
      generator.valve.open();
    } else {
      generator.valve.close();
    }
  });
  gui.add(prop, "clear");
};

/**
 * DOMContentLoaded以降に初期化処理を実行する
 */
if (document.readyState !== "loading") {
  onDomContentsLoaded();
} else {
  document.addEventListener("DOMContentLoaded", onDomContentsLoaded);
}
