import { Pipe, PipeTransform } from '@angular/core';
import { Produit } from './modeles/produit';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Produit[]): Produit[] {
    value.sort((a,b)=>{
      if(a.prix<b.prix) return -1;
      else if(a.prix>b.prix) return 1;
      else return 0
    })
    return value;
  }

}
