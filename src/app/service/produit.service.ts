import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Produit } from '../modeles/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
host="http://localhost:8080/produitapi";
  
constructor(private client:HttpClient) { }

public getAllProduit():Observable<Produit[]>{
  return this.client.get<Produit[]>(this.host+"/all");


}
public getAllProduitsBC(idc:number):Observable<Produit[]>{
  return this.client.get<Produit[]>(this.host+"productsBC/"+idc);
  }

  public deleteProduct(id:number):Observable<void>{
    return this.client.delete<void>(this.host+"/delete/"+id);
  }

  public getProductById(id:number):Observable<Produit>{
    return this.client.get<Produit>(this.host+"/product/"+id);
    }

}
