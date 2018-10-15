import { Component, OnInit, AfterViewInit, OnChanges } from '@angular/core';
declare let $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{

ngAfterViewInit(){
  $(document).ready(function () {
    $(".navbar-nav li a").click(function(event) {
      $(".navbar-collapse").collapse('hide');
    });
  });


  $(function() {
    $(document).click(function (event) {
      $('.navbar-collapse').collapse('hide');
    });
  });

  let doubleTouchStartTimestamp = 0;
document.addEventListener("touchstart", function(event){
    var now = +(new Date());
    if (doubleTouchStartTimestamp + 500 > now){
        event.preventDefault();
    };
    doubleTouchStartTimestamp = now;
});
}
  
  navigateToHome(){
   const element = document.querySelector("#HOME") as HTMLElement;
   element.scrollIntoView({ behavior: "smooth",block: "start", inline: "start"});
  
      
    }
    // this.navbarOpen = false;
  

  navigateToUpcoming(){
    let h = document.querySelector("#UPCOMING");
    if (h) {
      h.scrollIntoView({behavior:"smooth"});
      // console.log(h);
    }
  }
  
  
  navigateToTeam(){
    let h = document.querySelector("#OURTEAM");
    if (h) {
      h.scrollIntoView({behavior:"smooth", block:"start", inline:"start"});
      // console.log(h);
    }
  }

  navigateToContactUs(){
    let c = document.querySelector("#CONTACTUS");
    if (c) {
      c.scrollIntoView({behavior:"smooth",block: "start", inline: "start"});
      // console.log(c);
    }

  }


  constructor() {}
  ngOnInit(){}

  navigateToServices(){
    let s = document.querySelector("#SERVICES");
    if (s) {
      s.scrollIntoView({behavior:"smooth",block: "start", inline: "start"});
    }
  }

  navigateToAboutUs(){
    let a = document.querySelector("#ABOUTUS");
    if (a){
      a.scrollIntoView({behavior:"smooth",block: "start", inline: "start"});
    }
  }
}
