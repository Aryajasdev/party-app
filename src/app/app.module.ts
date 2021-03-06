import { ItemsPage } from './../pages/items/items';
import { CatsPage } from './../pages/cats/cats';
import {NgModule} from '@angular/core';
import {IonicApp, IonicModule} from 'ionic-angular';
import { FormsModule } from '@angular/forms'; 
import { HttpModule, JsonpModule } from '@angular/http';
import {MyApp} from './app.component';
import { IonicStorageModule } from '@ionic/storage';
import { AngularFireModule } from 'angularfire2'
// import services
import {CategoryService} from '../services/category-service';
import {ItemService} from '../services/item-service';
import {CartService} from '../services/cart-service';

import {MainCategoryService} from '../services/maincats.service';
import {DeliveryService} from '../services/delivery-service';
import {StoreService} from '../services/store-service';
import {UserService} from '../services/user-service';
import {OrderService} from '../services/order-service';
// end import services
// diretives and providers
import { Loader } from '../providers/loader';
import { Nl2br } from '../pipes/nl2br';
import { AuthenticatorService } from '../providers/authenticator';
//Import Pipes
import {FilterArrayPipe} from '../pipes/filter.pipe';
// import pages
import {CartPage} from '../pages/cart/cart';
import {CategoriesPage} from '../pages/categories/categories';
import {CategoryPage} from '../pages/category/category';
import {HomePage} from '../pages/home/home';
import {ItemPage} from '../pages/item/item';
import {ModalItemOptionPage} from '../pages/modal-item-option/modal-item-option';
import {SearchPage} from '../pages/search/search';
import {SettingsPage} from '../pages/settings/settings';
import {StorePage} from '../pages/store/store';
import {TabFilterPage} from '../pages/tab-filter/tab-filter';
import {AboutusPage} from '../pages/aboutus/aboutus';
import {ContactusPage} from '../pages/contactus/contactus';
import {DeliveryPage} from '../pages/delivery/delivery';
import {TermsPage} from '../pages/terms/terms';
import {StoresPage} from '../pages/stores/stores';
import {PaymentPage} from '../pages/payment/payment';
import {InvoicePage} from '../pages/invoice/invoice';

import {ChangePasswordPage} from '../pages/change-password/change-password';
import {ForgotPasswordPage} from '../pages/forgot-password/forgot-password';
import {MyAccountPage} from '../pages/my-account/my-account';
import {RegisterPage} from '../pages/register/register';
import {LoginPage} from '../pages/login/login';
import {CheckoutPage} from '../pages/checkout/checkout';

import {OrderConfirmPage} from "../pages/order-confirm/order-confirm";
// end import pages
export const firebaseConfig ={
  apiKey: "AIzaSyAWj2END-GwzPQzV519OAv_HqePOclduuw",
  authDomain: "myauth-77082.firebaseapp.com",
  databaseURL: "https://myauth-77082.firebaseio.com",
  storageBucket: "myauth-77082.appspot.com",
  messagingSenderId: "1012983492197"
};

@NgModule({
  declarations: [
    MyApp,
    CartPage,
    CategoriesPage,
    CategoryPage,
    CatsPage,
    HomePage,
    ItemPage,
    ModalItemOptionPage,
    SearchPage,
    SettingsPage,
    StoresPage,
    StorePage,
    TabFilterPage,  
    FilterArrayPipe,
    AboutusPage,
    ContactusPage,
    DeliveryPage,
    TermsPage,
    OrderConfirmPage,
    ChangePasswordPage,
    ForgotPasswordPage,
    MyAccountPage,
    RegisterPage,
    LoginPage,
    CheckoutPage,
    PaymentPage,
    InvoicePage,
    Nl2br,
    ItemsPage
  ],
  imports: [
    HttpModule, JsonpModule, FormsModule,IonicStorageModule.forRoot(), AngularFireModule.initializeApp(firebaseConfig), IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CartPage,
    CategoriesPage,
    CategoryPage,
    HomePage,
    ItemPage,
    ModalItemOptionPage,
    SearchPage,
    SettingsPage,
    StoresPage,
    StorePage,
    TabFilterPage,
    AboutusPage,
    ContactusPage,
    DeliveryPage,
    TermsPage,
    OrderConfirmPage,
    ChangePasswordPage,
    ForgotPasswordPage,
    MyAccountPage,
    RegisterPage,
    LoginPage,
    CheckoutPage,
    PaymentPage,
    InvoicePage,
    CatsPage,
    ItemsPage
  ],
  providers: [
    CategoryService,
    ItemService,       
    MainCategoryService,
    DeliveryService,
    StoreService,
    CartService,  
    Storage,
    UserService,
    OrderService,
    Loader,
    AuthenticatorService
    /* import services */
  ]
})
export class AppModule {
}
