import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Screen_5000engComponent } from './screen_5000eng.component';
import { MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { InvoiceService } from './invoice.service';

@NgModule({
    declarations: [
        Screen_5000engComponent
    ],
    imports: [
        MatInputModule,
        FormsModule,
        MatSelectModule,
        CommonModule,
        RouterModule.forChild([
            { path: 'Screen_5000eng', component: Screen_5000engComponent}
        ]),
        Ng2Bs3ModalModule,
        BrowserAnimationsModule
    ],
    providers:[
        InvoiceService
    ]
})

export class InvoiceModule {

}