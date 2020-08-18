import { Component, OnInit } from '@angular/core';
import { ProductDetailsComponent } from '../product-details.component';
import { ProductDetailsService } from 'src/app/shared/product-details.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styles: []
})
export class ProductDetailСomponent implements OnInit {

  constructor(public service:ProductDetailsService) {

   }

  ngOnInit(): void { 
    this.resetForm();
   
  }

  resetForm(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.service.formData = {
      Pid:0,
      Product:'',
      Cid:''
    }
  }
  onSubmit(form:NgForm){
    this.service.postProductDetail(form.value).subscribe(
    res =>{
      this.resetForm(form);
      this.service.refreshList();
    },
    err =>{
        console.log(err);
    }
  )
 }
}
