import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Screen_4850engComponent } from './screen_4850eng.component';
import { MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { ProductService } from './product.service';

@NgModule({
    declarations: [
        Screen_4850engComponent
    ],
    imports: [
        MatInputModule,
        FormsModule,
        RouterModule.forChild([
            { path: 'Screen_4850eng', component: Screen_4850engComponent}
        ]),
        Ng2Bs3ModalModule,
        BrowserAnimationsModule
    ],
    providers:[
        ProductService
    ]
})

export class ProductModule {

}