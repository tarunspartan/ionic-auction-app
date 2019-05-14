import { Component, ViewChild } from "@angular/core";
import { Nav, Platform, MenuController } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { AndroidFullScreen } from "@ionic-native/android-full-screen";

import { HomePage } from "../pages/home/home";
import { LoginPage } from "../pages/login/login";
import { SellPage } from "../pages/sell/sell";
import { MybidsPage } from "../pages/mybids/mybids";
import { MyauctionsPage } from "../pages/myauctions/myauctions";

@Component({
  templateUrl: "app.html"
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // rootPage: any = LoginPage;
  // mail: any;
  public rootPage;
  mail = localStorage.getItem("mail");

  pages: Array<{ icon: string; title: string; component: any; color: any }>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public menuCtrl: MenuController,
    private androidFullScreen: AndroidFullScreen
  ) {
    this.initializeApp();
    // this.mail = localStorage.getItem("mail");
    // used for an example of ngFor and navigation
    this.pages = [
      { icon: "home", title: "Home", component: HomePage, color: "primary" },
      { icon: "pricetag", title: "Sell", component: SellPage, color: "light" },
      {
        icon: "albums",
        title: "My Bids",
        component: MybidsPage,
        color: "light"
      },
      {
        icon: "albums",
        title: "My Auctions",
        component: MyauctionsPage,
        color: "light"
      }
    ];
  }

  initializeApp() {
    this.androidFullScreen.immersiveMode();
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleLightContent();
      this.splashScreen.hide();
      if (this.mail) {
        this.rootPage = HomePage;
      } else {
        this.rootPage = LoginPage;
      }
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
    page.color = "primary";
    for (let p of this.pages) {
      if (p.title == page.title) {
        p.color = "primary";
      } else {
        p.color = "light";
      }
    }
  }

  logout() {
    // delete this.mail;
    localStorage.clear();
    this.nav.setRoot(LoginPage);
  }
}
