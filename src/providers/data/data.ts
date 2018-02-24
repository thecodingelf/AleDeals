import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class DataProvider {

	products: any;

  constructor(public http: HttpModule) {

    // Array of data.
    this.products = [
      {
        id: 1,
        name: 'Bread',
        description: 'Fazer',
        content: {
          price: 3.50,
        },
        discountPrice: 2,
        img: 'assets/imgs/product/fazer.jpg'
      },
      {
        id: 2,
        name: 'Milk',
        description: 'Can',
        content: {
          price: 1.50,
        },
        discountPrice: 1,
        img: 'assets/imgs/product/fazer.jpg'
      }
    ]

  }

  // loadAll() method which simply returns this activities array variable as promise.
  loadAll() {
    return Promise.resolve(this.products);
  };


  // return the matching id’s object as promise.
  getByID(id) {
    for (var i = 0; i < (this.products).length; i++) {
      if (this.products[i].id == id) {
        return Promise.resolve(this.products[i]);
      }
    }
  };

}
