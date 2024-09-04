import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  user: any = {
    name: "Hela Turki",
    profilePic: "assets/img/profile-picture.png",
    email: "hela@gamil.com",
    phone: "12345678",
    date_nai: "22/01/2002",
    genre: "female"
  }

  goToEdit() {
    this.router.navigate(['/profile-infos'], {
      queryParams: this.user
    });
  }
  goBack(){
    this.router.navigate(['/home'])
  }
  
  

  goToCustomerService(){
    console.log('go to customer service')
    // this.router.navigate(['/home']);
  }
  goToNotification(){
    this.router.navigate(['/notification']);
  }
  goToSettings(){
    this.router.navigate(['/settings']);
  }
  goToLanguage(){
    this.router.navigate(['/language']);
  }
  constructor(private router: Router) { }

  ngOnInit() {
  }

}
