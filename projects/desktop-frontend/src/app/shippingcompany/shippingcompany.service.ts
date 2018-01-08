import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ConfigService } from '../config/config.service';
import { ApiService } from '../config/api.service';
import { IShippingCompany } from './shippingcompany';
import {  } from '..//';

@Injectable()
export class ShippingCompanyService {
    public selected_id: number;
    constructor(private _http : Http,private config: ConfigService, private apiService: ApiService){}

    create_ShippingCompany(shippingcompany: IShippingCompany): Observable<IShippingCompany>{
        return this.apiService.post(this.config.api_url+`/ShippingCompany_Default_Activity/ShippingCompany/`,shippingcompany);

    }
    update_ShippingCompany(shippingcompany: IShippingCompany): Observable<IShippingCompany>{
        return this.apiService.put(this.config.api_url+`/ShippingCompany_Default_Activity/ShippingCompany/`,shippingcompany);

    }
    search_for_update_ShippingCompany(shippingcompany_id: number): Observable<IShippingCompany>{
        return this.apiService.get(this.config.api_url+`/ShippingCompany_Default_Activity/ShippingCompany/${shippingcompany_id}`);

    }
    delete_ShippingCompany(shippingcompany: IShippingCompany): Observable<IShippingCompany>{
        return this.apiService.delete(this.config.api_url+`/ShippingCompany_Default_Activity/ShippingCompany/${shippingcompany.id}`);

    }
    get_all_ShippingCompany(): Observable<IShippingCompany[]>{
        return this.apiService.get(this.config.api_url+`/ShippingCompany_Default_Activity/ShippingCompany/`);

    }
}