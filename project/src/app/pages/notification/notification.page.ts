import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {

  notifications = [
    {name: "General Notification", checked: true},
    {name: "Sound", checked: true},
    {name: "Sound Call", checked: true},
    {name: "Vibrate", checked: true},
    {name: "Special Offers", checked: true},
    {name: "Payments", checked: true},
    {name: "Promo And Discount", checked: false},
    {name: "Cashback", checked: false}
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goBack() {
    this.router.navigate(['/profile']);
  }

  toggleNotification(notification:any) {
    notification.checked = !notification.checked;
  }
}
