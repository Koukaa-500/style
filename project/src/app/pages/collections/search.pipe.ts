import { Pipe, PipeTransform } from '@angular/core';
import { Collection } from '../../interfaces/collection'; // Adjust the import path as necessary

@Pipe({
  name: 'filterByType'
})
export class FilterByTypePipe implements PipeTransform {

  transform(collections: Collection[], searchText: string,sortBy: string): Collection[] {
    if (!collections) {
      return [];
    }
    
    // Filter collections by search text
    let filteredCollections = collections;
    if (searchText) {
      searchText = searchText.toLowerCase();
      filteredCollections = collections.filter(collection =>
        collection.type.toLowerCase().includes(searchText)
      );
    }
    
    // Sort collections by the provided sort option
    if (sortBy === 'AtoZ') {
      filteredCollections.sort((a, b) => a.type.localeCompare(b.type));
    }
    
    return filteredCollections;
  }
}
