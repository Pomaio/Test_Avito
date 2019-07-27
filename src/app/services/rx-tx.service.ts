import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RxTxService {

  txfilterProp: Subject<any> = new Subject();

  constructor() { }
}
