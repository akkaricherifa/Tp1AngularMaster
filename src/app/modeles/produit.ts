import { Categorie } from "./categorie";

export interface Produit {
    id:number;
    nom:string;
    prix:number;
    quantite:number;
    photo:string;
    categorie:Categorie
}
