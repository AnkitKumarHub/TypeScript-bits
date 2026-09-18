/**
 * Use case of Never Types - one is when we use RBAC (Role Based Access Control) and we need to handle all the roles -- we get interesting checks in this case
 * Try & Catch Block - we can use never type to handle errors
 */


// Forceful type assertions
let response: any = "42"   // response -> maan rahe he ki type string hoga by api resposne lekin fir bhi on hovering response pe 'any' type suggest ho rahe he 

// let numericLength: number = response.length  // yha pe methods nahi suggest ho rahe he -> string ke methods aane chahiye the 

let numericLength: number = (response as string ).length;


// another example
type Book = {
    name: string;
}

let bookString = '{"name": "who moved my cheese"}';
//for eg you get from the local storage & in localstorage it is of string type
let bookObject = JSON.parse(bookString) as Book  //is object type mujhe ab ache se pta he ki Type:'book' type ka he 

console.log(bookObject.name) //yha pe suggestion milenge 'name' property ka


//**Note - HTMLInputElement type -> for html input element (same is in react also)*/
const inputElement = document.getElementById("username") as HTMLInputElement // forcefully anotate karne ki koshis kar rhae he 


// Any && unknown

let value: any
value = "chai";
value = [1,2.4]
value = 2.5

value.toUpperCase(); // yha pe error show hi nahi hua kuch aisa because currently value have floating number 

// unknown
let newValue: unknown
newValue = "chai";
newValue = [1,2.4]
newValue = 2.5

// newValue.toUpperCase(); // yha pe error aagya so when we call, construct, or access properties we have explicitly define the type

//**solution - jb aap use kar reahe ho */
if(typeof newValue === 'string'){
    newValue.toUpperCase();
}


//* TRY & CATCH BLOCK */
try {
    
} catch (error: any) { // any type is used to handle all the errors -- jarurui nahi error me message property ho hi 
    if(error){
        console.log(error.message)
    }
    console.log("Error:", error)
}

//! Note - here we are using instanceof Error to handle the error -> it is a better way to handle the error than any type
try {
    
} catch (error) {
    if(error instanceof Error){
        console.log(error.message)
    }
    console.log("Error:", error)
}

/** unknown type */
const data: unknown = "chai aur code";
const strData: string = data as string;   // maan lo na ki data string hei 


// **   Type - Never **
type Role = "admin" | "User" | "SuperAdmin"

function redirectBasedOnRole(role: Role): void{
    if(role === "admin"){
        console.log("redirecting to Admin Dashboard");
        return;
    }
    if(role === "User"){
        console.log("redirecting On User Dashboard")
        return;
    }

    // role; 
    // yha pe agr role user aur admin he to role type == Never -> aapne sare cases handle karliye he to isko yha pe hona hi nahi chahiye tha 
    // lekin maan lo ek aur Role type aajaye superAdmin to yha pe error aayega

    role;  // now role type is SuperAdmin
}

//* function who return nothing/never
function neverReturn(): never {   // eg - webserver pe infinite loop chalana pade tb 
    while(true){}
}
