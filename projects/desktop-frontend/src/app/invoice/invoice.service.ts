import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ConfigService } from '../config/config.service';
import { ApiService } from '../config/api.service';
import { IInvoice } from './invoice';
import {  } from '..//';

@Injectable()
export class InvoiceService {
    public selected_id: number;
    constructor(private _http : Http,private config: ConfigService, private apiService: ApiService){}

    create_Invoice(invoice: IInvoice): Observable<IInvoice>{
        return this.apiService.post(this.config.api_url+`/Invoice_Default_Activity/Invoice/`,invoice);

    }
    update_Invoice(invoice: IInvoice): Observable<IInvoice>{
        return this.apiService.put(this.config.api_url+`/Invoice_Default_Activity/Invoice/`,invoice);

    }
    search_for_update_Invoice(invoice_id: number): Observable<IInvoice>{
        return this.apiService.get(this.config.api_url+`/Invoice_Default_Activity/Invoice/${invoice_id}`);

    }
    delete_Invoice(invoice: IInvoice): Observable<IInvoice>{
        return this.apiService.delete(this.config.api_url+`/Invoice_Default_Activity/Invoice/${invoice.id}`);

    }
    get_all_Invoice(): Observable<IInvoice[]>{
        return this.apiService.get(this.config.api_url+`/Invoice_Default_Activity/Invoice/`);

    }
}