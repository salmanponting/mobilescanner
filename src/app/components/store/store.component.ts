import { Component, OnInit,Input } from '@angular/core';
import { store } from '../../services/store';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  @Input() store:store;
  constructor() { }

  ngOnInit(): void {
    console.log(this.store)
  }

}
