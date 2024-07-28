import { describe, it, expect } from "vitest";
import { initCanvas } from "./Common.js";
import { getImageElement } from "./TestImage.js";
import { Canvas2DParticleGenerator } from "../src/index.js";
import { ParticleWay } from "@masatomakino/particle-waypoint";
import { getHeartPath } from "../demoSrc/SamplePath.js";

describe("Canvas2DParticleGenerator", () => {
  const generateContextAndWay = () => {
    const canvas = initCanvas();
    const ctx = canvas.getContext("2d");
    const particleWay = new ParticleWay(getHeartPath());
    return { ctx, particleWay };
  };

  it("should create a Canvas2DParticleGenerator instance correctly", async () => {
    const { ctx, particleWay } = generateContextAndWay();
    const image = await getImageElement();
    const generator = new Canvas2DParticleGenerator(ctx!, particleWay, image);
    expect(generator).toBeTruthy();
    expect(generator).toBeInstanceOf(Canvas2DParticleGenerator);
  });

  it("should create a Canvas2DParticleGenerator instance correctly with option", async () => {
    const { ctx, particleWay } = generateContextAndWay();
    const image = await getImageElement();
    const generator = new Canvas2DParticleGenerator(ctx!, particleWay, image, {
      rangeR: 3.0,
      rangeRotationSpeed: 1.0,
    });
    expect(generator).toBeTruthy();
    expect(generator).toBeInstanceOf(Canvas2DParticleGenerator);
    expect(generator.rangeR).toBe(3.0);
    expect(generator.rangeRotationSpeed).toBe(1.0);
  });

  it("should create a Canvas2DParticleGenerator instance with map array correctly", async () => {
    const { ctx, particleWay } = generateContextAndWay();
    const image = await getImageElement();
    const generator = new Canvas2DParticleGenerator(ctx!, particleWay, [image]);
    expect(generator).toBeTruthy();
    expect(generator).toBeInstanceOf(Canvas2DParticleGenerator);
  });

  it("should create a Canvas2DParticleGenerator instance with an empty image array", () => {
    const { ctx, particleWay } = generateContextAndWay();
    expect(() => {
      const generator = new Canvas2DParticleGenerator(ctx!, particleWay, []);
    }).toThrow();
  });

  it("should generate a Canvas2DParticle instance correctly", async () => {
    const { ctx, particleWay } = generateContextAndWay();
    const image = await getImageElement();
    const generator = new Canvas2DParticleGenerator(ctx!, particleWay, image);
    generator.generateAll();
    expect(generator.particleContainer.particles.length).toBe(48);
    generator.draw();
  });

  it("should skip drawing when Canvas2DParticle is empty", async () => {
    const { ctx, particleWay } = generateContextAndWay();
    const image = await getImageElement();
    const generator = new Canvas2DParticleGenerator(ctx!, particleWay, image);
    expect(generator.particleContainer.particles.length).toBe(0);
    generator.draw();
  });
});
