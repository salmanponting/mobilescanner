import {store} from './store'
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { item } from './item';

@Injectable({ providedIn: 'root' })
export class dataService {

    store:store;
    item:item;
    constructor(private http: HttpClient){

    }
    getAllStores(){
      console.log("called");
        return this.http
      .get<store[]>(
        `https://mocki.io/v1/a0194b79-08c8-4881-ae45-108cc3c8827c`,
        {}
      );    
    }
    getItem(){
      console.log("called");
        return this.http
      .get<item[]>(
        `https://mocki.io/v1/02f8ec80-61a2-419c-8111-57ab9148c99a`,
        {}
      );    
    }
}