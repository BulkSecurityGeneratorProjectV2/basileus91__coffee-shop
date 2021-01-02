import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CoffeshopSharedModule } from 'app/shared';
import { HOME_ROUTE, HomeComponent } from './';
import { ShoppingCardComponent } from './shopping-card/shopping-card.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FinishedOrderComponent } from './finished-order/finished-order.component';
import { ShopComponent } from './shop/shop.component';
import { SlideshowModule } from 'ng-simple-slideshow';
import { AboutUsComponent } from 'app/home/about-us/about-us.component';
import { ContactsComponent } from 'app/home/contacts/contacts.component';
import { NgEsriMapModule } from 'ng-esri-map';

@NgModule({
  imports: [CoffeshopSharedModule, RouterModule.forChild([HOME_ROUTE]), FormsModule, ReactiveFormsModule, SlideshowModule, NgEsriMapModule],
  declarations: [
    HomeComponent,
    ShoppingCardComponent,
    CartComponent,
    CheckoutComponent,
    FinishedOrderComponent,
    ShopComponent,
    AboutUsComponent,
    ContactsComponent
  ],
  exports: [ShoppingCardComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CoffeshopHomeModule {}
