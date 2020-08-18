import { Injectable } from '@angular/core';
import { ProductDetails } from './product-details.model';
import { HttpClient } from '@angular/common/http';
import { Category } from './category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {
formData:ProductDetails
readonly rootURL ='http://localhost:49299/api';


constructor(private http:HttpClient) { }
list:ProductDetails[];
listC:Category[]

postProductDetail(formData:ProductDetails){
 return this.http.post(this.rootURL +'/ProductDetail' ,formData)
}

deleteProductDetail(id){
  return this.http.delete(this.rootURL +'/ProductDetail/'+id)
 }

refreshList(){
  this.http.get(this.rootURL +'/ProductDetail') 
  .toPromise()
  .then(res=>this.list= res as ProductDetails[])
}
getCategory(){
  this.http.get(this.rootURL+'/Category')
  .toPromise()
  .then(res => this.listC = res as Category[]);
}
}
