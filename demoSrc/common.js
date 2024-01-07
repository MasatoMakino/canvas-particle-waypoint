import { getHeartPath } from "./SamplePath.js";
import { Canvas2DParticleWay } from "../esm/index.js";
import { BezierUtil } from "@masatomakino/particle-waypoint";

/**
 * createjsのステージを初期化する。
 * @return {createjs.Stage}
 */
export function initCanvas() {
  const canvas = document.createElement("canvas");
  document.body.appendChild(canvas);
  canvas.id = "appCanvas";
  canvas.width = 640;
  canvas.height = 480;
  canvas.style.width = "640px";
  canvas.style.height = "480px";
  canvas.style.backgroundColor = "#000";
  return canvas;
}

/**
 * ParticleWayを初期化する。
 * @return {ParticleWay}
 */
export function initWay() {
  const points = getHeartPath();
  const wayPoint = new Canvas2DParticleWay(BezierUtil.subdivide(points));
  return wayPoint;
}
