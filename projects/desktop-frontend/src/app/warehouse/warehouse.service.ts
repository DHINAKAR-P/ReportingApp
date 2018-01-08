import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ConfigService } from '../config/config.service';
import { ApiService } from '../config/api.service';
import { IWarehouse } from './warehouse';
import {  } from '..//';

@Injectable()
export class WarehouseService {
    public selected_id: number;
    constructor(private _http : Http,private config: ConfigService, private apiService: ApiService){}

    create_Warehouse(warehouse: IWarehouse): Observable<IWarehouse>{
        return this.apiService.post(this.config.api_url+`/Warehouse_Default_Activity/Warehouse/`,warehouse);

    }
    update_Warehouse(warehouse: IWarehouse): Observable<IWarehouse>{
        return this.apiService.put(this.config.api_url+`/Warehouse_Default_Activity/Warehouse/`,warehouse);

    }
    search_for_update_Warehouse(warehouse_id: number): Observable<IWarehouse>{
        return this.apiService.get(this.config.api_url+`/Warehouse_Default_Activity/Warehouse/${warehouse_id}`);

    }
    delete_Warehouse(warehouse: IWarehouse): Observable<IWarehouse>{
        return this.apiService.delete(this.config.api_url+`/Warehouse_Default_Activity/Warehouse/${warehouse.id}`);

    }
    get_all_Warehouse(): Observable<IWarehouse[]>{
        return this.apiService.get(this.config.api_url+`/Warehouse_Default_Activity/Warehouse/`);

    }
}