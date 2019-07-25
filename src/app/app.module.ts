import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import {PipesModule} from './pipes/pipes.module';
import { FilterComponent } from './components/filter/filter.component';
import { SortComponent } from './components/sort/sort.component';
import {ApiWorkService} from './services/api-products.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    FilterComponent,
    SortComponent
  ],
  imports: [
    BrowserModule,
    PipesModule, HttpClientModule
  ],
  providers: [ApiWorkService],
  bootstrap: [AppComponent]
})
export class AppModule { }
