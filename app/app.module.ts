import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { ModalComponent } from './_directives/index';
import { ModalService } from './_services/index';
import { HomeComponent } from './home/index';
import { TestPageComponent } from './test-page/index';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing
    ],
    declarations: [
        AppComponent,
        ModalComponent,
        HomeComponent,
        TestPageComponent
    ],
    providers: [
        ModalService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }