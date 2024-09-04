import { Pipe, PipeTransform } from '@angular/core';
import { Article } from '../../interfaces/article';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(articles: Article[], searchText: string): Article[] {
    if (!articles || !searchText) {
      return articles;
    }
    searchText = searchText.toLowerCase();
    return articles.filter(article => 
      article.brand.toLowerCase().includes(searchText) ||
      article.description.toLowerCase().includes(searchText) ||
      article.price.toString().toLowerCase().includes(searchText)
    );
  }
}
