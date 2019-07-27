import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RxTxService {

  txFilterCategory: Subject<any> = new Subject();
  txFilterPrice: Subject<any> = new Subject();
  txSort: Subject<any> = new Subject();

  constructor() { }
}
