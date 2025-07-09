const output = document.querySelector('#output');

/* STEP 1: Instead of a constructor function, let's try a JavaScript class called 'Coffee' */
class Coffee {
    //variables/attributes
    size;
    isDecaf;
    //Constructor
    constructor(size, isDecaf) {
        this.size = size;
        this.isDecaf = isDecaf;
    }
    //methods
    // add a serveIt method
    serveIt() {
    //generate an IMG of the coffee ordered
       let cup = document.createElement('img'); //  <img>
    //set the src path for the img element
        cup.setAttribute("src", "images/coffee-cup.svg");  //<img src="images/coffee-cup.svg">
        console.log(cup);
    //determine caffeine status of the coffee
        if (this.isDecaf) {
            cup.setAttribute("src", "images/coffee-cup-green.svg");
        }else{
            cup.setAttribute("src", "images/coffee-cup-purple.svg");
        }
    //set the size of the cup svg image on this.size
        switch (this.size) {
            case "small":
                cup.setAttribute("height", "100");
                break;
            case "medium":
                cup.setAttribute("height", "150");
                break;
            case "large":
                cup.setAttribute("height", "200");
                break;
            default:
                cup.setAttribute("height", "150");
        }
    //generate a description of the coffee and put it into the img title attribute
cup.setAttribute("title", `A ${this.size} sized coffee.`);
    //insert the new img element into the paragraph
        output.appendChild(cup);
}
}
/* STEP 2: Instatiate a coffee based on the above constructor function */
let sarahCoffee = new Coffee("medium", false);
let robertCoffee = new Coffee("large", true);
let meganCoffee = new Coffee("small", false);
/* STEP 3: Add a method to the Coffee class called serveIt() */

/* STEP 4: Call up the serveIt() method */
sarahCoffee.serveIt();
robertCoffee.serveIt();
meganCoffee.serveIt();
/* STEP 5: Define a subclass of the Coffee class */
class Latte extends Coffee{
    milkType;
    constructor(size, isDecaf, milkType) {
        super(size, isDecaf); // call the parent class constructor
        this.milkType = milkType;
    }

    latteDesc() {
        alert(`A ${this.size} sized Latte with ${this.milkType} milk.`);
    }
}

/* STEP 6: Create a new instance of the Latte object */
let sarahLatte = new Latte("medium", false, "2%");
/* STEP 7: Call up the latteDesc() method for the above created Latte instance */

/* STEP 8: Create yet another instance of Latte using the console, and try the latteDesc() method from the subclass, as well as the serveIt() method from the parent class */
class Mocha extends Latte {
    chocolateType;
    constructor(size, isDecaf, milkType, chocolateType) {
        super(size, isDecaf, milkType); // call the parent class constructor
        this.chocolateType = chocolateType;
    }
    mochaDesc() {
        alert(`A ${this.size} sized Mocha with ${this.milkType} milk and ${this.chocolateType} chocolate.`);
    }
}
// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript

// Special thanks to https://openclipart.org/detail/293550/coffee-to-go for the very cool coffee cup SVG
