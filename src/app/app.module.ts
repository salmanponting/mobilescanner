import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreComponent } from './components/store/store.component';
import { StoresComponent } from './components/stores/stores.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { dataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule,Routes } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { ItemComponent } from './components/item/item.component';

const routes:Routes=[
  {
    path:'',
    component:StoresComponent
  },
  {
    path:'search',
    component:SearchComponent
  },
  {
    path:'search/item',
    component:ItemComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    StoresComponent,
    SearchComponent,
    ItemComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [dataService],
  bootstrap: [AppComponent],
  exports: [ RouterModule ]
})
export class AppModule { }
