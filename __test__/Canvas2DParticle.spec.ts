import { describe, it, expect } from "vitest";
import { Canvas2DParticle, Canvas2DParticleWay } from "../src/index.js";
import { getHeartPath } from "../demoSrc/SamplePath.js";

describe("Canvas2DParticle", () => {
  it("should be true", () => {
    const particleWay = new Canvas2DParticleWay(getHeartPath());
    const particle = new Canvas2DParticle(particleWay);

    expect(particle).toBeInstanceOf(Canvas2DParticle);
    expect(particle).toBeTruthy();
  });
});
