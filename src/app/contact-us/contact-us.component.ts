import { Component, OnInit, ViewContainerRef } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as emailjs from 'emailjs-com';
import { MouseEvent } from '@agm/core';
import { NgForm } from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
// import { ToastsManager } from 'ng2-toastr/ng2-toastr';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  // endpoint = 'https://event-management-17.cloudfunctions.net/httpEmail';

  name:string='';
  event:string='';
  email:string='';
  description:string='';
  isSending:boolean = false;
  //  public onSuccess; 
   markers : Array<any> =  [];
  constructor( private http:HttpClient, private toastr:ToastrService) { 
    
  }
  zoom:number = 8;
  lat: number = 39.817490;
  lng: number = -0.231035;
  ngOnInit() {
     this.markers.push({lat:12.8449795, long:77.6325366},
                       {lat:9.96433, long:20.25});
  }

  onMouseOver() {


    
}

  // lat: number = 12.8449795;
  // lng: number = 77.6325366;
  // zoom: number = 13;
  // latit:number = 9.96433;
  // longit:number = 20.25;

  rooms:any = [{lat:'12.844975',long:'77.6325366'},
                {lat:'9.96433', long:'20.25'}   
              ];

mapClicked($event:MouseEvent) {
  
}

  clickedMarker(label) {
    console.log(label);
  }

  showSuccess() 
    {
      this.toastr.success('You are awesome!', 'Success!');
    }
  

onError(){
  this.toastr.success('Failed to send');
}

onSuccess(){
  this.toastr.success('Email Sent', 'Success');
}

  sendEmail(f) {
    // f.form.reset();
    
    emailjs.init('user_WKOKuI17gLi5FTWp9qAcG'); 
    
    this.onSuccess();
  //   var templateParams = {
  //     name: 'James',
  //     notes: 'Check this out!'
  // };
   
  emailjs.sendForm('gmail','latest', '#f','user_WKOKuI17gLi5FTWp9qAcG')
  
      .then(function(response) {
        // this.toastr.success('Details Sent Succesfully','hey');
        f.form.reset();      
         console.log('SUCCESS!', response.status, response.text);
      }, function(err) {
         console.log('FAILED...', err);
        
         this.onError(err);
      });
      

  }

//   onSubmit(fForm:NgForm) {
// fForm.form.reset();
//   }
  
}





//   import * as emailjs from 'emailjs-com';
 
// emailjs.sendForm('<YOUR SERVICE ID>','<YOUR TEMPLATE ID>', '#myForm', '<YOUR USER ID>')
//     .then((response) => {
//        console.log('SUCCESS!', response.status, response.text);
//     }, (err) => {
//        console.log('FAILED...', err);
//     });
  
// }




