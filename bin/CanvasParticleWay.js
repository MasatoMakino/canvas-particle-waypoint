import { ParticleWay } from "particle-waypoint";
export class CanvasParticleWay extends ParticleWay {
    constructor(points, option) {
        super(points);
        if (!option)
            return;
    }
    set points(points) {
        super.points = points;
    }
}
