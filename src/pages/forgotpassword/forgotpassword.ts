import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  MenuController
} from "ionic-angular";
import { LoginPage } from "../login/login";

/**
 * Generated class for the ForgotpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: "page-forgotpassword",
  templateUrl: "forgotpassword.html"
})
export class ForgotpasswordPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController
  ) {
    // this.menuCtrl.enable(false);
  }

  ionViewWillEnter() {
    console.log("ionViewDidLoad ForgotpasswordPage");
    this.menuCtrl.enable(false);
  }

  ionViewWillLeave() {
    // this.menuCtrl.swipeEnable(true);
    this.menuCtrl.enable(true);
  }

  recovery() {
    this.navCtrl.setRoot(LoginPage);
  }
}
