import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Categorie } from '../modeles/categorie';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit {
  formproduit!:FormGroup;



  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.formproduit=this.fb.group(
      {
        nom:['',[Validators.required,Validators.minLength(5)]],
      prix:[0,[Validators.required,Validators.min(1)]],
      quantite:[0,[Validators.required,Validators.min(5),Validators.max(100)]],
      categorie:['',Validators.required],
      photo:['',Validators.required]
 
 
 
      }
 
 
     )
   
  }
  
}
