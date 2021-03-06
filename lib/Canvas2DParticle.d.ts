import { Particle } from "particle-waypoint";
import { MapElement } from "./Canvas2DParticleGenerator";
export declare class Canvas2DParticle extends Particle {
    protected ctx: CanvasRenderingContext2D;
    protected bitmap: MapElement;
    protected positionX: number;
    protected positionY: number;
    protected r: number;
    protected rotationSpeedSin: number;
    protected rotationSpeedCos: number;
    protected rotationSin: number;
    protected rotationCos: number;
    init(ctx: CanvasRenderingContext2D, bitmap: MapElement, rangeR: number, rangeRotationSpeed: number): void;
    update(t: number): number;
    draw(): void;
    dispose(): void;
}
//# sourceMappingURL=Canvas2DParticle.d.ts.map