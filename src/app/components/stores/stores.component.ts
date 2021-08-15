import { Component, OnInit } from '@angular/core';
import { dataService } from '../../services/data.service';
import { observable, Observable } from 'rxjs';
import { store } from '../../services/store';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.css']
})
export class StoresComponent implements OnInit {

  storesData: Observable<any[]>;
  stores:store[];
  constructor(private service: dataService) { }

  ngOnInit(): void {
    this.service.getAllStores().forEach(x=>{
      
      this.stores= x["data"];
      console.log("stores", this.stores);
    });
      
    
  }

}
