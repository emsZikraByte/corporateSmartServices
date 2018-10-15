import { Component, OnChanges } from '@angular/core';
// import * as $ from 'jquery'; 
declare let $:any;


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {

  constructor() { }

  ngOnInit() {}
  

  
    // onShowMore(){
    
    //   $(".do-watuwant, .dont-doanything, .do-allthing").hide();
    //   $("#spend-id").click(function(){
    //       $(".do-watuwant").toggle(1000);
    //       $(".spend-knwmore").hide(1000);
    //       $(".dont-doanything").hide(1000);
    //       $(".mission-toggal").show(1000);
    //       $(".do-allthing").hide(1000);
    //       $(".go-knwmore").show(1000);
    //   });
    //   $("#lead-id").click(function(){
    //       $(".dont-doanything").toggle(1000);
    //       $(".mission-toggal").hide(1000);
    //       $(".spend-knwmore").show(1000);
    //       $(".do-watuwant").hide(1000);
    //       $(".do-allthing").hide(1000);
    //       $(".go-knwmore").show(1000);
    //   });
    //   $("#go-id").click(function(){
    //       $(".do-allthing").toggle(1000);
    //       $(".go-knwmore").hide(1000);
    //       $(".spend-knwmore").show(1000);
    //       $(".mission-toggal").show(1000);
    //       $(".dont-doanything").hide(1000);
    //       $(".do-watuwant").hide(1000);
    //   });
    // }
  // end toggle

  

}
