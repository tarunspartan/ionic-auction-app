import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SellPage } from './sell';

@NgModule({
  declarations: [
    SellPage,
  ],
  imports: [
    IonicPageModule.forChild(SellPage),
  ],
})
export class SellPageModule {}
