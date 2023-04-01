import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LocationComponent } from './components/header/location/location.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SearchComponent } from './components/header/search/search.component';
import { LanguageComponent } from './components/header/language/language.component';
import { ProfileComponent } from './components/header/profile/profile.component';
import { SellComponent } from './components/header/sell/sell.component';
import { BodyComponent } from './components/body/body.component';
import { CategoriesComponent } from './components/body/categories/categories.component';
import { DropdownComponent } from './components/body/categories/dropdown/dropdown.component';
import { CategoryComponent } from './components/body/categories/category/category.component';
import { BannerComponent } from './components/body/banner/banner.component';
import { ItemsComponent } from './components/body/items/items.component';
import { LocationdropdownComponent } from './components/header/location/locationdropdown/locationdropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LocationComponent,
    SearchComponent,
    LanguageComponent,
    ProfileComponent,
    SellComponent,
    BodyComponent,
    CategoriesComponent,
    DropdownComponent,
    CategoryComponent,
    BannerComponent,
    ItemsComponent,
    LocationdropdownComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
