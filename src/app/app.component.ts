import {Component, OnInit} from '@angular/core';
import {ApiWorkService} from './services/api-products.service';

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
     this.info = this.http.getProducts();
     // this.http.getProdHttp().subscribe((data) => console.log(data));
  }
}
