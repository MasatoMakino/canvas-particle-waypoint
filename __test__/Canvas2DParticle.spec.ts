import { describe, it, expect } from "vitest";
import { Canvas2DParticle } from "../src/index.js";
import { ParticleWay } from "@masatomakino/particle-waypoint";
import { getHeartPath } from "../demoSrc/SamplePath.js";

describe("Canvas2DParticle", () => {
  it("should be true", () => {
    const particleWay = new ParticleWay(getHeartPath());
    const particle = new Canvas2DParticle(particleWay);

    expect(particle).toBeInstanceOf(Canvas2DParticle);
    expect(particle).toBeTruthy();
  });
});
