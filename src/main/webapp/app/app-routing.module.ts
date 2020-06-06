import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { errorRoute, navbarRoute } from './layouts';
import { DEBUG_INFO_ENABLED } from 'app/app.constants';
import { CartComponent } from 'app/home/cart/cart.component';
import { CheckoutComponent } from 'app/home/checkout/checkout.component';
import { FinishedOrderComponent } from 'app/home/finished-order/finished-order.component';

const LAYOUT_ROUTES = [navbarRoute, ...errorRoute];

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        {
          path: 'admin',
          loadChildren: './admin/admin.module#CoffeshopAdminModule'
        },
        {
          path: 'cart',
          component: CartComponent,
          data: {
            authorities: [],
            pageTitle: 'home.titleCart'
          }
        },
        {
          path: 'cart/checkout',
          component: CheckoutComponent,
          data: {
            authorities: [],
            pageTitle: 'home.titleCheckout'
          }
        },
        {
          path: 'cart/checkout/completed',
          component: FinishedOrderComponent,
          data: {
            authorities: [],
            pageTitle: 'home.titleCheckout'
          }
        },
        ...LAYOUT_ROUTES
      ],
      { enableTracing: DEBUG_INFO_ENABLED }
    )
  ],
  exports: [RouterModule]
})
export class CoffeshopAppRoutingModule {}
