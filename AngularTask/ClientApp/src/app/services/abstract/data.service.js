"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataService = void 0;
var rxjs_1 = require("rxjs");
var http_1 = require("@angular/common/http");
var operators_1 = require("rxjs/operators");
var core_1 = require("@angular/core");
var DataService = /** @class */ (function () {
    function DataService(http, router, configService) {
        this.http = http;
        this.router = router;
        this.configService = configService;
        this.apiUrl = '';
        this.hostedUrl = '';
        this.apiUrl = configService.getApiUri();
        this.hostedUrl = configService.getBaseUri();
    }
    DataService.prototype.getHeaders = function () {
        var headers = new http_1.HttpHeaders();
        //headers.append('Accept', 'application/json');
        headers.append('responseType', 'text');
        return headers;
    };
    DataService.prototype.handleError = function (result) {
        console.log(result);
        var applicationError = result.headers.get('Application-Error');
        return (0, rxjs_1.throwError)(applicationError || 'Server error');
    };
    DataService.prototype.get = function (name, url, showLoader, isApiIntegration) {
        var _this = this;
        if (url === void 0) { url = this.apiUrl; }
        if (showLoader === void 0) { showLoader = true; }
        if (isApiIntegration === void 0) { isApiIntegration = false; }
        url = this.apiUrl + name;
        return this.http.get(url, { responseType: 'text' }).pipe((0, operators_1.map)(function (res) {
            return res;
        }), (0, operators_1.catchError)(function (res) {
            return _this.handleError(res);
        }));
    };
    DataService = __decorate([
        (0, core_1.Injectable)()
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map