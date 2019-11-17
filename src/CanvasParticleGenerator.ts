import { CanvasParticle } from "./CanvasParticle";
import {
  ParticleGenerator,
  Particle,
  ParticleWay,
  ParticleGeneratorOption
} from "particle-waypoint";

export class CanvasParticleGenerator extends ParticleGenerator {
  protected ctx: CanvasRenderingContext2D;
  protected map: HTMLImageElement[]; //パーティクルに使用するテクスチャ配列。ビットマップもしくは描画済みのShapeを利用する。
  private mapCounter: number = 0;

  private _rangeR: number = 0.0;
  private _rangeRotationSpeed: number = 0.0;

  constructor(
    ctx: CanvasRenderingContext2D,
    path: ParticleWay | ParticleWay[],
    map: HTMLImageElement | HTMLImageElement[],
    option?: CanvasParticleGeneratorOption
  ) {
    super(path, option);
    this.ctx = ctx;

    if (option) {
      if (option.rangeR) this._rangeR = option.rangeR;
      if (option.rangeRotationSpeed)
        this._rangeRotationSpeed = option.rangeRotationSpeed;
    }

    if (Array.isArray(map)) {
      this.map = map;
    } else {
      this.map = [map];
    }
  }

  protected generateParticle(path: ParticleWay): Particle {
    const particle = new CanvasParticle(path);
    particle.init(
      this.ctx,
      this.map[this.mapCounter],
      this._rangeR,
      this._rangeRotationSpeed
    );
    this.mapCounter = (this.mapCounter += 1) % this.map.length;
    return particle;
  }

  public generateAll(): void {
    this.mapCounter = 0;
    super.generateAll();
  }

  get rangeRotationSpeed(): number {
    return this._rangeRotationSpeed;
  }

  set rangeRotationSpeed(value: number) {
    this._rangeRotationSpeed = value;
  }
  get rangeR(): number {
    return this._rangeR;
  }

  set rangeR(value: number) {
    this._rangeR = value;
  }

  public draw(): void {
    this._particles.forEach((p: CanvasParticle) => {
      p.draw();
    });
  }
}

export interface CanvasParticleGeneratorOption extends ParticleGeneratorOption {
  rangeR?: number;
  rangeRotationSpeed?: number;
}
