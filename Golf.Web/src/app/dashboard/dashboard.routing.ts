import { ModuleWithProviders } from '@angular/core';
import { RouterModule }        from '@angular/router';

import { RootComponent }    from './root/root.component';
import { HomeComponent }    from './home/home.component'; 

import { AuthGuard } from '../auth.guard';
import { OrdersComponent } from './orders/orders.component';
import { OrderAddComponent } from './order_add/order_add.component';
import { OrderEditComponent } from './order_edit/order_edit.component';
import { ComponentsComponent } from './components/components.component';
import { ComponentAddComponent } from './component-add/component-add.component';
import { ComponentEditComponent } from './component-edit/component-edit.component';
import { ImportComponent } from './import/import.component';

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
        { path: 'components', component: ComponentsComponent },
        { path: 'component_add', component: ComponentAddComponent },
        { path: 'component_edit/:id', component: ComponentEditComponent },
        { path: 'import', component: ImportComponent }
      ]       
    }  
]);

