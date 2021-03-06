"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var root_component_1 = require("./root/root.component");
var home_component_1 = require("./home/home.component");
var auth_guard_1 = require("../auth.guard");
var orders_component_1 = require("./orders/orders.component");
var order_add_component_1 = require("./order_add/order_add.component");
var order_edit_component_1 = require("./order_edit/order_edit.component");
var components_component_1 = require("./components/components.component");
var component_add_component_1 = require("./component-add/component-add.component");
var component_edit_component_1 = require("./component-edit/component-edit.component");
var import_component_1 = require("./import/import.component");
exports.routing = router_1.RouterModule.forChild([
    {
        path: 'dashboard',
        component: root_component_1.RootComponent, canActivate: [auth_guard_1.AuthGuard],
        children: [
            { path: '', component: home_component_1.HomeComponent },
            { path: 'home', component: home_component_1.HomeComponent },
            { path: 'orders', component: orders_component_1.OrdersComponent },
            { path: 'order_add', component: order_add_component_1.OrderAddComponent },
            { path: 'order_edit/:id', component: order_edit_component_1.OrderEditComponent },
            { path: 'components', component: components_component_1.ComponentsComponent },
            { path: 'component-add/:id', component: component_add_component_1.ComponentAddComponent },
            { path: 'component-edit/:id', component: component_edit_component_1.ComponentEditComponent },
            { path: 'import', component: import_component_1.ImportComponent }
        ]
    }
]);
//# sourceMappingURL=dashboard.routing.js.map