import { SharedModule } from './../shared/shared.module';
import { NoAuthGuard } from './no-auth.guard.service';
import { Router, RouterModule } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';

const authRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'login',
    component: AuthComponent,
    canActivate: [NoAuthGuard]
  },
  {
    path: 'register',
    component: AuthComponent,
    canActivate: [NoAuthGuard]
  }
]);
@NgModule({
  imports: [
    CommonModule,
    authRouting,
    SharedModule
  ],
  declarations: [AuthComponent],
  providers: [NoAuthGuard]
})
export class AuthModule { }
