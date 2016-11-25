import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from '@angular/material';
import {FormsModule, ReactiveFormsModule } from "@angular/forms";

//Import Components here
import { AppComponent } from './app.component';
import { StoresComponent } from './stores/stores.component';
import { StoresSalesHistoryComponent } from './stores/stores.saleshistory.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
    imports: [
        NgbModule.forRoot(),
        MaterialModule.forRoot(),
        BrowserModule,
        HttpModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule 
    ],
    declarations: [AppComponent, StoresComponent, StoresSalesHistoryComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
