import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { CustomerService } from './customer.service';
import { ICustomer } from './customer';
import {  } from '';

@Component({
    moduleId: module.id,
    templateUrl: 'screen_4750eng.component.html'
})
export class Screen_4750engComponent implements OnInit {
  private customer: ICustomer = {
  	id: 0,
  	name: '',	phone: 0,	address: '',	city: '',	pincode: ''
  }
  ;

  constructor(private router: Router, public toastr: ToastsManager, vcr: ViewContainerRef, private customerservice: CustomerService) { 
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
  }


  create_Customer(){
      this.customerservice.create_Customer(this.customer)
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }

}