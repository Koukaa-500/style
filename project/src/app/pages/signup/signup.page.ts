import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  signupForm: FormGroup;
  showPassword = false;
  avatarSrc = '../../../assets/icon/image.png'; // Default avatar image
  showConfirmPassword = false;
  wrongPassword = false;
  password: string = '';
  email: string = '';
  name:string='';
  phoneNumber:string='';
  emptyName=false;
  emptyPassword= false;
  emptyEmail= false;
  emptyPhoneNumber=false;
  invalidstructureEmail = false;
  invalidstructureName = false;
  invalidstructurePhone = false;
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
  
  constructor(private fb: FormBuilder,private router: Router , private toastController: ToastController) {
    this.signupForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit() {
    this.signupForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern('[0-9]+')]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  

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
    this.emptyName =this.emptyEmail = this.emptyPhoneNumber = this.emptyPassword = this.invalidstructureEmail = false;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[0-9]{8}$/;
    if (this.name === '') {
      this.emptyName = true;
    } else {
      this.emptyName = false;
    }
    if (this.email === '') {
      this.emptyEmail = true;
    } else if (!emailPattern.test(this.email)) {
      this.invalidstructureEmail = true;
      this.emptyEmail = false;
    } else {
      this.emptyEmail = false;
      this.invalidstructureEmail = false;
    }

    if (this.phoneNumber === undefined || this.phoneNumber === '') {
      this.emptyPhoneNumber = true;
      this.invalidstructurePhone = false;
    }else if (!phonePattern.test(this.phoneNumber)) {
      this.emptyPhoneNumber = false;
      this.invalidstructurePhone = true;
      
    } else {
      this.emptyPhoneNumber = false;
      this.invalidstructurePhone = false;
    }

    if (this.password === '') {
      this.emptyPassword = true;
    } else {
      this.emptyPassword = false;
    }
    if(this.emptyName == false && this.emptyEmail == false && this.emptyPhoneNumber == false && this.emptyPassword == false && this.invalidstructureEmail == false){
      this.name='';
      this.email='';
      this.phoneNumber='';
      this.password='';
      this.presentToast('Account created successfully! Welcome aboard.');
    }
  
    
  }

  onSubmit() {
    this.checkForm();

    if (this.signupForm.valid && !this.emptyName && !this.emptyEmail && !this.emptyPhoneNumber && !this.emptyPassword && !this.invalidstructureEmail &&  !this.invalidstructurePhone) {
      console.log('Form Submitted!', this.signupForm.value);
    }
  }
  

  uploadImage() {
    const fileInput = document.getElementById('fileInput') as HTMLElement;
    fileInput.click();
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.avatarSrc = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }


  sentToFacebook(){
    console.log("hey facebook is here");
    
  }

  sentToGoogle(){
    console.log("hey google is here");
    
  }
}
