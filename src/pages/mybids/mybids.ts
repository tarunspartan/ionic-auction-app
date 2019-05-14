import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { SERVER_URL } from "../../../environment/environment";
import { Http } from "@angular/http";
import { ProductdetailsPage } from "../productdetails/productdetails";

/**
 * Generated class for the MybidsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: "page-mybids",
  templateUrl: "mybids.html"
})
export class MybidsPage {
  bidder = localStorage.getItem("mail");
  mybids: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad MybidsPage");
  }

  ngOnInit(): void {
    // console.log(this.bidder);
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // console.log("http://localhost:3000/sellbyuser?mail="+this.mail);
    this.http
      .get(SERVER_URL + "/mybids?bidder=" + this.bidder)
      .subscribe(data => {
        // console.log(data.json());
        this.mybids = data.json();
      });
  }

  open(id) {
    // alert(name);
    // this.navCtrl.push(ProductdetailsPage);
    this.navCtrl.push(ProductdetailsPage, { itemId: id });
  }
}
