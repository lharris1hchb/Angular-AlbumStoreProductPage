import { Component, OnInit } from '@angular/core';
import { ProductService } from 'app/product.service';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {

  constructor(private _productService: ProductService) { }
  albulmInfo : any;

  ngOnInit() {
    this._productService.getAlbum(1).subscribe(
      response => { this.albulmInfo = response; console.log(this.albulmInfo); }
    );
  }

}
