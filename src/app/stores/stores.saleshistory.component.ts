'use strict';

/// <reference path="../_reference.d.ts" />

import { Component, OnInit } from '@angular/core';

import { StoresService } from './stores.service';
import { IStore } from './store';

@Component({
    selector: 'storeshistory',
    templateUrl: 'app/stores/stores.component.html',
    providers: [ StoresService ]
})

export class StoresSalesHistoryComponent implements OnInit {
    storeHistory: IStore[];
    store: IStore;
    loading: boolean;
    errorMessage: string;

    constructor(private _storesService: StoresService) { }

    ngOnInit(): void {
        this.loading = true;
        this._storesService.getStore("100060").subscribe(
            store => this.store = store,
            error => this.errorMessage = <any>error);
        /*this.storesService.getStores()
            .subscribe( stores => this.storeHistory = stores,                        
                        error => this.errorMessage = <any>error,
                        () => this.loading = false);*/
        
        /*this.storesService.getLocalStores()
            .then((stores) => {
                this.stores = stores
                this.loading = false
            })
            .catch(() => this.loading = false);*/
    }
}
