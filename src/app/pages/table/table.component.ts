import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { DataSourceProduct } from './data-source';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})

export class TableComponent implements OnInit {

  dataSource = new DataSourceProduct;
  columns: string[] = ['id', 'title', 'price', 'image', 'actions'];
  total = 0;
  input = new FormControl('', {nonNullable: true});

  constructor(
    private http:HttpClient
  ){

  }
  ngOnInit(): void{
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products')
    .subscribe(data => {
       this.dataSource.init(data);
       this.total = this.dataSource.getTotal();
    })
    this.input.valueChanges
    .pipe(
      debounceTime(3000)
    )
    .subscribe(value => {
      console.log(value);
      this.dataSource.find(value);
    })
  }

  update(product: Product){
    console.log('entre')
    this.dataSource.update(product.id, {price: 20});
    this.total = this.dataSource.getTotal();
  }

}
