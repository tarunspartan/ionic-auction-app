import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController
} from "ionic-angular";
import { Http } from "@angular/http";
import { SERVER_URL } from "../../../environment/environment";
import { UserpagePage } from "../userpage/userpage";
import { IonicImageViewerModule } from 'ionic-img-viewer';

/**
 * Generated class for the ProductdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: "page-productdetails",
  templateUrl: "productdetails.html"
})
export class ProductdetailsPage {
  mail = localStorage.getItem("mail");
  loader = "../../assets/imgs/tenor.gif";
  itemData: any;
  id: any;
  iname: any;
  imail: any;
  iprice: any;
  bprice: any;
  idate: any;
  iimage: any;
  ides: any;
  bidprice: number;
  bidder: any;
  bidstatus: boolean;
  authuser:boolean;
  user: boolean = false;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http,
    public alertCtrl: AlertController
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad ProductdetailsPage");
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  if(this.mail){
    this.authuser=true;
  }else{
    this.authuser=false;
  }

    var id = this.navParams.get("itemId");
    // console.log(id);
    this.http.get(SERVER_URL + "/getitem?_id=" + id).subscribe(data => {
      // console.log(data.json());
      this.itemData = data.json();
      // console.log(this.itemData);
      this.id = this.itemData[0]._id;
      this.iname = this.itemData[0].name;
      this.ides = this.itemData[0].description;
      this.imail = this.itemData[0].mail;
      this.iprice = this.itemData[0].initialprice;
      this.idate = this.itemData[0].date;
      this.iimage = this.itemData[0].image;
      this.bprice = this.itemData[0].bidprice;
      this.bidder = this.itemData[0].bidder;
      if (this.bidder == "") {
        this.bidstatus = false;
      } else {
        this.bidstatus = true;
      }
      if (this.imail == this.mail) {
        this.user = false;
      } else {
        this.user = true;
      }
    });
  }

  bidnow() {

    // console.log(this.bidprice);
    if (this.bidprice > this.iprice && this.bidprice > this.bprice) {
      this.http
        .post(SERVER_URL + "/updateBidPrice", {
          bidprice: this.bidprice,
          id: this.id,
          mail: this.mail
        })
        .subscribe(data => {
          // console.log(data.json());
          // console.log("Bid Price Updated");
          this.ngOnInit();
        });
    } else {
      this.bidAlert();
      // alert("Bid price must be Greater than Present Price");
    }
  }

  getUser(mail) {
    this.navCtrl.push(UserpagePage, { usermail: mail });
  }

  loginFirst(){
    this.authAlert();
  }

  bidAlert() {
    const alert = this.alertCtrl.create({
      title: "Bid price must be Greater than Present Price",
      // subTitle: "Bid price must be Greater than Present Price",
      buttons: ["OK"]
    });
    alert.present();
  }

  authAlert() {
    const alert = this.alertCtrl.create({
      title: "You have to login to place your Bid.",
      // subTitle: "Bid price must be Greater than Present Price",
      buttons: ["OK"]
    });
    alert.present();
  }
}
