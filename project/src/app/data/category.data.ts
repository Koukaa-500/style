import { Category } from '../interfaces/category';
import { Subcategory } from '../interfaces/subcategory';

// Sample subcategories data
export const hoodiesSubcategories: Subcategory[] = [
  {
    id: 1,
    name: 'Winter Hoodies',
    imageUrl: '../../../assets/icon/1.png',
    gender: 'Women',
  },
  {
    id: 2,
    name: 'Summer Hoodies',
    imageUrl: '../../../assets/icon/1.png',
    gender: 'Men',
  },
];

const tshirtSubcategories: Subcategory[] = [
  {
    id: 3,
    name: 'Graphic T-Shirts',
    imageUrl: '../../../assets/icon/1.png',
    gender: 'Women',
  },
  {
    id: 4,
    name: 'Plain T-Shirts',
    imageUrl: '../../../assets/icon/1.png',
    gender: 'Men',
  },
];

const jumpersSubcategories: Subcategory[] = [
  {
    id: 5,
    name: 'Chunky Jumpers',
    imageUrl: '../../../assets/icon/1.png',
    gender: 'Women',
  },
  {
    id: 6,
    name: 'Lightweight Jumpers',
    imageUrl: '../../../assets/icon/1.png',
    gender: 'Men',
  },
];

const shirtsSubcategories: Subcategory[] = [
  {
    id: 7,
    name: 'Dress Shirts',
    imageUrl: '../../../assets/icon/1.png',
    gender: 'Men',
  },
  {
    id: 8,
    name: 'Casual Shirts',
    imageUrl: '../../../assets/icon/1.png',
    gender: 'Women',
  },
];

const topsSubcategories: Subcategory[] = [
  {
    id: 9,
    name: 'Blouses',
    imageUrl: '../../../assets/icon/1.png',
    gender: 'Women',
  },
  {
    id: 10,
    name: 'Tank Tops',
    imageUrl: '../../../assets/icon/1.png',
    gender: 'Women',
  },
];

const shortsSubcategories: Subcategory[] = [
  {
    id: 11,
    name: 'Denim Shorts',
    imageUrl: '../../../assets/icon/1.png',
    gender: 'Men',
  },
  {
    id: 12,
    name: 'Cotton Shorts',
    imageUrl: '../../../assets/icon/1.png',
    gender: 'Men',
  },
];

const skirtsSubcategories: Subcategory[] = [
  {
    id: 13,
    name: 'A-Line Skirts',
    imageUrl: '../../../assets/icon/1.png',
    gender: 'Women',
  },
  {
    id: 14,
    name: 'Pencil Skirts',
    imageUrl: '../../../assets/icon/1.png',
    gender: 'Women',
  },
];

const dressesSubcategories: Subcategory[] = [
  {
    id: 15,
    name: 'Cocktail Dresses',
    imageUrl: '../../../assets/icon/1.png',
    gender: 'Women',
  },
  {
    id: 16,
    name: 'Evening Dresses',
    imageUrl: '../../../assets/icon/1.png',
    gender: 'Women',
  },
];

const jeansSubcategories: Subcategory[] = [
  {
    id: 17,
    name: 'Skinny Jeans',
    imageUrl: '../../../assets/icon/1.png',
    gender: 'Men',
  },
  {
    id: 18,
    name: 'Bootcut Jeans',
    imageUrl: '../../../assets/img/1.png',
    gender: 'Men',
  },
];

// Sample categories data
export const categories: Category[] = [
  {
    id: 1,
    name: 'Hoodies',
    imageUrl: '../../../assets/img/collection1.png',
    gender: 'Women',
    subcategories: hoodiesSubcategories,
    selected: false,
  },
  {
    id: 2,
    name: 'T-Shirt',
    imageUrl: '../../../assets/img/collection1.png',
    gender: 'Men',
    subcategories: tshirtSubcategories,
    selected: false,
  },
  {
    id: 3,
    name: 'Jumper',
    imageUrl: '../../../assets/img/collection1.png',
    gender: 'Women',
    subcategories: jumpersSubcategories,
    selected: false,
  },
  {
    id: 4,
    name: 'Shirt',
    imageUrl: '../../../assets/img/collection1.png',
    gender: 'Men',
    subcategories: shirtsSubcategories,
    selected: false,
  },
  {
    id: 5,
    name: 'Tops',
    imageUrl: '../../../assets/img/collection1.png',
    gender: 'Women',
    subcategories: topsSubcategories,
    selected: false,
  },
  {
    id: 6,
    name: 'Shorts',
    imageUrl: '../../../assets/img/collection1.png',
    gender: 'Men',
    subcategories: shortsSubcategories,
    selected: false,
  },
  {
    id: 7,
    name: 'Skirts',
    imageUrl: '../../../assets/img/collection1.png',
    gender: 'Women',
    subcategories: skirtsSubcategories,
    selected: false,
  },
  {
    id: 8,
    name: 'Dresses',
    imageUrl: '../../../assets/img/collection1.png',
    gender: 'Women',
    subcategories: dressesSubcategories,
    selected: false,
  },
  {
    id: 9,
    name: 'Jeans',
    imageUrl: '../../../assets/img/collection1.png',
    gender: 'Men',
    subcategories: jeansSubcategories,
    selected: false,
  },
];
