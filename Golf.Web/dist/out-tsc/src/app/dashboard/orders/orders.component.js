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
var router_1 = require("@angular/router");
var dashboard_service_1 = require("../services/dashboard.service");
var OrdersComponent = /** @class */ (function () {
    function OrdersComponent(dashboardService, router) {
        this.dashboardService = dashboardService;
        this.router = router;
    }
    OrdersComponent.prototype.edit = function (id) {
        console.log(id);
        this.router.navigate(['dashboard', 'order_edit', id]);
    };
    OrdersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dashboardService.getOrders().subscribe(function (response) {
            _this.orders = response;
        }, function (error) {
            //this.notificationService.printErrorMessage(error);
        });
    };
    OrdersComponent = __decorate([
        core_1.Component({
            selector: 'app-orders',
            templateUrl: './orders.component.html',
            styleUrls: ['./orders.component.scss'],
            providers: [router_1.RouterModule]
        }),
        __metadata("design:paramtypes", [dashboard_service_1.DashboardService, router_1.Router])
    ], OrdersComponent);
    return OrdersComponent;
}());
exports.OrdersComponent = OrdersComponent;
//# sourceMappingURL=orders.component.js.map