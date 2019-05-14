import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyauctionsPage } from './myauctions';

@NgModule({
  declarations: [
    MyauctionsPage,
  ],
  imports: [
    IonicPageModule.forChild(MyauctionsPage),
  ],
})
export class MyauctionsPageModule {}
