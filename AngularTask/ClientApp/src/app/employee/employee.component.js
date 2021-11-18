"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeComponent = void 0;
var core_1 = require("@angular/core");
var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent(employeeDataService) {
        this.employeeDataService = employeeDataService;
    }
    EmployeeComponent.prototype.getEmployeeName = function () {
        var _this = this;
        this.employeeDataService.getEmployeeName(this.employeeName).then(function (res) {
            _this.fetchedEmployeeName = res;
            console.log(res);
        });
    };
    EmployeeComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-employee-component',
            templateUrl: './employee.component.html',
            styleUrls: ['./employee.component.scss']
        })
    ], EmployeeComponent);
    return EmployeeComponent;
}());
exports.EmployeeComponent = EmployeeComponent;
//# sourceMappingURL=employee.component.js.map