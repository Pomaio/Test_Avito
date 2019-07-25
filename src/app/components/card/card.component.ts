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


  constructor() { }
  ngOnInit() {
    this.Info = this.data;
    console.log(this.data);
    console.log(this.Info.pictures[0], this.Info.id, this.Info.price);

  }

  ngAfterViewInit() {
    this.cardDom = document.getElementById(`${this.Info.id}`).src = this.Info.pictures[0];
    console.log(this.cardDom, `${this.Info.id}`);
  }

}
