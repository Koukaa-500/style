import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/interfaces/article';
import { articles } from 'src/app/data/article.data';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  articles: Article[] = articles;
  activeIcon: string = 'favorites';
  constructor(private router:Router,private modalController: ModalController) { }

  ngOnInit() {
    this.setActiveIcon('favorites');
  }
  setActiveIcon(iconName: string) {
    this.activeIcon = iconName;
  }

  sendToHome() {
    this.setActiveIcon('home');
    this.router.navigate(['/home']);
  }

  sendToCollection() {
    this.setActiveIcon('collections');
    this.router.navigate(['/collections']);
  }

  goToFavorites() {
    this.setActiveIcon('favorites');
    this.router.navigate(['/favorites']);
  }

  goToProfile() {
    this.setActiveIcon('profile');
    this.router.navigate(['/profile']);
  }
}
