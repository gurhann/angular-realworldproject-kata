import { HeaderComponent } from './layout/header/header.component';
import { ShowAuthedDirective } from './directive/show-authed.directive';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './layout/footer/footer.component';
import { ListErrorsComponent } from './layout/list-errors/list-errors.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        RouterModule
    ],
    declarations: [
        ShowAuthedDirective,
        FooterComponent,
        HeaderComponent,
        ListErrorsComponent
    ],
    exports: [
        ShowAuthedDirective,
        RouterModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        HeaderComponent,
        FooterComponent
    ]
})
export class SharedModule {

}