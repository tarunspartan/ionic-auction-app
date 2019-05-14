import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MybidsPage } from './mybids';

@NgModule({
  declarations: [
    MybidsPage,
  ],
  imports: [
    IonicPageModule.forChild(MybidsPage),
  ],
})
export class MybidsPageModule {}
