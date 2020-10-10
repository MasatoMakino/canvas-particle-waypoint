"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Canvas2DParticleWay = void 0;
var particle_waypoint_1 = require("particle-waypoint");
var Canvas2DParticleWay = /** @class */ (function (_super) {
    __extends(Canvas2DParticleWay, _super);
    function Canvas2DParticleWay(points, option) {
        var _this = _super.call(this, points) || this;
        if (!option)
            return _this;
        return _this;
    }
    return Canvas2DParticleWay;
}(particle_waypoint_1.ParticleWay));
exports.Canvas2DParticleWay = Canvas2DParticleWay;
