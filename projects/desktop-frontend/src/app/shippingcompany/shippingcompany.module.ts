import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Screen_4950engComponent } from './screen_4950eng.component';
import { MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { ShippingCompanyService } from './shippingcompany.service';

@NgModule({
    declarations: [
        Screen_4950engComponent
    ],
    imports: [
        MatInputModule,
        FormsModule,
        RouterModule.forChild([
            { path: 'Screen_4950eng', component: Screen_4950engComponent}
        ]),
        Ng2Bs3ModalModule,
        BrowserAnimationsModule
    ],
    providers:[
        ShippingCompanyService
    ]
})

export class ShippingCompanyModule {

}