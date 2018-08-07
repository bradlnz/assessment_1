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
var OrderEditComponent = /** @class */ (function () {
    function OrderEditComponent(dashboardService, route, router) {
        this.dashboardService = dashboardService;
        this.route = route;
        this.router = router;
    }
    OrderEditComponent.prototype.createFormControls = function () {
        this.number = new forms_1.FormControl("", forms_1.Validators.required);
        this.dateRequired = new forms_1.FormControl("", forms_1.Validators.required);
        this.description = new forms_1.FormControl("", forms_1.Validators.required);
    };
    OrderEditComponent.prototype.createForm = function () {
        this.order = new forms_1.FormGroup({
            number: this.number,
            dateRequired: this.dateRequired,
            description: this.description
        });
    };
    OrderEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createFormControls();
        this.createForm();
        this.route.params.subscribe(function (params) {
            _this.dashboardService.getOrder(params.id).subscribe(function (response) {
                _this.order.patchValue(response);
                console.log(response);
                _this.components = response.components;
            });
        });
    };
    OrderEditComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.order);
        if (this.order.valid) {
            console.log("Form Submitted!");
            this.dashboardService.saveOrder(this.order.value).subscribe(function (response) {
                console.log(response);
                _this.router.navigate(['dashboard', 'orders']);
            }, function (error) {
                //this.notificationService.printErrorMessage(error);
            });
        }
    };
    OrderEditComponent = __decorate([
        core_1.Component({
            selector: 'app-order_edit',
            templateUrl: './order_edit.component.html',
            styleUrls: ['./order_edit.component.scss']
        }),
        __metadata("design:paramtypes", [dashboard_service_1.DashboardService, router_1.ActivatedRoute, router_1.Router])
    ], OrderEditComponent);
    return OrderEditComponent;
}());
exports.OrderEditComponent = OrderEditComponent;
//# sourceMappingURL=order_edit.component.js.map