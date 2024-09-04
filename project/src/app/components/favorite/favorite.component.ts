import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/interfaces/article';
@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss'],
})
export class FavoriteComponent  implements OnInit {
  @Input() article!: Article;
  activeIcon: string = 'favorites';
  constructor(private router:Router) { }

  ngOnInit() {}
  toggleFavorite(event:Event,article: Article) {
    event.stopPropagation();
    article.isFavorite = !article.isFavorite;
  }
  sendToCollection() {
    this.setActiveIcon('collections');
    this.router.navigate(['/collections']);
  }

  setActiveIcon(iconName: string) {
    this.activeIcon = iconName;
  }
}
