import { ParticleGenerator, Particle, ParticleWay, ParticleGeneratorOption } from "particle-waypoint";
export declare class Canvas2DParticleGenerator extends ParticleGenerator {
    protected ctx: CanvasRenderingContext2D;
    protected map: HTMLImageElement[];
    private mapCounter;
    private _rangeR;
    private _rangeRotationSpeed;
    constructor(ctx: CanvasRenderingContext2D, path: ParticleWay | ParticleWay[], map: HTMLImageElement | HTMLImageElement[], option?: CanvasParticleGeneratorOption);
    protected generateParticle(path: ParticleWay): Particle;
    generateAll(): void;
    get rangeRotationSpeed(): number;
    set rangeRotationSpeed(value: number);
    get rangeR(): number;
    set rangeR(value: number);
    draw(): void;
}
export interface CanvasParticleGeneratorOption extends ParticleGeneratorOption {
    rangeR?: number;
    rangeRotationSpeed?: number;
}
//# sourceMappingURL=Canvas2DParticleGenerator.d.ts.map