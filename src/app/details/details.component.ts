import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Produit } from '../modeles/produit';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  produit:Produit;
  produits:Produit[]=[];
  id: any;
  constructor(private router:Router,private ar:ActivatedRoute){
    this.produits!.push({id:1,nom:"Pc Portable", prix:3800,quantite:12,photo:"assets/images/pc.jpg",categorie:{id:1,nom:"Informatique"}});
    this.produits!.push({id:2,nom:"Imprimante", prix:650,quantite:0,photo:"assets/images/imprimante.jpg",categorie:{id:1,nom:"Informatique"}});
    this.produits!.push({id:3,nom:"Smart Watch ", prix:750,quantite:30,photo:"assets/images/watch.jpg",categorie:{id:1,nom:"Informatique"}});
    this.produits!.push({id:4,nom:"Machine à laver", prix:1200,quantite:0,photo:"assets/images/machine.jpg",categorie:{id:2,nom:"Electroménagers"}});
    this.produits!.push({id:5,nom:"Aspirateur", prix:450,quantite:5,photo:"assets/images/aspirateur.jpg",categorie:{id:2,nom:"Electroménagers"}});
    this.produits!.push({id:6,nom:"Souris ", prix:50,quantite:30,photo:"assets/images/souris.jpg",categorie:{id:1,nom:"Informatique"}});
    this.produits!.push({id:7,nom:"IPhone 13-Pro Max", prix:2800,quantite:0,photo:"assets/images/iphone.jpg",categorie:{id:3,nom:"Téléphonique"}});
    this.produits!.push({id:8,nom:"Casque", prix:100,quantite:0,photo:"assets/images/casque.jpg",categorie:{id:1,nom:"Informatique"}});
    this.produits!.push({id:9,nom:"Unité Central ", prix:1150,quantite:18,photo:"assets/images/unite.jpg",categorie:{id:1,nom:"Informatique"}});
    this.produits!.push({id:10,nom:"Refrigèrateur ", prix:1150,quantite:0,photo:"assets/images/ref.jpg",categorie:{id:2,nom:"Electroménagers"}});
    this.produits!.push({id:11,nom:"Scanner ", prix:550,quantite:30,photo:"assets/images/scanner.jpg",categorie:{id:1,nom:"Informatique"}});
    this.produits!.push({id:12,nom:"Tablette", prix:800,quantite:0,photo:"assets/images/tab.jpg",categorie:{id:3,nom:"Téléphonique"}});
    this.produits!.push({id:13,nom:"Gaz", prix:1100,quantite:5,photo:"assets/images/gaz.jpg",categorie:{id:2,nom:"Electroménagers"}});
    this.produits!.push({id:14,nom:"Tel Fixe ", prix:650,quantite:18,photo:"assets/images/tel.jpeg",categorie:{id:3,nom:"Téléphonique"}});
    this.produits!.push({id:15,nom:"fer a repasser", prix:940,quantite:0,photo:"assets/images/fer.jpg",categorie:{id:2,nom:"Electroménagers"}});
  }

  ngOnInit(): void {
    let id:number;
  
    this.ar.paramMap.subscribe((params : Params)=>{
        id=+params.get('id')
      
      })

      this.produit = this.produits.find((e) => e.id == id)
  };

valeurB:string="masquer"

afficher(){
  if(this.valeurB=="masquer")
    this.valeurB="afficher"
  else
    this.valeurB="masquer"
}
getColor(x:number):string{
  if(x==0)
    return 'red'
  else
    return 'black'  
}

}
