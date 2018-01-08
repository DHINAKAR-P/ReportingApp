import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { DashboardDirective } from './dashboard.directive';
import { SharedService } from '../shared/shared.service';
import { DashboardENComponent } from './dashboard-en.component';
import { DashboardTAComponent } from './dashboard-ta.component';

@Component({
    template: '<ng-template dashboard></ng-template>'

})
export class DashboardComponent implements OnInit {
    @ViewChild(DashboardDirective) adHost: DashboardDirective;
    constructor(private _componentFactoryResolver: ComponentFactoryResolver, private shared_service: SharedService) { }

    ngOnInit() {
        let browser_language = this.shared_service.browser_language;
        console.log(browser_language);
        if(browser_language === 'en'){
            let componentFactory = this._componentFactoryResolver.resolveComponentFactory(DashboardENComponent);
            let viewContainerRef = this.adHost.viewContainerRef;
            viewContainerRef.clear();
            let componentRef = viewContainerRef.createComponent(componentFactory);
        }else if(browser_language === 'ta'){
            let componentFactory = this._componentFactoryResolver.resolveComponentFactory(DashboardTAComponent);
            let viewContainerRef = this.adHost.viewContainerRef;
            viewContainerRef.clear();
            let componentRef = viewContainerRef.createComponent(componentFactory);
        }
    }
}