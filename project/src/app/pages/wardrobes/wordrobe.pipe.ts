import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordrobe',
  pure: true
})
export class WordrobePipe implements PipeTransform {
  transform(categories: any[], selectedGender: string, searchText: string): any[] {
    if (!categories) return [];

    // Filter by selectedGender if it is set
    let filteredCategories = selectedGender
      ? categories.filter(category => category.gender.toLowerCase() === selectedGender.toLowerCase())
      : categories;

    // Further filter by searchText if it is set
    if (searchText) {
      filteredCategories = filteredCategories.filter(category =>
        category.name.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    return filteredCategories;
  }
}
