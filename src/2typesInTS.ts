// Type Annotation & Inference in JS/TS


//** Type Inferencing -> automatically detect ho jata hai ki konsa type ka data hai
let drink = "chai"; 

let  cups = Math.random() > 0.5 ? 10 : '5'; //let cups: string | number

let channelName = "Chaiaurcode";
// channelName = 1234; -> Type 'number' is not assignable to type 'string'



//** Type Annotation -> btana padta hai ki konsa type ka data hoga
let chaiFlavour: string = "masala";
chaiFlavour = "ginger";
// chaiFlavour = 1234;


// annotation type example
let annotation:number
let annotation1:boolean
