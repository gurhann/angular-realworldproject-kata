import { RouterModule } from '@angular/router';
import { ApiService } from './shared/service/api.service';
import { JwtService } from './shared/service/jwt.service';
import { UserService } from './shared/service/user.service';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/layout/header/header.component';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { useHash: true });

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    rootRouting
  ],
  providers: [
    UserService,
    JwtService,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
