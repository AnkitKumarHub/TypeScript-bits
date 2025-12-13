// use type unknown insead of any (relative to any, unknown is safer) 

function getChai(kind : string | number) {
    if (typeof kind === 'string'){
        return `Making ${kind} chai...`;   // this is type narroowing here the methods of strings will be suggested only like kind.charAt, etc..
    }

    return `Chai Order: ${kind}`; // here the methods of number will be suggested like toString , valueOf
}


//Truthiness finding 

function serveChai(msg?: string){
    if (msg){
        return `serving ${msg}`;
    }
    return `serving default masala chai...`
}

//exhaustive check 
function orderChai(size: 'small' | 'medium' | 'large' | 'number'){
    if (size === 'small'){
        return `small cutting chai`;
    }
    if(size === 'medium' || size === 'large'){
        return `make extra chai`;
    }
    return `chai Order #${size}`;
}

//*********** */

class kulhad{
    serve(){
        return 'serving chai in kulhad...';
    }
}

class Cutting{
    serve(){
        return 'serving cutting chai...';
    }
}

function serve( chai: kulhad | Cutting){
    if (chai instanceof kulhad){
        return  chai.serve();    // this 
    }
}


//********* */
type chaiOrder = {
    type : string,
    sugar : number
}

function isChaiOrder(obj: any): obj is chaiOrder{
    return (
        typeof obj === "object" && 
        obj != null && 
        typeof obj.type === 'string' &&
        typeof obj.sugar === 'number'
    )
}

function serveOrder(item: chaiOrder | string){
    if(isChaiOrder(item)){
        return `serving ${item.type} chai with ${item.sugar} sugar `
    }

    return `serving custom chai ${item} `
}


//********* */

type MasalaChai = {type: 'masala', spicelevel: number}
type GingerChai = {type: 'ginger', amount: number}
type ElaichiChai = {type: 'elaichi', aroma: number}


type chai = MasalaChai | GingerChai | ElaichiChai;

function MakeChai(order: chai){
    switch (order.type) {
        case "masala":
            return `masala chai in progress..`
            break;
        case "elaichi":
            return `elaichi chai in progress..`
            break;
        case "ginger":
            return `ginger chai in progress..`
            break;
    }
}


function brew(order : MasalaChai | GingerChai){
    if ("spicelevel" in order){
        return `this is MasalaChai`  
        //we are specifically checking with the single properties because spicelevel is in masalachai only
    }

    return `this is GingerChai`   
}


//****any || unknown */
function isStringArray(arr :unknown): arr is String[]{

}