import { Component } from "@angular/core";
import {
  NavController,
  PopoverController,
  MenuController
} from "ionic-angular";
import { Http } from "@angular/http";
import { ProductdetailsPage } from "../productdetails/productdetails";
import { SERVER_URL } from "../../../environment/environment";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  public isSearchOpened = false;
  cat: any = "all";
  products: any;
  prod: any;
  showloader: boolean = true;
  constructor(
    public navCtrl: NavController,
    public http: Http,
    public popoverCtrl: PopoverController,
    public menuCtrl: MenuController
  ) {
    this.showloader = true;
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.cat = "All";
    this.http.get(SERVER_URL + "/sell").subscribe(data => {
      this.prod = data.json();
      this.products = this.prod;
      this.showloader = false;
      // console.log(this.products);
    });
  }

  ionViewWillEnter() {
    let mail = localStorage.getItem("mail");
    if (!mail) {
      this.menuCtrl.enable(false);
    } else {
      this.menuCtrl.enable(true);
    }
  }

  // refresher
  // doRefresh(refresher) {
  //   this.ngOnInit();
  //   setTimeout(() => {
  //     refresher.complete();
  //   }, 2000);
  // }

  updateView(data) {
    this.cat = data;
    if (data == "all") {
      this.showloader = true;
      this.ngOnInit();
    } else {
      this.showloader = true;
      let category = data;
      this.http
        .get(SERVER_URL + "/category?category=" + category)
        .subscribe(data => {
          // console.log(data.json());
          this.prod = data.json();
          this.products = this.prod;
          this.showloader = false;
        });
    }
  }

  initializeItems() {
    this.products = this.prod;
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != "") {
      this.products = this.products.filter(item => {
        return item.name.toLowerCase().indexOf(val.toLowerCase()) > -1;
      });
    }
  }

  open(id) {
    // alert(name);
    // this.navCtrl.push(ProductdetailsPage);
    this.navCtrl.push(ProductdetailsPage, { itemId: id });
  }
}
