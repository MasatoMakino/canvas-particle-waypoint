import { ParticleWay } from "@masatomakino/particle-waypoint";
import { getHeartPath } from "../demoSrc/SamplePath.js";
import { Canvas2DParticle } from "../src/index.js";

export const generateParticle = () => {
  const particleWay = new ParticleWay(getHeartPath());
  const particle = new Canvas2DParticle(particleWay);
  return particle;
};

export const initCanvas = () => {
  const canvas = document.createElement("canvas");
  canvas.width = 500;
  canvas.height = 500;
  document.body.appendChild(canvas);
  return canvas;
};
