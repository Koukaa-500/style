import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  showPassword = false;
  showConfirmPassword = false;
  wrongPassword = false;
  password: string = '';
  email: string = '';
  emptyPassword= false;
  emptyEmail= false;
  invalidstructureEmail = false;
  testpassword:string = "123456";
  emptyModalEmail= false;
  modalemail:string='';
  invalidStructureModalEmail = false;
  digitalCode : number = 1234;
  digits: string[] = ['', '', '', ''];
  wrongdigits = false;
  modalpassword : string = '';
  emptyModalPassword= false;
  emptyModalConfirmPassword= false;
  modalConfirmPassword : string = '';
  wrongModalPassword = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }
  async presentToast(message:string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000, 
      position: 'bottom' 
    });
    toast.present();
  }

  checkForm() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (this.email === '') {
      this.emptyEmail = true;
    } else if (!emailPattern.test(this.email)) {
      this.invalidstructureEmail = true;
      this.emptyEmail = false;
    } else {
      this.emptyEmail = false;
      this.invalidstructureEmail = false;
    }
  
    if (this.password === '') {
      this.emptyPassword = true;
      this.wrongPassword = false;
    } else {
      this.emptyPassword = false;
    }
  
    if (this.password !== this.testpassword && this.password !== '') {
      this.wrongPassword = true;
      this.emptyPassword = false;
    } else {
      this.wrongPassword = false;
      console.log("Correct password");
    }
    if(this.emptyEmail == false && this.invalidstructureEmail==false && this.emptyPassword==false && this.wrongPassword==false ){
      this.password=''
      this.email='';
      this.presentToast('Login successful! Welcome back.');
      this.router.navigate(['/home'])
    }
    
  }

  loginWithFacebook(){
    console.log("Login with facebook")
  }

  loginWithGoogle(){
    console.log("Login with google")
  }

  async sendVerificationCode() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (this.modalemail === '') {
      this.emptyModalEmail = true;
    } else if (!emailPattern.test(this.modalemail)) {
      this.invalidStructureModalEmail = true;
      this.emptyModalEmail = false;
    } else {
      this.emptyModalEmail = false;
      this.invalidStructureModalEmail = false;

      const firstModal = await this.modalController.getTop();
      if (firstModal) {
        await firstModal.dismiss();
        this.modalemail='';
      }

      const digitsModal = document.getElementById('open-digits-modal') as any;
      if (digitsModal) {
        digitsModal.present();
      }
      }    
  }

  async gotochangepasswordmodal(){
    const enteredCode = this.digits.join('');
    if(enteredCode != this.digitalCode.toString()){
      this.wrongdigits = true;
    }else{
      this.wrongdigits = false;
      const digitsModal = await this.modalController.getTop();
      if (digitsModal) {
        await digitsModal.dismiss();
        this.digits=['', '', '', ''];
      }
  
      const NewPasswordModal = document.getElementById('open-NewPassword-modal') as any;
      if (NewPasswordModal) {
        NewPasswordModal.present();
      }

    }
  }

  async openloginmodal(){
    
      const Modal = await this.modalController.getTop();
      if (Modal) {
        await Modal.dismiss();
      }
  
      const firstmodal = document.getElementById('first-modal-login') as any;
      if (firstmodal) {
        firstmodal.present();
      }
  }

  dismiss() {
    this.modalController.dismiss();
  }

  focusNextInput(event: Event, index: number) {
    const input = event.target as HTMLInputElement;
    if (input.value.length === 1) {
      const nextInput = document.querySelectorAll('.digit-input')[index + 1] as HTMLInputElement;
      if (nextInput) {
        nextInput.focus();
      }
    }
  }

  
  

  async save() {
    if (this.modalpassword === '' && this.modalConfirmPassword === ''){
      this.emptyModalPassword = true;
      this.emptyModalConfirmPassword = true;
      this.wrongModalPassword = false;
      return;
    }
    if (this.modalpassword === '' ) {
      this.emptyModalPassword = true;
      this.wrongModalPassword = false;
      this.emptyModalConfirmPassword = false;
      return;
    } else {
      this.emptyModalPassword = false;
    }
    if (this.modalConfirmPassword === '') {
      this.emptyModalConfirmPassword = true;
      this.wrongModalPassword = false;
      this.emptyModalPassword = false;
      return;
    } else {
      this.emptyModalConfirmPassword = false;
    }
    
    if(this.modalpassword != this.modalConfirmPassword){
      this.wrongModalPassword = true;
      this.emptyModalConfirmPassword = false;
      this.emptyModalPassword = false;
      return;
    } else {
      this.wrongModalPassword = false;
      this.modalpassword = '';
      this.modalConfirmPassword = '';
      
      const passwordmodal = await this.modalController.getTop();
      if (passwordmodal) {
        await passwordmodal.dismiss();
      }
  
      this.presentToast('Password changed successfully!');
    }
  }
  


  constructor(private modalController: ModalController, private toastController: ToastController,private router:Router) { }


  ngOnInit() {
  }
}
