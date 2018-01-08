import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { InvoiceService } from './invoice.service';
import { IInvoice } from './invoice';

import {CustomerService} from '../customer/customer.service'
import {  } from '';
import { ICustomer } from 'app/customer/customer';
import { IShippingCompany } from 'app/shippingcompany/shippingcompany';
import {ShippingCompanyService} from '../shippingcompany/shippingcompany.service'
import { IWarehouse } from 'app/warehouse/warehouse';
import {WarehouseService} from '../warehouse/warehouse.service'
import { IProduct } from 'app/product/product';
import {ProductService} from '../product/product.service'

@Component({
    moduleId: module.id,
    templateUrl: 'screen_5000eng.component.html'
})
export class Screen_5000engComponent implements OnInit {
  private array_IProduct: IProduct[];

  private array_Invoice2: IInvoice[] = [];

  private array_ICustomer: ICustomer[] = [];
private array_IShippingComapany : IShippingCompany[] =[];
private array_IWarehouse : IWarehouse[]=[];

Select_product ="select product";

  private invoice: IInvoice = {
  	id: 0,
  	shippingdate: '',	product: '',	warehouse: '',	customer: '',	shippingcomapny: ''
  }
  ;

  constructor(private router: Router, public toastr: ToastsManager,
     vcr: ViewContainerRef, private invoiceservice: InvoiceService,
      private shippingcompanyservice: ShippingCompanyService,
      private warehouseservice: WarehouseService,
      private productservice: ProductService,
     private customerservice: CustomerService) { 
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.shippingcompanyservice.get_all_ShippingCompany()
    	.subscribe(data => {
    	console.log("array_IShippingComapany - > ", data);
    	this.array_IShippingComapany = data;
    });

    this.customerservice.get_all_Customer()
    	.subscribe(data => {
    	console.log("get_all_Customer - > ", data);
    	this.array_ICustomer = data;
    });

    this.warehouseservice.get_all_Warehouse()
    	.subscribe(data => {
    	console.log("array_IWarehouse", data);
    	this.array_IWarehouse = data;
    });

    this.productservice.get_all_Product()
    	.subscribe(data => {
    	console.log("array_IProduct", data);
    	this.array_IProduct = data;
    });

  }


  create_Invoice(){
      this.invoiceservice.create_Invoice(this.invoice)
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }

}