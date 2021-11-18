"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigService = void 0;
var core_1 = require("@angular/core");
var ConfigService = /** @class */ (function () {
    function ConfigService() {
    }
    /*
        Web Api hosted path location.
    */
    ConfigService.prototype.getApiUri = function () {
        return this.getBaseUri() + 'api/';
    };
    /*
       Get Application Hosted Path
    */
    ConfigService.prototype.getBaseUri = function () {
        var pathArray = window.location.href.split('/');
        var protocol = pathArray[0];
        var host = pathArray[2];
        var path = protocol + '//' + host + '/';
        return path;
    };
    ConfigService = __decorate([
        (0, core_1.Injectable)({
            providedIn: 'root'
        })
    ], ConfigService);
    return ConfigService;
}());
exports.ConfigService = ConfigService;
//# sourceMappingURL=config.service.js.map