import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';
import { StarRatingComponent } from './star-rating/star-rating.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoaderComponent,
    StarRatingComponent
  ],
  exports: [
    LoaderComponent, StarRatingComponent
  ]
})
export class SharedModule { }
