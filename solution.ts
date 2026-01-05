const formatValue = (param: string | number | boolean): string | number | boolean => {
    if (typeof (param) === 'string') {
        return param.toUpperCase();
    } else if (typeof (param) === 'number') {
        return param * 10;
    } else {
        return !param
    }

}




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




const filterByRating = (param: { title: string, rating: number }[]): { title: string, rating: number }[] => {
    return param.filter((item) => item.rating >= 4)

}




const filterActiveUsers = (userArr: { id: number, name: string, email: string, isActive: boolean }[]): { id: number, name: string, email: string, isActive: boolean }[] => {
  return userArr.filter((user) => user.isActive === true)
}




interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (book: Book) => {
  console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable === true ? "Yes": "No"} `)
}




const getUniqueValues = (arr1: number[], arr2: number[]): number[] => {
  const newArr: number[] = [];


  for (let i = 0; i < arr1.length; i++) {
    let exists = false;

    for (let j = 0; j < newArr.length; j++) {
      if (arr1[i] === newArr[j]) {
        exists = true;
        break;
      }
    }

    if (!exists) {
      newArr.push(arr1[i]);
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    let exists = false;

    for (let j = 0; j < newArr.length; j++) {
      if (arr2[i] === newArr[j]) {
        exists = true;
        break;
      }
    }

    if (!exists) {
      newArr.push(arr2[i]);
    }
  }

  return newArr;
};






type Product = {
    name: string;
    price: number;
    quantity: number;
    discount?: number
}

const calculateTotalPrice = (productArr: Product[]): number => {
    productArr.length === 0 && 0;

    const total: number = productArr.reduce((previousValue: number, currentValue: Product): number => {
        const { price, quantity, discount } = currentValue;

        const totalWithoutDiscount: number = price * quantity;

        const discountedPrice: number = discount ?
            (totalWithoutDiscount - ((discount * totalWithoutDiscount) / 100))
            : totalWithoutDiscount;

        const totalDiscountPrice: number = previousValue + discountedPrice;

        return totalDiscountPrice
    }, 0)

    return total
}