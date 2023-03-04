import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categorie } from '../modeles/categorie';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
host="http://localhost:8080/produitapi/"
  constructor(private client:HttpClient) { }

  public getAllCategories():Observable<Categorie[]>
  {
    return this.client.get<Categorie[]>(this.host+"/categories");
  }
}
