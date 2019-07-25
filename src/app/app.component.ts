import {Component, OnInit} from '@angular/core';
import {ApiWorkService} from './services/api-products.service';
import {Iproduct} from './model/idata_prod';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 69000;
  info: any;
  constructor(private http: ApiWorkService) {
  }
  ngOnInit() {
    this.Subs();
  }
   Subs() {
     this.http.getProdAx(1).subscribe((d) => this.info = d.data);
  }
}
