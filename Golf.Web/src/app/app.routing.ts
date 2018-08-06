import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './account/login-form/login-form.component';

const appRoutes: Routes = [
  { path: '', component: LoginFormComponent } 
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
