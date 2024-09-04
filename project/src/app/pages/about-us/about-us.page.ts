import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.page.html',
  styleUrls: ['./about-us.page.scss'],
})
export class AboutUsPage implements OnInit {
  goBack(){
    this.router.navigate(['/home'])
  }
  constructor(private router: Router) { }

  ngOnInit() {
  }

}
