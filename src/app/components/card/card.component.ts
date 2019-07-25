import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  title: string = 'универсал BMX';
  amountPicture: number = 3;
  price: number = 983823;
  date: string = Date();
  seller: string = 'дед пыхто';
  constructor() { }
  ngOnInit() {
  }

}
