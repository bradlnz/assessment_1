"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var shared_module_1 = require("../shared/modules/shared.module");
var router_1 = require("@angular/router");
var dashboard_routing_1 = require("./dashboard.routing");
var root_component_1 = require("./root/root.component");
var home_component_1 = require("./home/home.component");
var dashboard_service_1 = require("./services/dashboard.service");
var auth_guard_1 = require("../auth.guard");
var orders_component_1 = require("./orders/orders.component");
var order_add_component_1 = require("./order_add/order_add.component");
var order_edit_component_1 = require("./order_edit/order_edit.component");
var import_component_1 = require("./import/import.component");
var component_edit_component_1 = require("./component-edit/component-edit.component");
var component_add_component_1 = require("./component-add/component-add.component");
var components_component_1 = require("./components/components.component");
var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule,
                common_1.CommonModule,
                forms_1.ReactiveFormsModule,
                forms_1.FormsModule,
                dashboard_routing_1.routing,
                shared_module_1.SharedModule
            ],
            declarations: [root_component_1.RootComponent, home_component_1.HomeComponent, orders_component_1.OrdersComponent, order_add_component_1.OrderAddComponent, order_edit_component_1.OrderEditComponent, import_component_1.ImportComponent, component_edit_component_1.ComponentEditComponent, component_add_component_1.ComponentAddComponent, components_component_1.ComponentsComponent],
            exports: [],
            providers: [auth_guard_1.AuthGuard, dashboard_service_1.DashboardService]
        })
    ], DashboardModule);
    return DashboardModule;
}());
exports.DashboardModule = DashboardModule;
//# sourceMappingURL=dashboard.module.js.map