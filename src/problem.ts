const filterByRating =(param:{title:string, rating:number}[]): {title:string, rating:number}[]=>{
    return param.filter((item)=>item.rating>=4)
    
}

const books = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.9 },
  { title: 'Book C', rating: 5.0 },
];

console.log(filterByRating(books));