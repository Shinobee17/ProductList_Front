import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/shared/category.service';
import { Category } from 'src/app/shared/category.model';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styles: []
})
export class CategoryListComponent implements OnInit {

  constructor(public service: CategoryService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  p: number = 1;
  collection: Category[] = this.service.list as Category[];

  onDelete(Cid){
    if(confirm("Are you sure to delete this?")){
    this.service.deleteCategory(Cid).subscribe(
      res =>{
       
        this.service.refreshList();
      },
      err=>{console.log("Error")})
    }
  }

}
