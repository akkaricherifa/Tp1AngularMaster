import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from '../modeles/produit';
import { ProduitService } from '../service/produit.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-liste-produit',
  templateUrl: './liste-produit.component.html',
  styleUrls: ['./liste-produit.component.css']
})
export class ListeProduitComponent implements OnInit {
  produits:Produit[]=[];
  produitF:Produit[]=[];
  p : number=1;
  closeResult = '';

  public popoverTitle:string=' Alert De Confirmation';
  public popoverMessage:string='Voulez Vous vraiment Supprimer cet Adhérent ?';
  public confirmClicked:boolean=false;
  public cancelClicked:boolean=false;
  constructor(private ar:ActivatedRoute,private service:ProduitService , private router:Router){}
  
  ngOnInit(): void {
    this.ar.paramMap.subscribe(params=>{
      let exist=this.ar.snapshot.paramMap.has('idc')
      if(!exist){
      this.service.getAllProduit().subscribe(data=>{
        this.produits=data;
        this.produitF=this.produits;
      })
    }
    else{
      let idc: number=this.ar.snapshot.params['idc']
      this.getProductsByCategory(idc);
  }
})
  }
  public getAllProducts(){
    this.service.getAllProduit().subscribe(data =>{
    this.produits=data;
    this.produitF=data;
  })
}
public getProductsByCategory(idc:number){
  this.service.getAllProduitsBC(idc).subscribe(data=>{
  this.produits=data;
  this.produitF=data;})
}

  set texte(s:string){
    this.produitF=this.filtrer(s);
  } 

  filtrer(s:string){
    return this.produits.filter((el)=>el.nom.indexOf(s)!=-1)
  }



  delete(id:any){
    this.service.deleteProduct(id).subscribe( data => { 
      this.service.getAllProduit().subscribe(data=>{
        this.produits=data;
      })   
    this.router.navigate(['/products']);  
    },
    )
  }
  // open(content:any) {
  //   this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
  //     this.closeResult = `Closed with: ${result}`;
  //   }, (reason) => {
  //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //   });
  // }

  // private getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return 'by pressing ESC';
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return 'by clicking on a backdrop';
  //   } else {
  //     return `with: ${reason}`;
  //   }
   
  // }


  opensweetalert2(){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Produit Supprimé avec Succès',
      showConfirmButton: false,
      timer: 2000
    })
  }

}
