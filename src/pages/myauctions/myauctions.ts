import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Http } from "@angular/http";
import { SERVER_URL } from "../../../environment/environment";
import { ProductdetailsPage } from "../productdetails/productdetails";

/**
 * Generated class for the MyauctionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: "page-myauctions",
  templateUrl: "myauctions.html"
})
export class MyauctionsPage {
  mail = localStorage.getItem("mail");
  myauctionsdata: any;
  // img="../../assets/imgs/itemicon.png"
  // image:any="../../assets/imgs/itemicon.png"
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad MyauctionsPage");
  }

  open(id) {
    // alert(name);
    // this.navCtrl.push(ProductdetailsPage);
    this.navCtrl.push(ProductdetailsPage, { itemId: id });
  }

  ngOnInit(): void {
    // console.log(this.mail);
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // console.log("http://localhost:3000/sellbyuser?mail="+this.mail);
    this.http
      .get(SERVER_URL + "/sellbyuser?mail=" + this.mail)
      .subscribe(data => {
        // console.log(data.json());
        this.myauctionsdata = data.json();
      });
  }

  deleteItem(id: any) {
    console.log(id);
    this.http.delete(SERVER_URL + "/deleteitem/" + id).subscribe(data => {
      this.ngOnInit();
      console.log(data);
    });
  }
}
