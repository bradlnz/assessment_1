"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var login_form_component_1 = require("./account/login-form/login-form.component");
var appRoutes = [
    { path: '', component: login_form_component_1.LoginFormComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map