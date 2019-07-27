import {Component, OnInit} from '@angular/core';
import {ApiConnect} from './services/api-connect.service';
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
  price_limit = ['', ''];
  constructor(private http: ApiConnect, private _service: RxTxService) {
    this._service.txFilterCategory.subscribe((data) => this.filterCategory(data));
    this._service.txFilterPrice.subscribe((prices) => this.filterPrice(prices));
    this._service.txSort.subscribe((sort) => this.sortProducts(sort));
  }
  ngOnInit() {
    this.getDATA(this.page);
    this.info_fil_sort = this.info;
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
    this.filterPrice(this.price_limit);
  }
  filterPrice(limits: string[]) {
    this.price_limit = limits;
    if (limits[0] !== '' || limits[1] !== '') {
      if (limits[0] !== '') {
        this.info_fil_sort = this.info_filter
          .filter((elem) => (elem.price === undefined) || (elem.price >= limits[0]));
        if (limits[1] !== '') {
          this.info_fil_sort = this.info_fil_sort
            .filter((elem) => (elem.price === undefined) || (elem.price <= limits[1]));
        }
      }
      if (limits[1] !== '') {
        this.info_fil_sort = this.info_filter
          .filter((elem) => (elem.price === undefined) || (elem.price <= limits[1]));
      }
    } else { this.info_fil_sort = this.info_filter; }
  }
  sortProducts(type: string) {
    switch (type) {
      case 'popular':
        this.info_fil_sort.sort(function(a, b) { return a.id - b.id; });
        break;
      case 'price':
        this.info_fil_sort.sort(function(a, b) { return a.price - b.price; });
        break;
      default:
        break;
    }
  }
}
