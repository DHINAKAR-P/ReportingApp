import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[dashboard]',
})
export class DashboardDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}

