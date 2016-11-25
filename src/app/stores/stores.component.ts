'use strict';

/// <reference path="../_reference.d.ts" />

import { Component, OnInit } from '@angular/core';

import { StoresService } from './stores.service';
import { IStore, IStoreHistory } from './store';
import {FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'stores',
    templateUrl: 'app/stores/stores.component.html',
    providers: [ StoresService ]
})

export class StoresComponent{
    storeHistory: IStoreHistory[];
    store: IStore;
    loading: boolean;
    errorMessage: string;
    sapNo: string;

    constructor(private _storesService: StoresService, public fb: FormBuilder) { }

    public searchStoreForm = this.fb.group({
        sapNo: ["", Validators.required]
    });


    ngOnInit(): void {
        
        /*this._storesService.getStore("100060").subscribe(
            store => this.store = store, 
            error => this.errorMessage = <any>error);
        this.storesService.getStores()
            .subscribe( stores => this.storeHistory = stores,                        
                        error => this.errorMessage = <any>error,
                        () => this.loading = false);
        
        this.storesService.getLocalStores()
            .then((stores) => {
                this.stores = stores
                this.loading = false
            })
            .catch(() => this.loading = false);*/
    }

    onSearchStoreSubmit(): void{
        if(this.sapNo){
            console.log(this.sapNo);
        }
        /*this.loading = true;
        this._storesService.getStoreHistory("100060")
        .subscribe(
            data => {
                this.store = data[0],
                this.storeHistory = data[1]
            },
            error => this.errorMessage = <any>error,
            () => this.loading = false
        );*/
    };

    doSearchStore(event) {
        console.log(this.searchStoreForm.controls.sapNo.value);
        if(this.searchStoreForm.controls.sapNo.value){
            this.loading = true;
            this._storesService.getStoreHistory(this.searchStoreForm.controls.sapNo.value)
            .subscribe(
                data => {
                    this.store = data[0],
                    this.storeHistory = data[1]
                },
                error => this.errorMessage = <any>error,
                () => this.loading = false
            );
        }
    }
}
