import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductdetailsPage } from './productdetails';

@NgModule({
  declarations: [
    ProductdetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductdetailsPage),
  ],
})
export class ProductdetailsPageModule {}
