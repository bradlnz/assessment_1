"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dashboard_service_1 = require("../services/dashboard.service");
var router_1 = require("@angular/router");
var ImportComponent = /** @class */ (function () {
    function ImportComponent(dashboardService, router) {
        this.dashboardService = dashboardService;
        this.router = router;
    }
    ImportComponent.prototype.ngOnInit = function () {
    };
    ImportComponent.prototype.uploadDatasource = function (fileInput) {
        var _this = this;
        var file = fileInput.target.files[0];
        var fileName = file.name;
        var payload = {
            file: file,
        };
        var formData = new FormData();
        formData.append('file', file, file.name);
        this.dashboardService.uploadDatasource(formData)
            .subscribe(function (response) {
            console.log('UPLOADING success');
            _this.router.navigate(['dashboard', 'orders']);
        }, function (error) {
            console.log('error', error);
        });
    };
    ImportComponent = __decorate([
        core_1.Component({
            selector: 'app-import',
            templateUrl: './import.component.html',
            styleUrls: ['./import.component.scss']
        }),
        __metadata("design:paramtypes", [dashboard_service_1.DashboardService, router_1.Router])
    ], ImportComponent);
    return ImportComponent;
}());
exports.ImportComponent = ImportComponent;
//# sourceMappingURL=import.component.js.map