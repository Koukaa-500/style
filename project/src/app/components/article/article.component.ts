import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/interfaces/article';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent  implements OnInit {
  @Input() article!: Article;
  constructor() { }

  ngOnInit() {}
  toggleFavorite(event:Event,article: Article) {
    event.stopPropagation();
    article.isFavorite = !article.isFavorite;
  }
  

}
