import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ConfigService } from '../config/config.service';
import { ApiService } from '../config/api.service';
import { ICustomer } from './customer';
import {  } from '..//';

@Injectable()
export class CustomerService {
    public selected_id: number;
    constructor(private _http : Http,private config: ConfigService, private apiService: ApiService){}

    create_Customer(customer: ICustomer): Observable<ICustomer>{
        return this.apiService.post(this.config.api_url+`/Customer_Default_Activity/Customer/`,customer);

    }
    update_Customer(customer: ICustomer): Observable<ICustomer>{
        return this.apiService.put(this.config.api_url+`/Customer_Default_Activity/Customer/`,customer);

    }
    search_for_update_Customer(customer_id: number): Observable<ICustomer>{
        return this.apiService.get(this.config.api_url+`/Customer_Default_Activity/Customer/${customer_id}`);

    }
    delete_Customer(customer: ICustomer): Observable<ICustomer>{
        return this.apiService.delete(this.config.api_url+`/Customer_Default_Activity/Customer/${customer.id}`);

    }
    get_all_Customer(): Observable<ICustomer[]>{
        return this.apiService.get(this.config.api_url+`/Customer_Default_Activity/Customer/`);

    }
}