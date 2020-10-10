import { Canvas2DParticle } from "./Canvas2DParticle";
import {
  ParticleGenerator,
  Particle,
  ParticleWay,
  ParticleGeneratorOption,
} from "particle-waypoint";

export type MapElement = HTMLImageElement | HTMLCanvasElement;

export class Canvas2DParticleGenerator extends ParticleGenerator {
  protected ctx: CanvasRenderingContext2D;
  protected map: MapElement[]; //パーティクルに使用するテクスチャ配列。ビットマップもしくはCanvas。
  private mapCounter: number = 0;

  private _rangeR: number = 0.0;
  private _rangeRotationSpeed: number = 0.0;

  constructor(
    ctx: CanvasRenderingContext2D,
    path: ParticleWay | ParticleWay[],
    map: MapElement | MapElement[],
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
      if (map.length === 0) {
        console.warn(
          "Canvas2DParticleGenerator : オプションとして渡されたビットマップ配列が空です。このクラスは動作しますが、一切の表示を行いません。"
        );
        console.trace();
      }
      this.map = map;
    } else {
      this.map = [map];
    }
  }

  protected generateParticle(path: ParticleWay): Particle {
    const particle = new Canvas2DParticle(path);
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
    if (
      !this.particleContainer ||
      this.particleContainer.particles.length === 0
    )
      return;
    this.particleContainer.particles.forEach((p: Canvas2DParticle) => {
      p.draw();
    });
  }
}

export interface CanvasParticleGeneratorOption extends ParticleGeneratorOption {
  rangeR?: number;
  rangeRotationSpeed?: number;
}
