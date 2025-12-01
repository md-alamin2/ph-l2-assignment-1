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