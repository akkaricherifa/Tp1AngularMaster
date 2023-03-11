import { Component, OnInit } from '@angular/core';
import { Categorie } from '../modeles/categorie';
import { CategorieService } from '../service/categorie.service';

@Component({
  selector: 'app-liste-categories',
  templateUrl: './liste-categories.component.html',
  styleUrls: ['./liste-categories.component.css']
})
export class ListeCategoriesComponent implements OnInit {
  categorie:Categorie[]=[];
  constructor(private service:CategorieService) { }

  ngOnInit(): void {
    this.service.getAllCategories().subscribe(data=>{this.categorie=data;});
  }

}
