import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  MenuController,
  AlertController,
  LoadingController
} from "ionic-angular";
import { HomePage } from "../home/home";
import { SignupPage } from "../signup/signup";
import { ForgotpasswordPage } from "../forgotpassword/forgotpassword";
import { Http } from "@angular/http";
import { SERVER_URL } from "../../../environment/environment";
import { Network } from "@ionic-native/network";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  private todo: FormGroup;
  userEmail: any;
  userPassword: any;
  status: boolean = true;
  loadAlert: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public http: Http,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private network: Network,
    private formBuilder: FormBuilder
  ) {
    this.todo = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  ionViewWillEnter() {
    console.log("ionViewDidLoad LoginPage");
    this.menuCtrl.enable(false);
  }

  ionViewWillLeave() {
    this.menuCtrl.enable(true);
  }

  checkConnection() {
    if (this.network.type == "none") {
      // alert("Check your Internet Connection");
      this.internetAlert();
    } else {
      this.login();
    }
  }

  login() {
    // console.log(this.todo.value.email);
    this.presentLoading();
    // alert(this.userEmail+","+this.userPassword)
    this.status = false;
    this.http
      .post(SERVER_URL + "/signin", {
        mail: this.userEmail,
        password: this.userPassword
      })
      .subscribe(data => {
        data = data.json();
        let status = "" + data.status;
        // console.log(data);
        if (status === "OK") {
          this.navCtrl.setRoot(HomePage);
          localStorage.setItem("mail", this.userEmail);
          this.status = true;
        } else {
          this.status = true;
          this.failAlert();
          this.loadAlert.dismiss();
          // alert("Authentication Failed");
        }
      });
  }

  skipLogin(){
          this.navCtrl.push(HomePage);
  }

  failAlert() {
    const alert = this.alertCtrl.create({
      title: "Authentication Failed!",
      subTitle: "You entered Invalid Mail or Password.",
      buttons: ["OK"]
    });
    alert.present();
  }

  internetAlert() {
    const alert = this.alertCtrl.create({
      title: "No Internet!",
      subTitle: "Please connect to proper Network & try again.",
      buttons: ["OK"]
    });
    alert.present();
  }

  presentLoading() {
    this.loadAlert = this.loadingCtrl.create({
      content: "Logging you in...",
      // duration: 3000
      dismissOnPageChange: true
    });
    this.loadAlert.present();
  }

  forgotPassword() {
    this.navCtrl.push(ForgotpasswordPage);
  }

  signup() {
    this.navCtrl.push(SignupPage);
  }
}
