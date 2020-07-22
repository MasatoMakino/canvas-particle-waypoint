import { ParticleWay } from "particle-waypoint";
export class Canvas2DParticleWay extends ParticleWay {
    constructor(points, option) {
        super(points);
        if (!option)
            return;
    }
}
