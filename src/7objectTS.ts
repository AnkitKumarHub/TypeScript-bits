const obj = {
    name: "Masala Chai",
    price: 10,
    isHot: true
}

//Behind the scene --> jo infer ho rahi he value wo iss trh ho rahi he kuch automatically

/**
{
    name: string;
    price: number;
    isHot: boolean;
}
 */

let tea: {
    name: string; // use semicolon at end in TS
    price: number;
    isHot: boolean;
}

tea = {
    name: "ginger Tea",
    price: 10,
    isHot: true
}

//** Define Custom Object Type */
type Tea = {
    name: string;
    price: number;
    ingredients: string[];
}

const adrakChai: Tea = {
    name: "Adrak Chai",
    price: 30,
    ingredients: ["ginger", "tea", "milk", "sugar"]
}

//Structural typing vs Duck Typing 

//** Duck typing */ --> if its look like a duck and its walks like a duck then it might be a duck 

type Cup = { size: string};

let smallCup: Cup = { size: "250ml"};
let bigCup = { size: "500ml", material: "Steel"}

smallCup = bigCup; // no error because bigCup has all the properties of smallCup --> Duck typing (bare minimum properties jo he wo satisfy ho rahi hei)

type Brew = {brewTime: number}
const coffee = {brewTime: 5, beans: "Arabica"}

const chaiBrew: Brew = coffee  // here also you can see with having extra data types also there is no error 

//? Typescript is prone that if there is extra data types there is no issue but sometime we want that there should be issue 

// if you give less data types then there will be issue 
type user = {
    name: string,
    password: string
}

// const u: user ={
//     name: "ankit", // Property 'password' is missing in type '{ name: string; }' but required in type 'user'.
// }


//** NOTES: Splitting data types -- leads code clarity */
type Item = { name: string, quantity: number}
type Address = { street: string, pinCode: number}

type Order = {
    id: string,
    items: Item[],
    address: Address
}


//? Make all properties in T optional --> Partial<T> -- <T> is called generic data type
type Chai = {
    name: string,
    price: number,
    isHot: boolean
}

const updateChai = (updates: Partial<Chai>) => { // Partial<Chai> means that the updates can be a subset of the Chai object --> if you want to update only some properties of the Chai object yeh sbako optional bna deta hai 
    console.log("updating chai with", updates);
}

updateChai({price: 20}); // no error because price is a subset of the Chai object
updateChai({isHot: false});
//! In partial we can pass the empty object also which can create cause some time issues in code
updateChai({});


//? Required all properties in T --> Required<T>
type ChaiOrder = {
    name?: string,
    quantity?: number,
}

const placeOrder = (order: Required<ChaiOrder>) => {
    console.log("placing order with", order);
}

// placeOrder({}) // error because name and quantity are required even it was earlier optional 
placeOrder({name: "Masala Chai", quantity: 1});



//? Pick -- From T, pick a set of properties whose keys are in the union K --> similar to Partial

type chaii = {
    name: string,
    price: number,
    isHot: boolean,
    ingredients: string[]
}

type BasicChaiInfo = Pick<chaii, "name" | "price">;

const chaiInfo: BasicChaiInfo = {
    name: "Lemon Tea",
    price: 10
}


//? Omit -- From T, omit a set of properties whose keys are in the union K --> similar to Required
type NewChai = {
    name: string,
    price: number,
    isHot: boolean,
    SecretIngredients: string[] // these are the ingredients that are not public
}

type PublicChai = Omit<NewChai, "SecretIngredients">; // omit the SecretIngredients from the NewChai object

const PublicChaiInfo: PublicChai = {
    name: "Lemon Tea",
    price: 10,
    isHot: true
}

