import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectionStatus, Network } from '@capacitor/network';
import { register } from 'swiper/element/bundle';
register();
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  networkStatus?:ConnectionStatus
  constructor(private router:Router){
    
  }
  ngOnInit() {
    Network.getStatus().then(status => {
      this.networkStatus = status;
      console.log('Initial Network Status:', this.networkStatus);
  

      if (!this.networkStatus.connected) {
        console.log('No network connection, navigating to Connection Lost page.');
        this.router.navigate(['/connection-lost']);
      } else {
        console.log('Network connected, navigating to First Screen.');
        this.router.navigate(['/favorites']);
      }
    });
// ala@gmail.com
  
    Network.addListener("networkStatusChange", status => {
      this.networkStatus = status;
      console.log('Network Status Changed:', this.networkStatus);
    });
  }
  

 
}
