import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {ViewChild} from '@angular/core';
import {StatusBar, Splashscreen} from 'ionic-native';

// import pages
import {HomePage} from '../pages/home/home';
import {AboutusPage} from '../pages/aboutus/aboutus';
import {ContactusPage} from '../pages/contactus/contactus';
import {DeliveryPage} from '../pages/delivery/delivery';
import {CartPage} from '../pages/cart/cart';
import {TermsPage} from '../pages/terms/terms';
import {CategoriesPage} from '../pages/categories/categories';
import {StoresPage} from '../pages/stores/stores';
import { MyAccountPage } from '../pages/my-account/my-account';

import {CartService} from '../services/cart-service';
// end import pages
declare var RealexHpp;

@Component({
  templateUrl: 'app.html',
  queries: {
    nav: new ViewChild('content')
  }
})
export class MyApp {
  public rootPage: any;  
  public nav: any; 
  public user:any;  
  public pages:any;
  public totQty=0;
  constructor(public platform: Platform, public cs: CartService) {    
    this.rootPage = HomePage;    
    platform.ready().then(() => {     
      StatusBar.styleDefault();  
      Splashscreen.hide();   
    });
    this.cs.getTotQty().then(qty => this.totQty = qty);  
    this.pages = [
      {
        title: 'Home',
        icon: 'ios-home-outline',
        count: 0,
        component: HomePage
      },
      {
        title: 'Categories',
        icon: 'ios-list-box-outline',
        count: 0,
        component: CategoriesPage
      },
      {
        title: 'Cart',
        icon: 'ios-cart-outline',
        count: this.totQty,
        component: CartPage
      },    
      {
        title: 'Stores',
        icon: 'ios-appstore-outline',
        count: 0,
        component: StoresPage
      },
      {
        title: 'About Us',
        icon: 'ios-information-circle-outline',
        count: 0,
        component: AboutusPage
      },
      {
        title: 'Contact Us',
        icon: 'ios-mail-outline',
        count: 0,
        component: ContactusPage
      },
      {
        title: 'Delivery',
        icon: 'ios-people-outline',
        count: 0,
        component: DeliveryPage
      },
      {
        title: 'Terms & Condition',
        icon: 'ios-book-outline',
        count: 0,
        component: TermsPage
      }
      /*,
      {
        title: 'My Account',
        icon: 'ios-contact-outline',
        count: 0,
        component: MyAccountPage        
      }*/
  ]; 
  } 

  openPage(page) {  
    this.nav.setRoot(page.component);
  }
}


