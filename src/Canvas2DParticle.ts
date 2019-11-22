import { Particle } from "particle-waypoint";
import { MapElement } from "./Canvas2DParticleGenerator";

export class Canvas2DParticle extends Particle {
  protected ctx: CanvasRenderingContext2D;
  protected bitmap: MapElement;
  protected positionX: number;
  protected positionY: number;

  protected r: number = 0.0;
  //媒介変数tに応じた回転量
  protected rotationSpeedSin: number = 0.0;
  protected rotationSpeedCos: number = 0.0;
  //初期回転量
  protected rotationSin: number = 0.0;
  protected rotationCos: number = 0.0;

  init(
    ctx: CanvasRenderingContext2D,
    bitmap: MapElement,
    rangeR: number,
    rangeRotationSpeed: number
  ): void {
    this.ctx = ctx;
    this.bitmap = bitmap;

    this.r = rangeR * Math.random();
    this.rotationSpeedSin = rangeRotationSpeed * (Math.random() * 2 - 1);
    this.rotationSpeedCos = rangeRotationSpeed * (Math.random() * 2 - 1);
    this.rotationSin = Math.random() * 2 * Math.PI;
    this.rotationCos = Math.random() * 2 * Math.PI;
  }

  update(t: number): number {
    const n = super.update(t);
    const pos = this.path.getPoint(n);

    this.positionX = pos[0];
    this.positionY = pos[1];

    if (this.r > 0.0) {
      const sin = this.rotationSpeedSin * t + this.rotationSin;
      const cos = this.rotationSpeedCos * t + this.rotationCos;
      this.positionX += Math.cos(cos) * this.r;
      this.positionY += Math.sin(sin) * this.r;
    }

    return n;
  }

  public draw(): void {
    const px = this.positionX - this.bitmap.width / 2;
    const py = this.positionY - this.bitmap.height / 2;
    this.ctx.drawImage(this.bitmap, (0.5 + px) | 0, (0.5 + py) | 0);
  }

  dispose(): void {
    super.dispose();
    this.ctx = null;
    this.bitmap = null;
  }
}
