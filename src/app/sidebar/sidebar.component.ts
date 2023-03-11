import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Produit } from '../modeles/produit';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  produit:Produit;
  produits:Produit[]=[];
  p : number=1;
  categorie:string;
  nom:string;

  constructor(private router:Router,private ar:ActivatedRoute) {
    
     

   }
   ngOnInit(): void {
    
  

  };

}
