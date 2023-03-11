import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categorie } from '../modeles/categorie';
import { Produit } from '../modeles/produit';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  host="http://localhost:8080/categorieapi";

  constructor(private client:HttpClient) { }
  public getAllCategories(): Observable<Categorie[]>{
    return this.client.get<Categorie[]>(this.host+"/all");
}
public getProduitsBc(idc:number):Observable<Produit[]>{
  return this.client.get<Produit[]>(this.host+"/productsBC/"+idc)
}
}
