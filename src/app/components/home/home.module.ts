import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from 'primeng/button';

import { HomeRoutingModule } from './home-routing.module';
import { CategoryComponent } from './menu/category/category.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home.component';
import { LogoComponent } from './menu/logo/logo.component';
import { SearchComponent } from './menu/search/search.component';
import { CartComponent } from './menu/cart/cart.component';
import { TopBarComponent } from './top-bar/top-bar.component';

@NgModule({
  declarations: [
    CategoryComponent,
    MenuComponent,
    HomeComponent,
    LogoComponent,
    SearchComponent,
    CartComponent,
    TopBarComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
