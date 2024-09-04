import { Component } from '@angular/core';
import { ModalController,NavController,ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password-settings',
  templateUrl: './password-settings.page.html',
  styleUrls: ['./password-settings.page.scss'],
})
export class PasswordSettingsPage {
  showModalPassword = false;
  showModalConfirmPassword = false;
  originpassword: string = '123456';
  currentPassword: string = '';
  wrongCurrentPassword: boolean = false;
  newPassword: string = '';
  confirmPassword: string = '';
  showCurrentPassword: boolean = false;
  showNewPassword: boolean = false;
  showConfirmPassword: boolean = false;
  emptyCurrentPassword: boolean = false;
  emptynewPassword: boolean = false;
  emptyconfirmPassword: boolean = false;
  wrongPassword: boolean = false;
  modalpassword : string = '';
  modalemail:string='';
  invalidStructureModalEmail = false;
  emptyModalEmail= false;
  digitalCode : number = 1234;
  digits: string[] = ['', '', '', ''];
  wrongdigits = false;
  modalConfirmPassword : string = '';
  emptyModalPassword= false;
  emptyModalConfirmPassword= false;
  wrongModalPassword = false;

  constructor(private modalController: ModalController,private navCtrl: NavController,private router:Router,private toastController: ToastController) {}

  toggleModalPasswordVisibility() {
    this.showModalPassword = !this.showModalPassword;
  }

  toggleConfirmPasswordVisibility() {
    this.showModalConfirmPassword = !this.showModalConfirmPassword;
  }

  async presentToast(message:string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000, 
      position: 'bottom' 
    });
    toast.present();
  }

  goBack() {
    this.navCtrl.back();
  }

  togglePasswordVisibility(type: string) {
    if (type === 'current') {
      this.showCurrentPassword = !this.showCurrentPassword;
    } else if (type === 'new') {
      this.showNewPassword = !this.showNewPassword;
    } else if (type === 'confirm') {
      this.showConfirmPassword = !this.showConfirmPassword;
    }
  }

  forgotPassword() {
    // Implement forgot password logic
  }

  changePassword() {
    if(this.currentPassword=='' && this.confirmPassword=='' && this.newPassword==''){
      this.wrongCurrentPassword=false;
      this.wrongPassword = false;
      this.emptyCurrentPassword=true;
      this.emptyconfirmPassword=true;
      this.emptynewPassword=true;
      return;
    }
    if(this.currentPassword != '' && this.currentPassword!=this.originpassword){
      this.emptyCurrentPassword=false;
      this.wrongCurrentPassword=true;
    }else{
      this.wrongCurrentPassword=false;
    }
    if(this.currentPassword==''){
      this.emptyCurrentPassword=true;
      this.wrongCurrentPassword=false;
    }else{
      this.emptyCurrentPassword=false;
    }
    if(this.confirmPassword==''){
      this.emptyconfirmPassword=true;
      this.wrongPassword = false;
    }else{
      this.emptyconfirmPassword=false;
    }
    if(this.newPassword==''){
      this.emptynewPassword=true;
      this.wrongPassword = false;
    }else{
      this.emptynewPassword=false;
    }
    if ((this.newPassword != this.confirmPassword) && this.newPassword !='' && this.confirmPassword!='') {
      this.wrongPassword = true;
      this.emptynewPassword=false;
      this.emptyconfirmPassword=false;
    } else {
      this.wrongPassword = false;
    }

    if(this.wrongCurrentPassword===false && this.wrongPassword === false && this.emptyCurrentPassword===false && this.emptyconfirmPassword===false && this.emptynewPassword===false){
      this.router.navigate(['/profile']);
      this.presentToast('Password changed successfully!');
    }
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

      const digitsModal = document.getElementById('digits-modal') as any;
      if (digitsModal) {
        digitsModal.present();
      }
      }    
  }
  

  async opensettingsmodal(){
      const Modal = await this.modalController.getTop();
      if (Modal) {
        await Modal.dismiss();
      }
  
      const settingsModal = document.getElementById('settingsmodal') as any;
      if (settingsModal) {
        settingsModal.present();
      }
  }

  async gotochangeepasswordmodal(){
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
  
      const NewPasswordModal = document.getElementById('NewWPassword-modal') as any;
      if (NewPasswordModal) {
        NewPasswordModal.present();
      }

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

  
  

  async savee() {
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
}
