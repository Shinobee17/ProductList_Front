import { Injectable } from '@angular/core';
import { Category } from './category.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  formDataCategory:Category
  readonly rootURL ='http://localhost:49299/api';
  list:Category[];

  constructor(private http:HttpClient) { }

  postCategory(formDataCategory:Category){
   return this.http.post(this.rootURL +'/Category' ,formDataCategory)
  }

  deleteCategory(id){
    return this.http.delete(this.rootURL +'/Category/' +id)
   }

  refreshList(){
    this.http.get(this.rootURL +'/Category') 
    .toPromise()
    .then(res=>this.list= res as Category[])
  }
}
