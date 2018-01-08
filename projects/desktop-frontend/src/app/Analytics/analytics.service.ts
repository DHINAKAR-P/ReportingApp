import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ConfigService } from '../config/config.service';
import { ApiService } from '../config/api.service';
import { SharedService } from '../shared/shared.service';
import {  } from '..//';

@Injectable()
export class AnalyticsService {
    public selected_id: number;
    constructor(private _http : Http,private config: ConfigService, private apiService: ApiService, private sharedservice: SharedService){}

    getallreport(){
        return  this._http.get(this.sharedservice.jsreporturl+"/odata/templates")
    }

    selectedreport(report){
        var data = {
            "template": {"name":report, "recipe" :"html"}
        }
        return this._http.post(this.sharedservice.jsreporturl+"/api/report",data)
    }
    getreport_byuser(username){
        return this.apiService.get(this.config.api_url+`/Jsreport/getreport/${username}`);
    }

}

