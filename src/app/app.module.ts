import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";


import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { ProductDetailsListComponent } from './product-details/product-details-list/product-details-list.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { ProductDetailСomponent } from './product-details/product-detail/product-detail.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductDetailsService } from './shared/product-details.service';
import { CategoryService } from './shared/category.service';
import { CategoriesComponent } from './category/categories/categories.component';
import { Category } from './shared/category.model';
import {NgxPaginationModule} from 'ngx-pagination';
import { NotFoundComponent } from './notfoundcomponent';

const appRoutes: Routes =[
  { path: '', component: ProductDetailsComponent},
  { path: 'category', component: CategoryComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailСomponent,
    ProductDetailsListComponent,
    ProductDetailsComponent,
    CategoryComponent,
    CategoryListComponent,
    CategoriesComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    NgxPaginationModule    
  ],
  providers: [ProductDetailsService, CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
