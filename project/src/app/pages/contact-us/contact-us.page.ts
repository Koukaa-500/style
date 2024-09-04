import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.page.html',
  styleUrls: ['./contact-us.page.scss'],
})
export class ContactUsPage implements OnInit {

  goBack(){
    this.router.navigate(['/home'])
  }

  goToCustomerService(){
    console.log('CustomerService')
  }

  goToWebsite(){
    console.log('Website')
  }

  goToFacebook(){
    console.log('Facebook') 
  }

  goToWhatsapp(){
    console.log('Whatsapp')
  }

  goToInstagram(){
    console.log('Instagram')
  }

  goToX(){
    console.log('X')
  }

  

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
