import { CanvasParticle } from "./CanvasParticle";
import { ParticleGenerator } from "particle-waypoint";
export class CanvasParticleGenerator extends ParticleGenerator {
    constructor(ctx, path, map, option) {
        super(path, option);
        this.mapCounter = 0;
        this._rangeR = 0.0;
        this._rangeRotationSpeed = 0.0;
        this.ctx = ctx;
        if (option) {
            if (option.rangeR)
                this._rangeR = option.rangeR;
            if (option.rangeRotationSpeed)
                this._rangeRotationSpeed = option.rangeRotationSpeed;
        }
        if (Array.isArray(map)) {
            this.map = map;
        }
        else {
            this.map = [map];
        }
    }
    generateParticle(path) {
        const particle = new CanvasParticle(path);
        particle.init(this.ctx, this.map[this.mapCounter], this._rangeR, this._rangeRotationSpeed);
        this.mapCounter = (this.mapCounter += 1) % this.map.length;
        return particle;
    }
    generateAll() {
        this.mapCounter = 0;
        super.generateAll();
    }
    get rangeRotationSpeed() {
        return this._rangeRotationSpeed;
    }
    set rangeRotationSpeed(value) {
        this._rangeRotationSpeed = value;
    }
    get rangeR() {
        return this._rangeR;
    }
    set rangeR(value) {
        this._rangeR = value;
    }
    draw() {
        this._particles.forEach((p) => {
            p.draw();
        });
    }
}
