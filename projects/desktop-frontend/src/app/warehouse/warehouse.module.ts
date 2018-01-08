import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Screen_4800engComponent } from './screen_4800eng.component';
import { MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { WarehouseService } from './warehouse.service';

@NgModule({
    declarations: [
        Screen_4800engComponent
    ],
    imports: [
        MatInputModule,
        FormsModule,
        RouterModule.forChild([
            { path: 'Screen_4800eng', component: Screen_4800engComponent}
        ]),
        Ng2Bs3ModalModule,
        BrowserAnimationsModule
    ],
    providers:[
        WarehouseService
    ]
})

export class WarehouseModule {

}