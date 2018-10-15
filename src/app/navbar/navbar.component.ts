import { Component, OnInit } from '@angular/core';
// import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
//   providers: [NgbCarouselConfig]
})
export class NavbarComponent {
    navbarOpen = false;
  
    toggleNavbar() {
      this.navbarOpen = !this.navbarOpen;
    }
  
    
    navigateToHome(){
      console.log('this.navbarOpen');
    let H =document.querySelector("#HOME");
      if (H) {
  
        H.scrollIntoView();

        
      }
      this.navbarOpen = false;
    }
  
    navigateToUpcoming(){
      let h = document.querySelector("#UPCOMING");
      if (h) {
        h.scrollIntoView();
        // console.log(h);
      }
    }
  
    navigateToContactUs(){
      let c = document.querySelector("#CONTACTUS");
      if (c) {
        c.scrollIntoView();
        // console.log(c);
      }
  
    }
  
  
    constructor() {}
    ngOnInit(){}
  
    navigateToServices(){
      let s = document.querySelector("#SERVICES");
      if (s) {
        s.scrollIntoView();
      }
    }
  
    navigateToAboutUs(){
      let a = document.querySelector("#ABOUTUS");
      if (a){
        a.scrollIntoView();
      }
    }

}
