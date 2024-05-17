import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './app/header/header.component';
import { ContainerComponent } from './app/container/container.component';
import { LayoutComponent } from './app/layout/layout.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './app/container/product-list/product-list.component';
import { SearchComponent } from './search/search.component';
import { ProductComponent } from './app/container/product-list/product/product.component';
import { FilterComponent } from './app/container/product-list/filter/filter.component';
import { ProductDetailComponent } from './app/container/product-detail/product-detail.component';
import { FeaturedBrandsComponent } from './app/container/featured-brands/featured-brands.component';
import { HoverDirective } from './hover.directive';
import { DisableProductDirective } from './disable-product.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContainerComponent,
    LayoutComponent,
    FooterComponent,
    HomeComponent,
    ProductListComponent,
    SearchComponent,
    ProductComponent,
    FilterComponent,
    ProductDetailComponent,
    FeaturedBrandsComponent,
    HoverDirective,
    DisableProductDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
