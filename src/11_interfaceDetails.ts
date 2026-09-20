// interface main goal is to give shape to object or data 
// ..hamesa object ka structure define karte hai lekin ye javascript ka koi code generate nahi karte hai 


interface Chai {
    flavour: string;
    price: number;
    milk?: boolean
}

const masala: Chai ={
    flavour: "masala",
    price: 30
}

interface Shop{
    readonly id: number;
    name: string
}

const myShop: Shop = { id: 1, name: "chuski coffee"}
// myShop.id = 2 // error because id is readonly


//* handling fucntion in the interface -- interface only for structure not for the data 
interface DiscountCalculator{
    (price: number): number // ye function param price expect karta hai aur ek number return kar rha hai -- function ka naam bhi nahi likha hei  
}

const apply50: DiscountCalculator = (price) => price * 0.5 // actual usage yha pe hai 


//
interface TeaMachine{
    start(): void;
    stop(): void;
    demo(price:number): void
}

// jo bhi TeaMachine ke interface ko implement ya follow karega uske liye ye method define karna padega 
const machine: TeaMachine = {
    start: () => console.log("starting"),
    stop: () => console.log("stopping"),
    demo: (price) => console.log(price)
}

//* Index signature 
interface ChaiRatings{
    [flavour: string]: number // ye ek object hai jisme key string hai aur value number hai -- ye ek index signature hai 
    // yha ek flavour hona aur rating(number) hona hai
}

const ratings: ChaiRatings = {
    masala: 4.5,
    lemon: 3.5,
}

//* Unique feature MERGING INTERFACES-- sometime you uses library and you also have some code fir un dono ko mila ke bhi kaam hota hai 

interface User { // for eg from library 
    name: string;
}

interface User { // for eg from your code
    age: number;
}

const u: User = {
    name: "Ankit", // Property 'age' is missing in type '{ name: string; }' but required in type 'User' so you have to include 'name' & 'age' both 
    age: 30
}


//* interafaces are extended -- you can extend one interface to another interface but class ko extend nahi kar sakte

interface A{
    a: string;
}
interface B{
    b: string;
}

interface C extends A, B{}