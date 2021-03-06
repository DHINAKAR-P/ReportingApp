import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeDirective } from './home/home.directive';
import { HeaderComponent } from './header/header.component';
import { HeaderDirective } from './header/header.directive';
import { FooterComponent } from './footer/footer.component';
import { FooterDirective } from './footer/footer.directive';
import { SharedService } from './shared/shared.service';
import { ConfigService } from './config/config.service';
import { ApiService } from './config/api.service';
import { customHttpProvider } from './_helpers/custom-http';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import { AuthService } from './login/auth.service';
import { AuthGuard } from '././login/auth.guard';
import { CustomerModule } from './customer/customer.module';
import { WarehouseModule } from './warehouse/warehouse.module';
import { ProductModule } from './product/product.module';
import { ShippingCompanyModule } from './shippingcompany/shippingcompany.module';
import { InvoiceModule } from './invoice/invoice.module';
import { HeaderENComponent } from './header/header-en.component';
import { HeaderTAComponent } from './header/header-ta.component';
import { FooterENComponent } from './footer/footer-en.component';
import { FooterTAComponent } from './footer/footer-ta.component';
import { HomeENComponent } from './home/home-en.component';
import { HomeTAComponent } from './home/home-ta.component';
import { LoginComponent } from '././login/login.component';
import { AnalyticsModule } from '././Analytics/analytics.module';
import { RoleModule } from '././Analytics/Role/role.module';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ToastModule.forRoot(),
    RouterModule.forRoot([
     { path: 'home', component: HomeComponent ,canActivate: [AuthGuard]},
     { path: 'login', component: LoginComponent},


     { path: '', redirectTo: 'home', pathMatch: 'full'},
     { path: '**', redirectTo: 'home', pathMatch: 'full'}


    ])
   ,
   CustomerModule,
   WarehouseModule,
   ProductModule,
   ShippingCompanyModule,
   InvoiceModule
   ,
   AnalyticsModule,
   RoleModule

  ],
  providers: [
  AuthService,
  AuthGuard,
    SharedService,
    ConfigService,
    ApiService,
    customHttpProvider
  ],
  declarations: [ 
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    HomeDirective,
    HeaderDirective,
    FooterDirective,
HeaderENComponent,
HeaderTAComponent,
FooterENComponent,
FooterTAComponent,
HomeENComponent,
HomeTAComponent,
LoginComponent
  ],
  entryComponents: [
    HeaderENComponent,
    HeaderTAComponent,
    FooterENComponent,
    FooterTAComponent,
    HomeENComponent,
    HomeTAComponent,
    LoginComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }