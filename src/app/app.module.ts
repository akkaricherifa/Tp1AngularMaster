import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjouterComponent } from './ajouter/ajouter.component';
import { ListeProduitComponent } from './liste-produit/liste-produit.component';
import { ListeCategoriesComponent } from './liste-categories/liste-categories.component';
import { DetailsComponent } from './details/details.component';
import { ModifierProduitComponent } from './modifier-produit/modifier-produit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PiipePipe } from './piipe.pipe';
import { SortPipe } from './sort.pipe';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    AjouterComponent,
    ListeProduitComponent,
    ListeCategoriesComponent,
    DetailsComponent,
    ModifierProduitComponent,
    HomeComponent,
    PiipePipe,
    SortPipe,
    PagenotfoundComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
