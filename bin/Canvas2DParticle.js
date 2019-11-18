import { Particle } from "particle-waypoint";
export class Canvas2DParticle extends Particle {
    constructor() {
        super(...arguments);
        this.r = 0.0;
        //媒介変数tに応じた回転量
        this.rotationSpeedSin = 0.0;
        this.rotationSpeedCos = 0.0;
        //初期回転量
        this.rotationSin = 0.0;
        this.rotationCos = 0.0;
    }
    init(ctx, bitmap, rangeR, rangeRotationSpeed) {
        this.ctx = ctx;
        this.bitmap = bitmap;
        this.r = rangeR * Math.random();
        this.rotationSpeedSin = rangeRotationSpeed * (Math.random() * 2 - 1);
        this.rotationSpeedCos = rangeRotationSpeed * (Math.random() * 2 - 1);
        this.rotationSin = Math.random() * 2 * Math.PI;
        this.rotationCos = Math.random() * 2 * Math.PI;
    }
    update(t) {
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
    draw() {
        const px = this.positionX - this.bitmap.width / 2;
        const py = this.positionY - this.bitmap.height / 2;
        this.ctx.drawImage(this.bitmap, (0.5 + px) | 0, (0.5 + py) | 0);
    }
    dispose() {
        super.dispose();
        this.ctx = null;
        this.bitmap = null;
    }
}
