import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectionStatus, Network } from '@capacitor/network';
@Component({
  selector: 'app-connection-lost',
  templateUrl: './connection-lost.page.html',
  styleUrls: ['./connection-lost.page.scss'],
})
export class ConnectionLostPage {


  networkStatus?:ConnectionStatus
  constructor(private router:Router){
    
  }
  ngOnInit() {
    if(!Network){
      this.router.navigate(['/connection-lost']);
    }
    else{
      Network.getStatus().then((status=>{
        this.networkStatus=status;
        this.router.navigate(['/first-screen'])
      }))
    }
    Network.addListener("networkStatusChange",status=>{
      this.networkStatus=status
    })
  }

  async retryConnection() {
    const status = await Network.getStatus();
    if (status.connected) {
      // Navigate back to the first screen if connected
      this.router.navigate(['/first-screen']);
    } else {
      // Refresh the page if still disconnected
      window.location.reload();
    }
  }
}
