function makeChai(type: string, cups: number){
    console.log(`Making ${cups} cups of ${type}`)
}

makeChai("Masala Chai", 2);

// Return 
function getChaiPrice(): number {
    return 25
}

function makeOrder(order: string){ // yha pe pta nahi he function return kya karega 
    if(!order) return null;
    return order;
}


//logger function --> void means that the function does not return anything so telling explicitly is good practice 
function logChai(): void {
    console.log("Chai is ready");
}

//? option & default parameters
function orderChai(type?: string){} //always write at the end of the function parameters default and optional parameters

function orderCoffee(type: string = "coffee"){} // by default coffee will be ordered so either you can by ques? mark or by default value 

/** */
function createChai(order: {
    type: string,
    sugar: number,
    size: "small" | "medium" | "large"
}): number {
    return 5; // this is the return type of the function
}
