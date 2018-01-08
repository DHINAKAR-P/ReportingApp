import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {
    public baseUrl: string = "http://apps.geppettosoftware.com/reportingapp-web-10048";
    public jsreporturl: string = "http://apps.geppettosoftware.com/reportingapp-jsreport-10048";
    public browser_language: string;
}