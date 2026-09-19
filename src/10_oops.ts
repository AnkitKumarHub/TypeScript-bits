// sometime we declare class & sometime blueprint for class

/** 
class Chai {
    flavour: string;  //using semicolon instead of comma
    price: number
    
    // constructor(flavour: string, price: number){
        //     this.flavour = flavour
        //     this.price = price
        // }
        
        constructor(flavour: string){
            this.flavour = flavour
            console.log(this)
        }
    }
    
    // chai ke andar 2 variables to bna diye leking use kese karoge?  --> there is no constructor yet or 
    
    // const masalChai = new Chai();
    const masalChai = new Chai("ginger", 250);
    masalChai.flavour = "kesar" // so you will get suggestion from the class 
    masalChai.price = 250
*/


//* Access Modifiers -- while creating class 

class chai {
    public flavour: string = 'masala' // public is default access modifier

    private secretIngredients: string = 'cardamom'

    reveal() {
        return this.secretIngredients // ok 
    }

}

class Shop {
    //* protected -- access within class or class that extends this class
    protected shopName = "chai corner" // like a staffDoor 
}

class Branch extends Shop {
    getName() {
        return this.shopName // ok 
    }
}

const c = new chai()
console.log(c.reveal())

new Branch().getName()


//
class walet {
    #balance = 100 // private access modifier at then end in JS we use #

    getBalance() {
        return this.#balance
    }
}

const w = new walet()
w.getBalance()


// read only property -- 
class cup {
    readonly capacity: number = 250 // so you can't change the value of capacity

    constructor(capacity: number) {
        this.capacity = capacity
    }
}


// controlled gates -- getters and setters
class ModernChai {
    private _sugar = 2

    get sugar() {
        return this._sugar;
    }

    set sugar(value: number) {
        if (value > 5) {
            throw new Error("Sugar level is too high")
        }
        this._sugar = value
    }
}

const mc = new ModernChai()
mc.sugar = 3


//* Static members
class EkChai{
    static ShopName = 'chai corner'

    constructor(private name: string){}
}
console.log(EkChai.ShopName) // static members are accessed using the class name directly no need to create an instance


//* Abstract classes -- abstract classess
abstract class Drink {
    abstract make(): void // abstract method -- no implementation
}

class MyChai extends Drink { //Non-abstract class 'MyChai' does not implement inherited abstract member make from class 'Drink'
    make() {
        console.log("Brewing My Chai")
    }
}


//* Composition 
class Heater {
    heat(){}
}

class ChaiMaker {
    constructor(private heater: Heater){}

    make(){
        this.heater.heat()
    }
}
