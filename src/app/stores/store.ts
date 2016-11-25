export interface IStore {
    _id: string;
    _rev: string;
    store_number: string;
    salesDistrict: string;
    payersetup: string;
    payer: string;
    zip: string;
    city: string;
    storeContact: string;
    roe_authorization: string;
    salesREP: string;
    acctype: string;
    store_name: string;
    state: string;
    storeEmail: string;
    salesREPEmail: string;
    address: string;    
}

export interface IStoreHistory{
    _id: string;
    _rev: string;
    amount_dollar: string[];
    history_type: string;
    item_type: string;
    division: string;
    base: string;
    sap_number: string;
    qty: number[];
    item_no: string;
}