import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {ToastModule} from 'ng2-toastr/ng2-toastr';

import { AppComponent } from './app.component';
import { ShowcaseSliderComponent } from './showcase-slider/showcase-slider.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { ServicesComponent } from './services/services.component';
import { TeamComponent } from './team/team.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';

import { AgmCoreModule } from '@agm/core';
import { ToastrModule } from 'ngx-toastr';
import { ContactService } from '../../e2e/app/contact.service';
// import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';


@NgModule({
  declarations: [
    AppComponent,
    ShowcaseSliderComponent,
    HomeComponent,
    ContactUsComponent,
    FooterComponent,
    ServicesComponent,
    TeamComponent,
    AboutUsComponent,
    NavbarComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ScrollToModule.forRoot(),                           
    ToastrModule.forRoot(),  
    NgbModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyDjwWISIKCDiUdypWDIqqDAvrdQ_w0Lxro'
   }),
  //  AgmSnazzyInfoWindowModule

  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
