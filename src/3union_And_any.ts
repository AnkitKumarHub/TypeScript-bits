//UNION

let subs: number | string = "1Million";  // can be either number or string
// let subs: number | string  = 10

let apiRequest: "pending" | "success" | "error" = "pending";  

// apiRequest = "done"; -> Type '"done"' is not assignable to type '"pending" | "success" | "error"'
apiRequest = "success"; // only these 3 values allowed

let airLineSeat: "aisle" | "middle" | "window" = "middle";
airLineSeat = "aisle";

// ANY TYPE -> jab hume nhi pata hota ki konsa type ka data aa sakta hai toh hum any use karte hain
const orders = ["12", "20", "30", "40"];
// let currentOrder: any // avoid using any type
let currentOrder: string | undefined; // avoid using any type

for (let order of orders) {
  if (order === "20") {
    currentOrder = order;
    break;
  }

  currentOrder = "no order found";
}

console.log(currentOrder);
