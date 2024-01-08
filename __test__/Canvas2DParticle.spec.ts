import { describe, it, expect } from "vitest";
import { Canvas2DParticle } from "../src/index.js";
import { getImageElement } from "./TestImage.js";
import { initCanvas, generateParticle } from "./Common.js";

describe("Canvas2DParticle", () => {
  it("should create a Canvas2DParticle instance correctly", () => {
    const particle = generateParticle();
    expect(particle).toBeInstanceOf(Canvas2DParticle);
    expect(particle).toBeTruthy();
  });

  it("should dispose the Canvas2DParticle instance correctly", () => {
    const particle = generateParticle();
    particle.dispose();
    particle.draw(); //dispose後の描画はスキップされる
  });

  it("should update the Canvas2DParticle instance correctly", () => {
    const particle = generateParticle();
    const testPosition = (t: number, n: number) => {
      const pos = particle.update(t);
      expect(pos).toBe(n);
    };
    testPosition(0.0, 0);
    testPosition(0.5, 0.5);
    testPosition(1.0, 1);
  });

  it("should init the Canvas2DParticle instance correctly", async () => {
    const canvas = initCanvas();
    const ctx = canvas.getContext("2d");
    const image = await getImageElement();
    const particle = generateParticle();
    particle.init(ctx!, image, 3.0, 1.0);
    particle.update(0.3);
    particle.draw();
  });
});
