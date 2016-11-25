"use strict";

/// <reference path="../_reference.d.ts" />

import { Injectable } from '@angular/core';
import { Headers, Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import * as PouchDB from 'pouchdb';

import 'rxjs/add/operator/map';

import { IStore, IStoreHistory } from './store';

@Injectable()

export class StoresService {
    private _storeUrl = './app/api/stores.json';
    private _storeHistoryUrl = './app/api/11060.json';

    constructor(private http: Http) {

    }

    getStores():  Observable<IStore[]> {
        return this.http.get(this._storeUrl)
            .map((response: Response) => <IStore[]> response.json())
            .catch(this.handleError);
    }

    getStore(id: string): Observable<IStore> {
        return this.getStores()
            .map((stores: IStore[]) => stores.find(p => p._id === id));
    }

    getStoreHistory(id: string){
        return Observable.forkJoin(
            this.getStores().map((stores: IStore[]) => stores.find(p => p._id === id)),
            this.http.get(this._storeHistoryUrl).map((response: Response) => <IStoreHistory[]> response.json())
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError)
        );
    }

    /*getStoreHistory(id: string):  Observable.forkJoin {
        return 
        this.getStores()
            .map((stores: IStore[]) => stores.find(p => p._id === id)),
        this.http.get(this._storeHistoryUrl)
            .map((response: Response) => <IStoreHistory[]> response.json())
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }*/

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    /*storesPouch: any;
    storesCouch: any;

    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) {
        this.storesPouch = new PouchDB('stores');
        this.storesCouch = new PouchDB(SERVER_HOST + 'stores');
    }

    // syncing the stores from couchdb to pouchdb
    syncStores(): Promise<Store> {
        var storeDataSrvInstance = this;
        return storeDataSrvInstance.storesPouch.replicate.from(storeDataSrvInstance.storesCouch)
            .then( () => storeDataSrvInstance.storesPouch.allDocs({ include_docs: true } ))
            .then(res => res.rows);
    }

    //getting the stores from pouchdb
    getLocalStores(): Promise<Store> {
        var storeDataSrvInstance = this;
        return storeDataSrvInstance.storesPouch.allDocs({ include_docs: true })
            .then(res => res.rows);
    }*/
}
