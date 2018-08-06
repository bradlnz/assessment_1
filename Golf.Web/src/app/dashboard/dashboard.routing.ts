import { ModuleWithProviders } from '@angular/core';
import { RouterModule }        from '@angular/router';

import { RootComponent }    from './root/root.component';
import { HomeComponent }    from './home/home.component'; 

import { AuthGuard } from '../auth.guard';
import { OrdersComponent } from './orders/orders.component';
import { OrderAddComponent } from './order_add/order_add.component';
import { OrderEditComponent } from './order_edit/order_edit.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
  {
      path: 'dashboard',
      component: RootComponent, canActivate: [AuthGuard],

      children: [      
       { path: '', component: HomeComponent },
        { path: 'home', component: HomeComponent },
        { path: 'orders', component: OrdersComponent },
        { path: 'order_add', component: OrderAddComponent },
        { path: 'order_edit/:id', component: OrderEditComponent },
      ]       
    }  
]);

