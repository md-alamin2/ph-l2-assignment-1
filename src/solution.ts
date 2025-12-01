// problem-1
const formatValue = (param: string | number | boolean): string | number | boolean => {
    if (typeof (param) === 'string') {
        return param.toUpperCase();
    } else if (typeof (param) === 'number') {
        return param * 10;
    } else {
        return !param
    }

}

// problem 2
const getLength = (param: string | any[]): number => {
    if (typeof (param) === 'string') {
        return param.length
    } else if (Array.isArray(param)) {
        return param.length;
    }
    else {
        return 0;
    }
}


// problem 3
class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}`
    }
}

// problem 4
const filterByRating = (param: { title: string, rating: number }[]): { title: string, rating: number }[] => {
    return param.filter((item) => item.rating >= 4)

}


// problem 5
const filterActiveUsers = (userArr: { id: number, name: string, email: string, isActive: boolean }[]): { id: number, name: string, email: string, isActive: boolean }[] => {
  return userArr.filter((user) => user.isActive === true)
}


// problem 6
interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (book: Book) => {
  console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable} `)
}


// problem 7
const getUniqueValues = (arr1: number[], arr2: number[]): number[] => {
  const newArr: number[] = [];
  for (let number of arr1) {
    if (!newArr.includes(number)) {
      newArr.push(number)
    }
  }

  for (let number of arr2) {
      if (!newArr.includes(number)) {
        newArr.push(number)
      }
    }

  return newArr
}
