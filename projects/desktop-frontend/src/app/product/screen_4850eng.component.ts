import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ProductService } from './product.service';
import { IProduct } from './product';
import {  } from '';

@Component({
    moduleId: module.id,
    templateUrl: 'screen_4850eng.component.html'
})
export class Screen_4850engComponent implements OnInit {
  private product: IProduct = {
  	id: 0,
  	name: '',	price: 0,	category: ''
  }
  ;

  constructor(private router: Router, public toastr: ToastsManager, vcr: ViewContainerRef, private productservice: ProductService) { 
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
  }


  create_Product(){
      this.productservice.create_Product(this.product)
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }

}