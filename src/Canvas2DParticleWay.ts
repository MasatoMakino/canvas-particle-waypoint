import { ParticleWay } from "@masatomakino/particle-waypoint";

export class Canvas2DParticleWay extends ParticleWay {
  constructor(points: number[][], option?: {}) {
    super(points);
    if (!option) return;
  }
}
