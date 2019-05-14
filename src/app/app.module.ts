import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { HttpModule } from "@angular/http";
import firebase from "firebase";
import { Network } from "@ionic-native/network";
import { Crop } from "@ionic-native/crop";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";

import { AndroidFullScreen } from "@ionic-native/android-full-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { LoginPage } from "../pages/login/login";
import { SignupPage } from "../pages/signup/signup";
import { SellPage } from "../pages/sell/sell";
import { MybidsPage } from "../pages/mybids/mybids";
import { CallNumber } from "@ionic-native/call-number";

import { Camera } from "@ionic-native/camera";
import { MyauctionsPage } from "../pages/myauctions/myauctions";
import { ProductdetailsPage } from "../pages/productdetails/productdetails";
import { LoaderPage } from "../pages/loader/loader";
import { ForgotpasswordPage } from "../pages/forgotpassword/forgotpassword";
import { UserpagePage } from "../pages/userpage/userpage";
import { IonicImageViewerModule } from "ionic-img-viewer";
// import { PopoverPage } from "../pages/home/";

export const firebaseConfig = {
  apiKey: "AIzaSyDLutLNsZk7Cshpu7RkIRMhRo_bTnlXWNA",
  authDomain: "auctionapp-a1f6d.firebaseapp.com",
  databaseURL: "https://auctionapp-a1f6d.firebaseio.com",
  projectId: "auctionapp-a1f6d",
  storageBucket: "auctionapp-a1f6d.appspot.com",
  messagingSenderId: "651258766641"
};
firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    SellPage,
    MybidsPage,
    MyauctionsPage,
    ProductdetailsPage,
    LoaderPage,
    ForgotpasswordPage,
    UserpagePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicImageViewerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    SellPage,
    MybidsPage,
    MyauctionsPage,
    ProductdetailsPage,
    LoaderPage,
    ForgotpasswordPage,
    UserpagePage
  ],
  providers: [
    StatusBar,
    AndroidFullScreen,
    SplashScreen,
    Network,
    CallNumber,
    Crop,
    Camera,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
