import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HeaderComponent } from './header/header.component';
import { TopheaderComponent } from './topheader/topheader.component';
import { TopmenuComponent } from './header/topmenu/topmenu.component';
import { MainMenuComponent } from './header/main-menu/main-menu.component';
import { containerComponent } from './container/container.component';
import { SearchComponent } from './container/search/search.component';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './container/product-list/product-list.component';
import { SearchlocationsComponent } from './header/searchlocations/searchlocations.component';
import { ProductComponent } from './container/product-list/product/product.component';
import { FilterComponent } from './container/product-list/filter/filter.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    App,
    HeaderComponent,
    TopheaderComponent,
    TopmenuComponent,
    MainMenuComponent,
    containerComponent,
    SearchComponent,
    ProductListComponent,
    SearchlocationsComponent,
    ProductComponent,
    FilterComponent,
    HomeComponent,
    AboutComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
