import { Component, OnInit } from '@angular/core';
import { Produit } from '../modeles/produit';

@Component({
  selector: 'app-liste-produit',
  templateUrl: './liste-produit.component.html',
  styleUrls: ['./liste-produit.component.css']
})
export class ListeProduitComponent implements OnInit {
  produits:Produit[]=[];
  produitF:Produit[]=[];
  p : number=1;
  constructor(){
    this.produits!.push({id:1,nom:"Pc Portable", prix:3800,quantite:12,photo:"assets/images/pc.jpg",categorie:{id:1,nom:"Informatique"}});
    this.produits!.push({id:3,nom:"Imprimante", prix:650,quantite:0,photo:"assets/images/imprimante.jpg",categorie:{id:1,nom:"Informatique"}});
    this.produits!.push({id:4,nom:"Smart Watch ", prix:750,quantite:30,photo:"assets/images/watch.jpg",categorie:{id:1,nom:"Informatique"}});
    this.produits!.push({id:1,nom:"Machine à laver", prix:1200,quantite:0,photo:"assets/images/machine.jpg",categorie:{id:1,nom:"Electroménagers"}});
    this.produits!.push({id:3,nom:"Aspirateur", prix:450,quantite:5,photo:"assets/images/aspirateur.jpg",categorie:{id:1,nom:"Electroménagers"}});
    this.produits!.push({id:4,nom:"Souris ", prix:50,quantite:30,photo:"assets/images/souris.jpg",categorie:{id:1,nom:"Informatique"}});
    this.produits!.push({id:1,nom:"IPhone 13-Pro Max", prix:2800,quantite:0,photo:"assets/images/iphone.jpg",categorie:{id:1,nom:"Téléphonique"}});
    this.produits!.push({id:3,nom:"Casque", prix:100,quantite:5,photo:"assets/images/casque.jpg",categorie:{id:1,nom:"Informatique"}});
    this.produits!.push({id:4,nom:"Unité Central ", prix:1150,quantite:18,photo:"assets/images/unite.jpg",categorie:{id:1,nom:"Informatique"}});
    this.produits!.push({id:4,nom:"Refrigèrateur ", prix:1150,quantite:0,photo:"assets/images/ref.jpg",categorie:{id:1,nom:"Electroménagers"}});
  }
  
  ngOnInit(): void {
    this.produitF=this.produits
    
  }

  set texte(s:string){
    this.produitF=this.filtrer(s);
  } 
  filtrer(s:string){
    return this.produits.filter((el)=>el.nom.indexOf(s)!=-1)
  }

}
