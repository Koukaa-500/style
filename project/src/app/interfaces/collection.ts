import { Article } from "./article";

export interface Collection {
    id:number,
    imageUrl: string;
    type:string;
    number:number;
    selected?: boolean;
    articles:Article[]
  }
  