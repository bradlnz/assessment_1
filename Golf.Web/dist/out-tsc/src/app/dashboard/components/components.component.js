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
var ComponentsComponent = /** @class */ (function () {
    function ComponentsComponent(dashboardService, router) {
        this.dashboardService = dashboardService;
        this.router = router;
    }
    ComponentsComponent.prototype.edit = function (id) {
        this.router.navigate(['dashboard', 'component-edit', id]);
    };
    ComponentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dashboardService.getComponents().subscribe(function (response) {
            _this.components = response;
        }, function (error) {
            //this.notificationService.printErrorMessage(error);
        });
    };
    ComponentsComponent = __decorate([
        core_1.Component({
            selector: 'app-components',
            templateUrl: './components.component.html',
            styleUrls: ['./components.component.scss']
        }),
        __metadata("design:paramtypes", [dashboard_service_1.DashboardService, router_1.Router])
    ], ComponentsComponent);
    return ComponentsComponent;
}());
exports.ComponentsComponent = ComponentsComponent;
//# sourceMappingURL=components.component.js.map