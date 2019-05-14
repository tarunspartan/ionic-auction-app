import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserpagePage } from './userpage';

@NgModule({
  declarations: [
    UserpagePage,
  ],
  imports: [
    IonicPageModule.forChild(UserpagePage),
  ],
})
export class UserpagePageModule {}
