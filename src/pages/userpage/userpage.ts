import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Http } from "@angular/http";
import { SERVER_URL } from "../../../environment/environment";
import { CallNumber } from "@ionic-native/call-number";

/**
 * Generated class for the UserpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-userpage",
  templateUrl: "userpage.html"
})
export class UserpagePage {
  email = this.navParams.get("usermail");
  user: any;
  name: any;
  mail: any;
  number: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http,
    private callNumber: CallNumber
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad UserpagePage");
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.http
      .get(SERVER_URL + "/getuser?mail=" + this.email)
      .subscribe(data => {
        this.user = data.json();
        this.name = this.user[0].fullName;
        this.mail = this.user[0].email;
        this.number = this.user[0].phoneNumber;
        // console.log(this.user);
      });
  }

  call(num) {
    console.log(num);
    this.callNumber
      .callNumber("this.number", true)
      .then(res => console.log("Launched dialer!", res))
      .catch(err => console.log("Error launching dialer", err));
  }
}
