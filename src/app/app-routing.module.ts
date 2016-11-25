import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Import Components here
import { StoresComponent } from './stores/stores.component';
import { StoresSalesHistoryComponent } from './stores/stores.saleshistory.component';
const routes: Routes = [
    { path: '', redirectTo: '/stores', pathMatch: 'full' },
    { path: 'stores', component: StoresComponent},
    { path: 'salesHistory', component: StoresSalesHistoryComponent, outlet:'salesHistory'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
