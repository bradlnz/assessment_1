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
var forms_1 = require("@angular/forms");
var dashboard_service_1 = require("../services/dashboard.service");
var ComponentAddComponent = /** @class */ (function () {
    function ComponentAddComponent(dashboardService, router, route) {
        this.dashboardService = dashboardService;
        this.router = router;
        this.route = route;
    }
    ComponentAddComponent.prototype.createFormControls = function () {
        this.number = new forms_1.FormControl("", forms_1.Validators.required);
        this.quantity = new forms_1.FormControl("", forms_1.Validators.required);
    };
    ComponentAddComponent.prototype.createForm = function () {
        this.component = new forms_1.FormGroup({
            number: this.number,
            quantity: this.quantity
        });
    };
    ComponentAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createFormControls();
        this.createForm();
        this.route.params.subscribe(function (params) {
            _this.orderId = params.id;
        });
    };
    ComponentAddComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.component);
        if (this.component.valid) {
            console.log("Form Submitted!");
            var component = this.component.value;
            component.orderId = this.orderId;
            this.dashboardService.saveComponent(component).subscribe(function (response) {
                _this.router.navigate(['dashboard', 'components']);
            }, function (error) {
            });
        }
    };
    ComponentAddComponent = __decorate([
        core_1.Component({
            selector: 'app-component-add',
            templateUrl: './component-add.component.html',
            styleUrls: ['./component-add.component.scss']
        }),
        __metadata("design:paramtypes", [dashboard_service_1.DashboardService, router_1.Router, router_1.ActivatedRoute])
    ], ComponentAddComponent);
    return ComponentAddComponent;
}());
exports.ComponentAddComponent = ComponentAddComponent;
//# sourceMappingURL=component-add.component.js.map