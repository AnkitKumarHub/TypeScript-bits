type chaiOrder = {
    type: string,
    sugar: number,
    strong: boolean
}

// function makeChai(order: {type:string, sugar:number, strong: boolean})
function makeChai(order: chaiOrder){
    console.log(order);
}

// so here as you can see the types are repetitive so we have introduced chaiOrder and can directly use this now
// function serveChai(order: {type:string, sugar:number, strong: boolean}) 
function serveChai(order: chaiOrder){
    console.log(order);
}


//***** Interface && Type *** */
type TeaReceipe = {
    water: number;
    milk :number
}
class MasalaChai implements TeaReceipe{     // no problem here because in type TeaReceipe data-types are primitive 
    water = 100;
    milk = 50;
}

type CupSize= 'small' | 'Large'
// class Chai implements CupSize{} // Error: A class can only implement an object type or intersection of object types with statically known members
    
// interface doesn't have equal sign and the custom value must be in some variable 
interface NewCupSize {
    size: 'small' | 'large';
}
class chai implements NewCupSize{
    size: "small" | "large" = 'small'
}

// so in class use -> interface as its more digestable 

// type Response = {ok: true} | {ok: false}
// class myRes implements Response{  //ERROR: its give the same error isko yeh nahi jamta so convert -> interface 
//     ok: boolean = true;
// }



//*****Union  */
type TeaType  = 'masala' | 'ginger' | 'lemon' // formal name - Literal Types

function orderChai(t:TeaType){   // " | " -> this is union mtl in teen me se ek hi value ho sakti he 
    console.log(t);
}

//**Intersection */
type BaseChai = {teaLeaves: number}
type Extra = {masala: number}

type MasalaaChai = BaseChai & Extra  // iske andar dono property hogi mtlb dono hi aayenge -> dono hi jarurui hei

const cup : MasalaaChai = {
    teaLeaves: 2,
    masala: 1
}


//optional
type User ={
    userName : string,
    Bio?: string 
}

const u1: User = {userName: "Ankit"};
const u2: User = {userName: "Ankit", Bio: "Hi Myself Ankit!"}


//Readonly 
type config = {
    readonly appName: string; // this is readonly 
    version: number
}
const cfg: config={
    appName: "Masterji", // lekin yha pe ek baar value set karni padegi 
    version: 1
}

// cfg.appName = "mastrji2"  // Cannot assign to 'appName' because it is a read-only property.ts

