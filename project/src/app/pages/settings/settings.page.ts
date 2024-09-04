import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  goBack() {
    this.router.navigate(['/profile']);
  }

  async deletecancel(){
    const firstModal = await this.modalController.getTop();
      if (firstModal) {
        await firstModal.dismiss();
        console.log('delete cancel');
      }

  }
  gotopasswordsettings(){
    this.router.navigate(['/password-settings'])
  }

  async deleteconfirm(){
    const firstModal = await this.modalController.getTop();
      if (firstModal) {
        await firstModal.dismiss();
        console.log('delete confirm');
        this.router.navigate(['/login'])
      }

  }

  async delete(){
    const Modal = await this.modalController.getTop();
    if (Modal) {
      await Modal.dismiss();
    }

    const deletemodal = document.getElementById('delete') as any;
    if (deletemodal) {
      deletemodal.present();
    }
  }
  constructor(private router:Router,private modalController: ModalController) { }

  ngOnInit() {
  }

}
