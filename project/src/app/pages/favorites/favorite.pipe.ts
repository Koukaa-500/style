import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'favoriteFilter',
  pure: false
})
export class FavoriteFilterPipe implements PipeTransform {

  transform(articles: any[]): any[] {
    return articles.filter(article => article.isFavorite);
  }

}
