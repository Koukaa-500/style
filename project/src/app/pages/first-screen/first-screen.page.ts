import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Swiper } from 'swiper';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-screen',
  templateUrl: './first-screen.page.html',
  styleUrls: ['./first-screen.page.scss'],
})
export class FirstScreenPage implements AfterViewInit {
  @ViewChild('swiper', { static: false }) swiperRef: ElementRef | undefined;
  swiper?: Swiper;
  constructor(private router: Router) { }

  ngAfterViewInit() {
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }

  swiperSlideChanged(e: any) {
    console.log('changed: ', e);
  }

  slideNext() {
    console.log('Next slide');
    this.swiper?.slideNext();
  }
  goToLogin() {
    this.router.navigate(['/login']); // Remplacez '/login' par le chemin de votre page de connexion
  }
}
