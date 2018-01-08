import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ShippingCompanyService } from './shippingcompany.service';
import { IShippingCompany } from './shippingcompany';
import {  } from '';

@Component({
    moduleId: module.id,
    templateUrl: 'screen_4950eng.component.html'
})
export class Screen_4950engComponent implements OnInit {
  private shippingcompany: IShippingCompany = {
  	id: 0,
  	comapnyname: '',	companylocatoin: ''
  }
  ;

  constructor(private router: Router, public toastr: ToastsManager, vcr: ViewContainerRef, private shippingcompanyservice: ShippingCompanyService) { 
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
  }


  create_ShippingCompany(){
      this.shippingcompanyservice.create_ShippingCompany(this.shippingcompany)
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }

}