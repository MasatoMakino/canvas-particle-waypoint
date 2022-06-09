import { BezierUtil, GenerationMode } from "@masatomakino/particle-waypoint";
import { Canvas2DParticleGenerator } from "../";
import { getCircle, getHeartPath, getTriangle } from "./SamplePath";
import { initCanvas, initWay } from "./common";
import { RAFTicker, RAFTickerEventType } from "@masatomakino/raf-ticker";
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

  RAFTicker.addListener(RAFTickerEventType.tick, (e) => {
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
  const imgArray = [];

  const img = new Image();
  img.src = "./circle.png";
  console.log(img.width);
  img.onload = () => {
    console.log(img.width);
  };

  const generator = new Canvas2DParticleGenerator(
    canvas.getContext("2d"),
    way,
    img,
    {
      ease: createjs.Ease.cubicInOut,
    }
  );
  generator.animator.setSpeed(33, 30);
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
    mode: "SEQUENTIAL",
    clear: () => {
      generator.particleContainer.removeAll();
    },
  };
  const gui = new dat.GUI();
  const animator = generator.animator;
  gui.add(animator, "generationInterval", 33, 1000);
  gui.add(animator, "speedPerSec", 0.0001, 0.5);

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
  gui.add(prop, "mode", ["SEQUENTIAL", "LOOP"]).onChange(() => {
    switch (prop.mode) {
      case "SEQUENTIAL":
        generator.modeManager.mode = GenerationMode.SEQUENTIAL;
        break;
      case "LOOP":
        generator.modeManager.mode = GenerationMode.LOOP;
        break;
    }
  });
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
