// data.ts
import { Collection } from "../interfaces/collection";
import { articles } from "../data/article.data"; // Ensure the path is correct

export const collections: Collection[] = [
  {
    id: 1,
    imageUrl: '../../../assets/img/collection1.png',
    type: 'Summer Collection',
    number: 10,
    selected: false,
    articles: [articles[0], articles[1]] // Link to specific Article objects
  },
  {
    id: 2,
    imageUrl: '../../../assets/img/collection2.png',
    type: 'Party',
    number: 20,
    selected: false,
    articles: [articles[2], articles[3]] // Link to specific Article objects
  },
  {
    id: 3,
    imageUrl: '../../../assets/img/collection3.png',
    type: 'Work',
    number: 30,
    selected: false,
    articles: [articles[4], articles[5]] // Link to specific Article objects
  },
  {
    id: 4,
    imageUrl: '../../../assets/img/collection4.png',
    type: 'Weddings',
    number: 40,
    selected: false,
    articles: [articles[6]] // Link to specific Article objects
  }
];
