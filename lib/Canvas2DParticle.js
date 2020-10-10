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
exports.Canvas2DParticle = void 0;
var particle_waypoint_1 = require("particle-waypoint");
var Canvas2DParticle = /** @class */ (function (_super) {
    __extends(Canvas2DParticle, _super);
    function Canvas2DParticle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.r = 0.0;
        //媒介変数tに応じた回転量
        _this.rotationSpeedSin = 0.0;
        _this.rotationSpeedCos = 0.0;
        //初期回転量
        _this.rotationSin = 0.0;
        _this.rotationCos = 0.0;
        return _this;
    }
    Canvas2DParticle.prototype.init = function (ctx, bitmap, rangeR, rangeRotationSpeed) {
        this.ctx = ctx;
        this.bitmap = bitmap;
        this.r = rangeR * Math.random();
        this.rotationSpeedSin = rangeRotationSpeed * (Math.random() * 2 - 1);
        this.rotationSpeedCos = rangeRotationSpeed * (Math.random() * 2 - 1);
        this.rotationSin = Math.random() * 2 * Math.PI;
        this.rotationCos = Math.random() * 2 * Math.PI;
    };
    Canvas2DParticle.prototype.update = function (t) {
        var n = _super.prototype.update.call(this, t);
        var pos = this.path.getPoint(n);
        this.positionX = pos[0];
        this.positionY = pos[1];
        if (this.r > 0.0) {
            var sin = this.rotationSpeedSin * t + this.rotationSin;
            var cos = this.rotationSpeedCos * t + this.rotationCos;
            this.positionX += Math.cos(cos) * this.r;
            this.positionY += Math.sin(sin) * this.r;
        }
        return n;
    };
    Canvas2DParticle.prototype.draw = function () {
        if (this.bitmap == null)
            return;
        var px = this.positionX - this.bitmap.width / 2;
        var py = this.positionY - this.bitmap.height / 2;
        this.ctx.drawImage(this.bitmap, (0.5 + px) | 0, (0.5 + py) | 0);
    };
    Canvas2DParticle.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        this.ctx = null;
        this.bitmap = null;
    };
    return Canvas2DParticle;
}(particle_waypoint_1.Particle));
exports.Canvas2DParticle = Canvas2DParticle;
