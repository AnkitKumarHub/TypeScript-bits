const chaiFlavours: string[] = ['Masala', 'Lemon', 'Cardamom', 'Ginger'];

const chaiPrice: number[] = [10,20,30]

const rating: Array<number> = [4.5, 4.6, 4.7, 4.8];  // here inside angular brackets we can mention custom/ primitive data types

// now with the objects 
type Chai = {
    name: string;
    price: number;
}

const menue: Chai[] = [
    {
        name: 'masala',
        price: 10,
    },
    {
        name: 'lemon',
        price: 20,
    }
]

/** You can modify the array elements using push method */
menue.push({
    name: 'cardamom',
    price: 30,
})

//** Read Only array */
const cities: readonly string[] = ['Delhi', 'Mumbai', 'Chennai', 'Kolkata'];
// cities.push('Pune'); // this will give error because cities is a readonly array

//**Multi dimensional array */
const table: number[][] = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
]

// TUPLES
let chaiTuple: [string, number];
chaiTuple = ['masala', 10];
// chaiTuple = [20, 'lemon']; // this will give error because the first element is a string and the second element is a number --> Order matters when defined 

//optional 
let userInfo: [string, number, boolean?];
userInfo = ['ankit', 20]
userInfo = ['ankit', 20, true];

//read-only tuples
const location: readonly[number, number] = [24.66, 32.77];

//named tuple
const chaiItems: [name: string, price: number] = ['masala', 25]


//!ENUMS
enum cupSize {
    SMALL,
    MEDIUM,
    LARGE,
}

const myCupSize = cupSize.SMALL; // will get suggestion 

//* GOTCHAS -- Incremental Value
enum Status {
    PENDING = 100,
    SERVED, // will be 101
    CANCELLED, // will be 102 automatically incremented by 1
}

//
enum ChaiType {
    MASALA = 'masala',
    LEMON = 'lemon',
}

function makeChai(type: ChaiType){
    console.log(`Making ${type} chai`);
}

makeChai(ChaiType.LEMON) // will give suggestion 
// makeChai("ginger") // will give error because ginger is not a valid ChaiType

//* Hetrogeneous Enums -- not used in standard practice prefer same data type of enums 
enum RandomEnum {
    ID = 1, // number
    NAME = 'chai', // string
}

//* Making ENUMS Constants
const enum Sugars {
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3,
}

const mySugars = Sugars.LOW;

//? GOTCHAS -- 
let t : [string, number] = ["chai", 15];
t.push("extra")   // here you are able to push the value --> Unexpected beahaviour 

// at the end of the day foundation is let t : [string, number] --  this is tuple & tuple end of the day is 'ARRAY' and we can push the value in the array --> Unexpected beahaviour 
