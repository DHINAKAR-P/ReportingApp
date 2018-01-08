import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { WarehouseService } from './warehouse.service';
import { IWarehouse } from './warehouse';
import {  } from '';

@Component({
    moduleId: module.id,
    templateUrl: 'screen_4800eng.component.html'
})
export class Screen_4800engComponent implements OnInit {
  private warehouse: IWarehouse = {
  	id: 0,
  	name: '',	warehouse_section: '',	location: ''
  }
  ;

  constructor(private router: Router, public toastr: ToastsManager, vcr: ViewContainerRef, private warehouseservice: WarehouseService) { 
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
  }


  create_Warehouse(){
      this.warehouseservice.create_Warehouse(this.warehouse)
          .subscribe(data => {
            console.log("data", data);
            this.toastr.success('Success!');
          },
          error => {
            this.toastr.error('Check the browser console to see more info.','Error!');
          });
  }

}