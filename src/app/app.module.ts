import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms'

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
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { CreateComponent } from './components/create/create.component';

const appRoutes: Routes = [
  { path: '', component: BodyComponent },
  { path: 'post', component: CreateComponent }
]

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
    LocationdropdownComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
