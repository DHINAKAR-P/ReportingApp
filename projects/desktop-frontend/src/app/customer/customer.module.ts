import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Screen_4750engComponent } from './screen_4750eng.component';
import { MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { CustomerService } from './customer.service';

@NgModule({
    declarations: [
        Screen_4750engComponent
    ],
    imports: [
        MatInputModule,
        FormsModule,
        RouterModule.forChild([
            { path: 'Screen_4750eng', component: Screen_4750engComponent}
        ]),
        Ng2Bs3ModalModule,
        BrowserAnimationsModule
    ],
    providers:[
        CustomerService
    ]
})

export class CustomerModule {

}