import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";
import { SharedModule }       from '../shared/modules/shared.module';
import { RouterModule } from '@angular/router';
import { routing }  from './dashboard.routing';
import { RootComponent } from './root/root.component';
import { HomeComponent } from './home/home.component';
import { DashboardService } from './services/dashboard.service';

import { AuthGuard } from '../auth.guard';
import { OrdersComponent } from './orders/orders.component';
import { OrderAddComponent } from './order_add/order_add.component';
import { OrderEditComponent } from './order_edit/order_edit.component';
import { ImportComponent } from './import/import.component';
import { ComponentEditComponent } from './component-edit/component-edit.component';
import { ComponentAddComponent } from './component-add/component-add.component';
import { ComponentsComponent } from './components/components.component';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    routing,
    SharedModule
  ],
  declarations: [RootComponent, HomeComponent, OrdersComponent, OrderAddComponent, OrderEditComponent, ImportComponent, ComponentEditComponent, ComponentAddComponent, ComponentsComponent],
  exports:      [ ],
  providers:    [AuthGuard,DashboardService]
})
export class DashboardModule { }
