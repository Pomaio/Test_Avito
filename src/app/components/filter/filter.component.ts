import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RxTxService} from '../../services/rx-tx.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private _service: RxTxService) {

  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      min_price: [''],
      max_price: ['']
    });
    this.form.valueChanges.subscribe(data => console.log('Form changes', data));
  }

  onClick(category: string) {
     this._service.txfilterProp.next(category);
  }

  Change(min: string, value: any) {
    console.log('kek');
  }
  get min_price() {
    return this.form.get('min_price');
  }
  get max_price() {
    return this.form.get('max_price');
  }
}
