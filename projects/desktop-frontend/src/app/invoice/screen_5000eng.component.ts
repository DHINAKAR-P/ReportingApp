import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { InvoiceService } from './invoice.service';
import { IInvoice } from './invoice';

import {CustomerService} from '../customer/customer.service'
import {  } from '';
import { ICustomer } from 'app/customer/customer';

@Component({
    moduleId: module.id,
    templateUrl: 'screen_5000eng.component.html'
})
export class Screen_5000engComponent implements OnInit {
  private array_Invoice: IInvoice[];

  private array_Invoice2: IInvoice[] = [];

  private array_ICustomer: ICustomer[] = [];

  private invoice: IInvoice = {
  	id: 0,
  	shippingdate: '',	product: '',	warehouse: '',	customer: '',	shippingcomapny: ''
  }
  ;

  constructor(private router: Router, public toastr: ToastsManager,
     vcr: ViewContainerRef, private invoiceservice: InvoiceService, private customerservice: CustomerService) { 
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.invoiceservice.get_all_Invoice()
    	.subscribe(data => {
    	console.log("data", data);
    	this.array_Invoice = data;
    });

    this.customerservice.get_all_Customer()
    	.subscribe(data => {
    	console.log("data", data);
    	this.array_ICustomer = data;
    });

    this.invoiceservice.get_all_Invoice()
    	.subscribe(data => {
    	console.log("data", data);
    	this.array_Invoice2 = data;
    });

    this.invoiceservice.get_all_Invoice()
    	.subscribe(data => {
    	console.log("data", data);
    	this.array_Invoice2 = data;
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