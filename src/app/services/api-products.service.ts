import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Iproduct} from '../model/idata_prod';
import {map} from 'rxjs/operators';

const BASE_URL = 'https://avito.dump.academy/products';

@Injectable()

export class ApiWorkService {

  constructor(private http: HttpClient) { }

  getProdAx(index: number): Observable<any> {
    return this.http
      .get(`${BASE_URL}/${index}`);
  }

}
