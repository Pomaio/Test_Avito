import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LengthPipe} from './length-pipe/length.pipe';
import {PricePipe} from './price-pipe/price.pipe';

@NgModule({
  declarations: [LengthPipe, PricePipe],
  imports: [
    CommonModule
  ],
  exports: [LengthPipe, PricePipe]
})
export class PipesModule { }
