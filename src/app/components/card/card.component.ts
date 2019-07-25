import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {Iproduct} from '../../model/idata_prod';

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


  constructor() { }
  ngOnInit() {
    this.Info = this.data;
    console.log(this.data);
    console.log(this.Info.pictures[0], this.Info.id, this.Info.price);

  }

  ngAfterViewInit() {
    document.getElementById(`${this.Info.id}${this.id_image}`).src = this.Info.pictures[0];
    document.getElementById(`${this.Info.id}`).className += ' ' + this.addBorder(this.Info.category);
    console.log(this.cardDom, `${this.Info.id}`);
  }
  addBorder(category: string) {
     if (category === 'immovable') { return 'border-danger'; }
     if (category === 'cameras') { return 'border-success'; }
     if (category === 'auto') { return 'border-warning'; }
     if (category === 'laptops') { return 'border-info'; }


  }
}
