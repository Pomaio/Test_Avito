import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {Iproduct} from '../../model/idata_prod';
import {ApiConnect} from '../../services/api-connect.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, AfterViewInit {

  @Input() data: any;
  Info: Iproduct;
  date: string = Date();
  cardDom: any;
  id_image = '_i';
  favor = '';
  seller = '';
  seller_rat = '';

  constructor(private http: ApiConnect) { }
  ngOnInit() {
    this.Info = this.data;
    this.favor = (localStorage.getItem('favor')
      .split(',').some((num) => num === this.Info.id))
      ? 'favor' : '';
    this.http.getSeller(this.Info.relationships.seller).subscribe((data) => {
      this.seller = data.data.name;
      this.seller_rat = data.data.rating;
    });
  }

  ngAfterViewInit() {
    document.getElementById(`${this.Info.id}${this.id_image}`).setAttribute('src', this.Info.pictures[0]); // = this.Info.pictures[0];
    document.getElementById(`${this.Info.id}`).className += ' ' + this.addBorder(this.Info.category);
  }
  addBorder(category: string) {
     if (category === 'immovable') { return 'border-danger'; }
     if (category === 'cameras') { return 'border-success'; }
     if (category === 'auto') { return 'border-warning'; }
     if (category === 'laptops') { return 'border-info'; }


  }

  Ifavorites() {
    if (this.favor === '') {
      this.favor = 'favor';
      let favorites = localStorage.getItem('favor');
      favorites = (favorites == null) ? '' : favorites + ',';
      localStorage.setItem('favor', favorites + this.Info.id);
    } else {
      this.favor = '';
      let favorites = localStorage.getItem('favor');
      favorites = favorites.split(',')
        .filter((num) => num !== this.Info.id).join(',');
      localStorage.setItem('favor', favorites);
    }
  }
}
