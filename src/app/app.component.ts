import {Component, OnInit} from '@angular/core';
import {ApiWorkService} from './services/api-products.service';
import {Iproduct} from './model/idata_prod';
import {RxTxService} from './services/rx-tx.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  info = [];
  info_filter = [];
  info_fil_sort = [];
  itemInPage = 20;
  page = 1;
  constructor(private http: ApiWorkService, private _service: RxTxService) {
    this._service.txfilterProp.subscribe((data) => this.filterCategory(data));
  }
  ngOnInit() {
    this.getDATA(this.page);
    this.info_filter = this.info;
  }
   getDATA(page: number) {
     for (let i = 0; i < this.itemInPage; i++) {
       this.http.getProdAx(i + 20 * (page - 1))
         .subscribe((d) => this.info.push(d.data));
     }
  }
  GetMoreData() {
    this.page += 1;
    if (this.page <= 5) { this.getDATA(this.page); } else { console.log('мало данных'); }
  }
  filterCategory(name: string) {
    switch (name) {
      case '':
        this.info_filter  = this.info;
        break;
      case 'favor':
        for (let i = 0; i < 10; i++) {
          this.GetMoreData();
        }
        const favor = localStorage.getItem('favor')
          .split(',');
        this.info_filter = this.info.filter((elem) => favor.indexOf(elem.id) !== -1);
        break;
      default:
        this.info_filter = this.info.filter((elem) => elem.category === name);
        break;
    }
    console.log(this.info);
  }
}
