import { BezierUtil } from "particle-waypoint";
import { CanvasParticleGenerator } from "../bin/";
import { getCircle, getHeartPath, getTriangle } from "./SamplePath";
import { initCanvas, initWay } from "./common";
import { RAFTicker, RAFTickerEventType } from "raf-ticker";
import * as dat from "dat.gui";

/**
 * DOMContentLoaded後の初期化処理。
 * デモに必要なパーツを一式初期化する。
 */
const onDomContentsLoaded = () => {
  const canvas = initCanvas();
  const ctx = canvas.getContext("2d");
  const way = initWay();
  const generator = initGenerator(way, canvas);

  RAFTicker.addEventListener(RAFTickerEventType.tick, e => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    generator.draw();
  });
  initGUI(generator);
};

/**
 * パーティクル生成機を初期化する。
 * @param way
 * @param stage
 * @return {CanvasParticleGenerator}
 */
const initGenerator = (way, canvas) => {
  const img = new Image();
  img.src = "./circle.png";
  console.log(img.width);
  img.onload = () => {
    console.log(img.width);
  };

  const generator = new CanvasParticleGenerator(
    canvas.getContext("2d"),
    way,
    img,
    {
      ease: createjs.Ease.cubicInOut
    }
  );
  generator.setSpeed(33, 30);
  generator.play();
  return generator;
};

/**
 * デモのパラメーターを操作するGUIを初期化する。
 * @param generator
 */
const initGUI = generator => {
  const prop = {
    isPlay: true,
    path: "heart",
    ease: "cubicInOut",
    valve: true,
    visiblePassage: true,
    clear: () => {
      generator.removeAllParticles();
    }
  };
  const gui = new dat.GUI();
  gui.add(generator, "particleInterval", 33, 1000);
  gui.add(generator, "speedPerSec", 0.0001, 0.5);

  gui.add(generator, "rangeR", 0.0, 32.0, 0.1);
  gui.add(generator, "rangeRotationSpeed", 0.0, 3.14 * 4, 0.01);

  gui.add(prop, "ease", ["cubicOut", "cubicInOut", "liner"]).onChange(() => {
    let ease = null;
    switch (prop.ease) {
      case "cubicOut":
        ease = createjs.Ease.cubicOut;
        break;
      case "cubicInOut":
        ease = createjs.Ease.cubicInOut;
        break;
    }
    generator.updateEase(ease, generator.isLoop);
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
    generator.path[0].points = path;
  });
  gui.add(prop, "isPlay").onChange(() => {
    if (prop.isPlay) {
      generator.play();
    } else {
      generator.stop();
    }
  });
  gui.add(generator, "isLoop");
  gui.add(prop, "valve").onChange(() => {
    if (prop.valve) {
      generator.openValve();
    } else {
      generator.closeValve();
    }
  });
  gui.add(prop, "visiblePassage").onChange(() => {
    if (prop.visiblePassage) {
      generator.path.showPassage();
    } else {
      generator.path.hidePassage();
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
