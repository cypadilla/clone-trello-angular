import { DataSource } from "@angular/cdk/collections";
import { BehaviorSubject, Observable } from "rxjs";
import { Product } from "src/app/models/product.model";

export class DataSourceProduct extends DataSource<Product> {

  data = new BehaviorSubject<Product[]>([]);
  originalData : Product[] = [];

  connect(): Observable<Product[]>{
    return this.data;
  }

  init(products: Product[]){
    this.originalData = products;
    this.data.next(products);
  }

  getTotal(){
    const products = this.data.getValue();
    return products
         .map(product => product.price )
         .reduce((price, total) => price + total, 0);
  }

  //El id me indica que el id debe coincidir con el product id,
  // el partial que las PROPIEDADAES de l producto sean OPCIONALES
  update(id: Product['id'], changes: Partial<Product>){
    console.log('update data source')
    const products = this.data.getValue();
    const productIndex = products.findIndex( item => item.id === id);
    console.log(productIndex)
    if( productIndex !== -1){
      products [productIndex] = {
        ...products[productIndex],
        ...changes,
      }
      console.log(products)
      this.data.next(products);
    }
  }

  find(query: string) {
    const newProducts = this.originalData.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.id.toString().includes(query.toLowerCase()) ||
      item.price.toString().includes(query.toLowerCase())
    );

    this.data.next(newProducts);
  }

  disconnect(){

  }

}
