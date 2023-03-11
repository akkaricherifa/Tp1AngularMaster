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
  constructor(private router:Router,private ar:ActivatedRoute){}

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
