//problem: 1 answer:

const filterEvenNumbers = (numbers: number[]): number[] => {
    return numbers.filter((num) => num % 2 === 0);
}

const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = filterEvenNumbers(numbers);
console.log(evenNumbers);   


//problem: 2 answer:
const reverseString = (text: string): string => {
    return text.split('').reverse().join('');
}

const inputText = "typescript";
const reversedText = reverseString(inputText);
console.log(reversedText);  

//problem: 3 answer:

type StringOrNumber = string | number;
const checkType = (value: StringOrNumber): string => {
    if (typeof value === 'string') {
        return "string";
    }
    else if (typeof value === 'number') {
        return "number";
    }
}

const value1: StringOrNumber = "Hello";
const value2: StringOrNumber = 42;
console.log(checkType(value1)); 
console.log(checkType(value2));    

//Problem: 04 answer:

const getProperty = <T, K extends keyof T> (obj: T, key: K): T[K] =>{
    return obj[key];
} 

const user = {
    id : 1,
    name: "John Doe",
    age: 21
};
const userName = getProperty(user, "name");
console.log(userName);

// problem: o5 answer:


//input

interface book {
    title: string;
    author: string;
    publishedYear: number;
}

const toggleReadStatus = (book: book ): book & { isRead: boolean } => {
    return {
        ...book,
        isRead: true
    }
}


const myBook = {
    title: "TypesSript Guide",
    author: "jane Doe",
    publishedYear: 2024
}

const updatedBook = toggleReadStatus(myBook);
console.log(updatedBook);


//problem: 06 answer:

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
class Student extends Person {
    grade: string;

    constructor(
        name: string,
         age: number,
    grade: string
    ) {
        super(name, age);
        this.grade = grade;
    }
    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}

const student = new Student("Alice", 20, "A");
console.log(student.getDetails()); 


// problem: 07 answer:

const getInersection = (array1: number[], array2: number[]): number[] => {
    return array1.filter(value => array2.includes(value));
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3,4,5,6,7];
const intersection = getInersection(array1, array2);
console.log(intersection);