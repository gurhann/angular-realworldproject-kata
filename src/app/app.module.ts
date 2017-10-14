import { AuthModule } from './auth/auth.module';
import { RouterModule } from '@angular/router';
import { ApiService } from './shared/service/api.service';
import { JwtService } from './shared/service/jwt.service';
import { UserService } from './shared/service/user.service';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { AppComponent } from './app.component';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { useHash: true });

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    rootRouting,
    AuthModule
  ],
  providers: [
    UserService,
    JwtService,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
