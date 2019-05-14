import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ActionSheetController,
  AlertController,
  LoadingController
} from "ionic-angular";
import { Camera, CameraOptions } from "@ionic-native/camera";
import { Crop } from "@ionic-native/crop";
import { Http } from "@angular/http";
import firebase from "firebase";
import { HomePage } from "../home/home";
import { SERVER_URL } from "../../../environment/environment";
import { MyauctionsPage } from "../myauctions/myauctions";
import { Network } from "@ionic-native/network";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";

/**
 * Generated class for the SellPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: "page-sell",
  templateUrl: "sell.html"
})
export class SellPage {
  private todo: FormGroup;
  loadAlert: any;
  loader = "../../assets/imgs/sellpage.gif";
  mail = localStorage.getItem("mail");
  product = {
    mail: this.mail,
    name: "",
    initialprice: "",
    bidprice: "",
    bidder: "",
    date: "",
    image: "",
    category: "",
    description: ""
  };
  base64ImageURL: any;
  // img: any;
  show: boolean;
  // https://firebasestorage.googleapis.com/v0/b/auctionapp-a1f6d.appspot.com/o/itemphotos%2Fitemicon.png?alt=media&token=2348d69a-1294-428b-86cf-5b9b061e86e5
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public actionsheetCtrl: ActionSheetController,
    private camera: Camera,
    public http: Http,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    private network: Network,
    private crop: Crop,
    private formBuilder: FormBuilder
  ) {
    this.todo = this.formBuilder.group({
      name: ["", Validators.required],
      price: ["", Validators.required],
      date: ["", Validators.required],
      category: ["", Validators.required],
      description: ["", Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad SellPage");
    this.show = false;
  }

  checkConnection() {
    if (this.network.type == "none") {
      // alert("Check your Internet Connection");
      this.internetAlert();
    } else {
      this.sell();
    }
  }

  sell() {
    this.presentLoading();
    this.http.post(SERVER_URL + "/sell", this.product).subscribe(data => {
      // console.log(data.json());
      this.navCtrl.setRoot(SellPage);
      this.pushAlert();
      // console.log(this.userData);
    });
    console.log(this.product);
  }

  presentLoading() {
    this.loadAlert = this.loadingCtrl.create({
      content: "Uploading...",
      // duration: 3000
      dismissOnPageChange: true
    });
    this.loadAlert.present();
  }

  capture() {
    // Defining camera options
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 800,
      targetHeight: 800,
      allowEdit: true,
      correctOrientation: true
    };

    this.camera.getPicture(options).then(
      imageData => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64:
        this.base64ImageURL = "data:image/jpeg;base64," + imageData;
        // alert(this.base64ImageURL);
        // this.img = this.base64ImageURL;
        // alert(this.img);
        this.show = true;
        this.uploadPicture();
      },
      err => {
        // Handle error
        console.log(err);
      }
    );
  }

  choose() {
    // console.log("Im in choose");
    // Defining camera options
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum: false,
      targetWidth: 800,
      targetHeight: 800,
      allowEdit: true,
      correctOrientation: true
    };

    this.camera.getPicture(options).then(
      imageData => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64:
        this.base64ImageURL = "data:image/jpeg;base64," + imageData;
        // this.img = this.base64ImageURL;
        this.show = true;
        this.uploadPicture();
      },
      err => {
        // Handle error
        console.log(err);
      }
    );
  }

  uploadPicture() {
    // alert("im in upload");
    // console.log("Im in upload");
    let storageRef = firebase.storage().ref("/itemphotos");
    var uuid = this.guid();
    const imageRef = storageRef.child("itemphotos" + uuid);
    imageRef
      .putString(this.base64ImageURL, firebase.storage.StringFormat.DATA_URL)
      .then(snapshot => {
        // Do something here when the data is succesfully uploaded!
        // alert("snapshot" + snapshot.downloadURL);
        //  this.product.image = snapshot.downloadURL;
        //  console.log("imgurl"+this.imgurl);
        imageRef
          .getDownloadURL()
          .then(url => {
            // console.log("url:" + url);
            //  this.img=url;
            this.product.image = url;
            // alert(this.product.image);
          })
          .catch(error => {
            console.log(error);
          });
        //this.loading.dismiss();
        this.base64ImageURL = "";
      });
  }

  guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return (
      s4() +
      s4() +
      "-" +
      s4() +
      "-" +
      s4() +
      "-" +
      s4() +
      "-" +
      s4() +
      s4() +
      s4()
    );
  }

  openActionSheet() {
    let actionSheet = this.actionsheetCtrl.create({
      title: "Options",
      cssClass: "action-sheets-basic-page",
      buttons: [
        {
          text: "Camera",
          role: "destructive",
          icon: "camera",
          handler: () => {
            this.capture();
          }
        },
        {
          text: "Gallery",
          icon: "image",
          handler: () => {
            this.choose();
            console.log("Share clicked");
          }
        },
        {
          text: "Cancel",
          role: "cancel",
          icon: "close",
          handler: () => {}
        }
      ]
    });
    actionSheet.present();
  }
  internetAlert() {
    const alert = this.alertCtrl.create({
      title: "No Internet!",
      subTitle: "Please connect to proper Network & try again.",
      buttons: ["OK"]
    });
    alert.present();
  }
  pushAlert() {
    const alert = this.alertCtrl.create({
      title: "Added Succussfully",
      // subTitle: "Please connect to proper Network & try again.",
      buttons: ["OK"]
    });
    alert.present();
  }
}
