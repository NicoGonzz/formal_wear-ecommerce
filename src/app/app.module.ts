import { HttpClientModule } from "@angular/common/http";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgxCaptchaModule } from 'ngx-captcha';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        NgxCaptchaModule
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    providers: [],
})

export class AppModule { }
