import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  MenuController,
  AlertController,
  LoadingController
} from "ionic-angular";
import { LoginPage } from "../login/login";
import { Http } from "@angular/http";
import { SERVER_URL } from "../../../environment/environment";
import { Network } from "@ionic-native/network";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";

// import { Body } from '@angular/http/src/body';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: "page-signup",
  templateUrl: "signup.html"
})
export class SignupPage {
  private todo: FormGroup;

  loadAlert: any;
  userData = {
    fullName: "",
    email: "",
    phoneNumber: "",
    password: ""
  };
  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public navParams: NavParams,
    public http: Http,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    private network: Network,
    private formBuilder: FormBuilder
  ) {
    this.todo = this.formBuilder.group({
      name: ["", Validators.required],
      number: ["", Validators.required],
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  checkConnection() {
    if (this.network.type == "none") {
      // alert("Check your Internet Connection");
      this.internetAlert();
    } else {
      this.register();
    }
  }

  ionViewWillEnter() {
    console.log("ionViewDidLoad SignupPage");
    this.menuCtrl.enable(false);
  }

  ionViewWillLeave() {
    // this.menuCtrl.swipeEnable(true);
    this.menuCtrl.enable(true);
  }

  register() {
    this.presentLoading();
    // alert("Im in")
    this.http.post(SERVER_URL + "/signup", this.userData).subscribe(data => {
      console.log(data);
      this.navCtrl.setRoot(LoginPage);
      this.loadAlert.dismiss();
      // console.log(this.userData);
    });
  }

  presentLoading() {
    this.loadAlert = this.loadingCtrl.create({
      content: "Signing you up..",
      // duration: 3000
      dismissOnPageChange: true
    });
    this.loadAlert.present();
  }

  internetAlert() {
    const alert = this.alertCtrl.create({
      title: "No Internet!",
      subTitle: "Please connect to proper Network & try again.",
      buttons: ["OK"]
    });
    alert.present();
  }

  loginpage() {
    this.navCtrl.pop();
  }
}
