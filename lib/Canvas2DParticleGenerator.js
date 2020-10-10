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
exports.Canvas2DParticleGenerator = void 0;
var Canvas2DParticle_1 = require("./Canvas2DParticle");
var particle_waypoint_1 = require("particle-waypoint");
var Canvas2DParticleGenerator = /** @class */ (function (_super) {
    __extends(Canvas2DParticleGenerator, _super);
    function Canvas2DParticleGenerator(ctx, path, map, option) {
        var _this = _super.call(this, path, option) || this;
        _this.mapCounter = 0;
        _this._rangeR = 0.0;
        _this._rangeRotationSpeed = 0.0;
        _this.ctx = ctx;
        if (option) {
            if (option.rangeR)
                _this._rangeR = option.rangeR;
            if (option.rangeRotationSpeed)
                _this._rangeRotationSpeed = option.rangeRotationSpeed;
        }
        if (Array.isArray(map)) {
            if (map.length === 0) {
                console.warn("Canvas2DParticleGenerator : オプションとして渡されたビットマップ配列が空です。このクラスは動作しますが、一切の表示を行いません。");
                console.trace();
            }
            _this.map = map;
        }
        else {
            _this.map = [map];
        }
        return _this;
    }
    Canvas2DParticleGenerator.prototype.generateParticle = function (path) {
        var particle = new Canvas2DParticle_1.Canvas2DParticle(path);
        particle.init(this.ctx, this.map[this.mapCounter], this._rangeR, this._rangeRotationSpeed);
        this.mapCounter = (this.mapCounter += 1) % this.map.length;
        return particle;
    };
    Canvas2DParticleGenerator.prototype.generateAll = function () {
        this.mapCounter = 0;
        _super.prototype.generateAll.call(this);
    };
    Object.defineProperty(Canvas2DParticleGenerator.prototype, "rangeRotationSpeed", {
        get: function () {
            return this._rangeRotationSpeed;
        },
        set: function (value) {
            this._rangeRotationSpeed = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Canvas2DParticleGenerator.prototype, "rangeR", {
        get: function () {
            return this._rangeR;
        },
        set: function (value) {
            this._rangeR = value;
        },
        enumerable: false,
        configurable: true
    });
    Canvas2DParticleGenerator.prototype.draw = function () {
        if (!this.particleContainer ||
            this.particleContainer.particles.length === 0)
            return;
        this.particleContainer.particles.forEach(function (p) {
            p.draw();
        });
    };
    return Canvas2DParticleGenerator;
}(particle_waypoint_1.ParticleGenerator));
exports.Canvas2DParticleGenerator = Canvas2DParticleGenerator;
