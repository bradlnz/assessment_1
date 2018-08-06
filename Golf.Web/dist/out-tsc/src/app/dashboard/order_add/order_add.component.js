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
var forms_1 = require("@angular/forms");
var dashboard_service_1 = require("../services/dashboard.service");
var OrderAddComponent = /** @class */ (function () {
    function OrderAddComponent(dashboardService) {
        this.dashboardService = dashboardService;
    }
    OrderAddComponent.prototype.createFormControls = function () {
        this.number = new forms_1.FormControl("", forms_1.Validators.required);
        this.dateRequired = new forms_1.FormControl("", forms_1.Validators.required);
        this.description = new forms_1.FormControl("", forms_1.Validators.required);
    };
    OrderAddComponent.prototype.createForm = function () {
        this.order = new forms_1.FormGroup({
            number: this.number,
            dateRequired: this.dateRequired,
            description: this.description
        });
    };
    OrderAddComponent.prototype.ngOnInit = function () {
        this.createFormControls();
        this.createForm();
    };
    OrderAddComponent.prototype.onSubmit = function () {
        console.log(this.order);
        if (this.order.valid) {
            console.log("Form Submitted!");
            this.dashboardService.saveOrder(this.order.value).subscribe(function (response) {
                console.log(response);
            }, function (error) {
                //this.notificationService.printErrorMessage(error);
            });
        }
    };
    OrderAddComponent = __decorate([
        core_1.Component({
            selector: 'app-order_add',
            templateUrl: './order_add.component.html',
            styleUrls: ['./order_add.component.scss']
        }),
        __metadata("design:paramtypes", [dashboard_service_1.DashboardService])
    ], OrderAddComponent);
    return OrderAddComponent;
}());
exports.OrderAddComponent = OrderAddComponent;
//# sourceMappingURL=order_add.component.js.map