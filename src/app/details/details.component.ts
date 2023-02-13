import { Component, OnInit } from '@angular/core';
import { Produit } from '../modeles/produit';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  produit!:Produit;
  constructor() {}
    
  

  ngOnInit(): void {
  }

}
