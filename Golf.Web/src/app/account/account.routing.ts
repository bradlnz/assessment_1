import { ModuleWithProviders } from '@angular/core';
import { RouterModule }        from '@angular/router';

import { LoginFormComponent }    from './login-form/login-form.component';


export const routing: ModuleWithProviders = RouterModule.forChild([
  { path: '', component: LoginFormComponent}
]);
