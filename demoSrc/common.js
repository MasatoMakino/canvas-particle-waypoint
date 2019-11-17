import { getHeartPath } from "./SamplePath";
import { CanvasParticleWay } from "../bin/index";
import { BezierUtil } from "particle-waypoint";

/**
 * createjsのステージを初期化する。
 * @return {createjs.Stage}
 */
export function initCanvas() {
  const canvas = document.getElementById("appCanvas");
  canvas.style.backgroundColor = "#000";
  return canvas;
}

/**
 * ParticleWayを初期化する。
 * @return {ParticleWay}
 */
export function initWay() {
  const points = getHeartPath();
  const wayPoint = new CanvasParticleWay(BezierUtil.subdivide(points));
  return wayPoint;
}
