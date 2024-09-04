import { Pipe, PipeTransform } from '@angular/core';
import { Person } from 'src/app/interfaces/person';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(people: Person[], searchText: string): Person[] {
    if (!people || !searchText) {
      return people;
    }
    searchText = searchText.toLowerCase();
    return people.filter(person => 
      person.name.toLowerCase().includes(searchText)
    );
  }
}
