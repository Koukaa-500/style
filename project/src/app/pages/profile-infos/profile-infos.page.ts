import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile-infos',
  templateUrl: './profile-infos.page.html',
  styleUrls: ['./profile-infos.page.scss'],
})
export class ProfileInfosPage implements OnInit {
  user: any = {}

  emptyemail=false;
  emptyname=false;
  emptyphone=false;
  emptydate=false;
  wrongemail=false;
  wrongphone=false;
  wrongdate=false;

  async presentToast(message:string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000, 
      position: 'bottom' 
    });
    toast.present();
  }

  update(){
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const datePattern = /^\d{2}\/\d{2}\/\d{4}$/; 

    if(this.user.email=='' && this.user.name=='' && this.user.phone=='' && this.user.date_nai==''){
      this.emptydate=true;
      this.emptyemail=true;
      this.emptyname=true;
      this.emptyphone=true;
      return;
    }
    if (this.user.email === '') {
      this.emptyemail = true;
      this.wrongemail = false;
    } else if (!emailPattern.test(this.user.email)) {
      this.wrongemail = true;
      this.emptyemail = false;
    } else {
      this.emptyemail = false;
      this.wrongemail = false;
    }
    if(this.user.name==''){
      this.emptyname=true;    
    }else{
      this.emptyname=false;
    }
    if(this.user.phone==''){
      this.emptyphone=true;    
    }else{
      this.emptyphone=false;
    }
    if (this.user.date_nai === '') {
      this.emptydate = true;
      this.wrongdate = false;
    } else if (!datePattern.test(this.user.date_nai)) {
      this.wrongdate = true;
      this.emptydate = false;
    } else {
      this.emptydate = false;
      this.wrongdate = false;
    }

    if(this.emptyemail == false && this.wrongemail==false && this.emptyname==false && this.emptyphone==false && this.emptydate==false && this.wrongdate==false){
      this.presentToast('Profile updated successfully .');
      this.router.navigate(['/profile'])
    }
    

  }
  uploadImage() {
    const fileInput = document.getElementById('filesssInput') as HTMLElement;
    fileInput.click();
  }
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.user.profilePic = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
  goBack() {
    this.router.navigate(['/profile']);
  }

  constructor(private toastController: ToastController,private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.user = params;
    });
  }

}
