import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ConfigService } from '../config/config.service';
import { ApiService } from '../config/api.service';
import { IProduct } from './product';
import {  } from '..//';

@Injectable()
export class ProductService {
    public selected_id: number;
    constructor(private _http : Http,private config: ConfigService, private apiService: ApiService){}

    create_Product(product: IProduct): Observable<IProduct>{
        return this.apiService.post(this.config.api_url+`/Product_Default_Activity/Product/`,product);

    }
    update_Product(product: IProduct): Observable<IProduct>{
        return this.apiService.put(this.config.api_url+`/Product_Default_Activity/Product/`,product);

    }
    search_for_update_Product(product_id: number): Observable<IProduct>{
        return this.apiService.get(this.config.api_url+`/Product_Default_Activity/Product/${product_id}`);

    }
    delete_Product(product: IProduct): Observable<IProduct>{
        return this.apiService.delete(this.config.api_url+`/Product_Default_Activity/Product/${product.id}`);

    }
    get_all_Product(): Observable<IProduct[]>{
        return this.apiService.get(this.config.api_url+`/Product_Default_Activity/Product/`);

    }
}