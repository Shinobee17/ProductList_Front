import { Component, OnInit } from '@angular/core';
import { ProductDetailsService } from 'src/app/shared/product-details.service';
import { ProductDetails } from 'src/app/shared/product-details.model';

@Component({
  selector: 'app-product-details-list',
  templateUrl: './product-details-list.component.html',
  styles: []
})
export class ProductDetailsListComponent implements OnInit {

  constructor(public service: ProductDetailsService) { 
    
  }

  ngOnInit(): void {
    this.service.refreshList();
    this.service.getCategory();
  }
  onDelete(Pid){
    if(confirm("Are you sure to delete this?")){
    this.service.deleteProductDetail(Pid).subscribe(
      res =>{
       
        this.service.refreshList();
      },
      err=>{console.log(err)})
    }
  }
  p: number = 1;
  collection: ProductDetails[] = this.service.list as ProductDetails[];
// populateForm(pd:ProductDetails){
// this.service.formData=Object.assign({},pd);
// }
}
