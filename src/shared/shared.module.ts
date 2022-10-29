import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ButtonComponent} from "./button/button.component";

@NgModule({
    declarations: [
        ButtonComponent
    ],
    imports: [
        BrowserModule,
    ],
    exports: [
        ButtonComponent
    ]
})
export class SharedModule {
}
