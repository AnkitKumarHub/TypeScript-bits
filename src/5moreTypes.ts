// Forceful type assertions

let response: any = "42"   // response -> maan rahe he ki type string hoga by api resposne etc

// let numericLength: number = response.length  // yha pe methods nahi suggest ho rahe he -> string ke methods aane chahiye the 

let numericLength: number = (response as string ).length;


// another example
type Book = {
    name: string;
}

let bookString = '{"name": "who moved my cheese"}';
let bookObject = JSON.parse(bookString) as Book  //is object type mujhe ab ache se pta he ki book type ka he 

console.log(bookObject.name) 

const inputElement = document.getElementById("username") as HTMLInputElement // forcefully anotate karne ki koshis kar rhae he 



// Any && unknown

let value: any
value = "chai";
value = [1,2.4]
value = 2.5

value.toUpperCase();

// unknown
let newValue: unknown
newValue = "chai";
newValue = [1,2.4]
newValue = 2.5

// newValue.toUpperCase(); // yha pe error aagya so when we call, construct, or access properties we have explicitly define the type


if(typeof newValue === 'string'){
    newValue.toUpperCase();
}


//******** */

try {
    
} catch (error) {
    if(error instanceof Error){
        console.log(error.message)
    }

    console.log("Error:", error)
}

const data: unknown = "chai aur code";
const strData: string = data as string;   // maan lo na ki data string hei 



// *****   Type - Never *******

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


// webserver pe infinite loop chalana pade to
function neverReturn():never{
    while(true){}
}
