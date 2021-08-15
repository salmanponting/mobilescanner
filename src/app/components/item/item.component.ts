import { Component, OnInit,Input } from '@angular/core';
import { item } from 'src/app/services/item';
import { dataService } from '../../services/data.service';
import { observable, Observable } from 'rxjs';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {


  storesData: Observable<any>;
  @Input() item:item[];
  constructor(private service: dataService) { }

  ngOnInit(): void {
    this.service.getItem().forEach(x=>{
      this.item= x;
      console.log("Item", this.item);
    });
  }

}
