import { Component, OnInit } from '@angular/core';
import {RxTxService} from '../../services/rx-tx.service';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent implements OnInit {

  constructor(private  _service: RxTxService) { }

  ngOnInit() {
  }

  onClick(category: string) {
    this._service.txSort.next(category);
  }
}
