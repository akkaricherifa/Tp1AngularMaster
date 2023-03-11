import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterComponent } from './ajouter/ajouter.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { ListeCategoriesComponent } from './liste-categories/liste-categories.component';
import { ListeProduitComponent } from './liste-produit/liste-produit.component';
import { ModifierProduitComponent } from './modifier-produit/modifier-produit.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
  {path:"products",component:ListeProduitComponent},
  {path:"ajouter",component:AjouterComponent},
  {path:"categ",component:ListeCategoriesComponent},
  {path:"detail/:id",component:DetailsComponent},
  {path:"modifier",component:ModifierProduitComponent},
  {path:"home",component:HomeComponent},
  {path:"side-bar",component:SidebarComponent},
  {path:"products/:idc",component:ListeProduitComponent},

  { path: '**', component:PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
