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
  }

  onClick(category: string) {
     this._service.txFilterCategory.next(category);
  }

  get min_price() {
    return this.form.get('min_price');
  }
  get max_price() {
    return this.form.get('max_price');
  }

  Submite() {
    if (this.min_price.valid || this.max_price.valid) {
      this._service.txFilterPrice.next([this.form.value.min_price, this.form.value.max_price]);
    }
  }

}
