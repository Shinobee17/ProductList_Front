import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/shared/category.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styles: []
})
export class CategoriesComponent implements OnInit {

  constructor(public service:CategoryService) { }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form?:NgForm){
    if(form!=null)
     form.resetForm();
    this.service.formDataCategory = {
      Cid:0,
      Ctgr:''
    }
  }
  onSubmit(form:NgForm){ 
    this.service.postCategory(form.value).subscribe(
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
