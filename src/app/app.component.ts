import {Component, OnInit} from '@angular/core';
import {ApiWorkService} from './services/api-products.service';
import {Iproduct} from './model/idata_prod';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  info = [];
  itemInPage = 20;
  constructor(private http: ApiWorkService) {
  }
  ngOnInit() {
    this.Subs(1);
  }
   Subs(page: number) {
     for (let i = 0; i < this.itemInPage; i++) {
       this.http.getProdAx(i).subscribe((d) => this.info.push(d.data));
     }
  }
}
