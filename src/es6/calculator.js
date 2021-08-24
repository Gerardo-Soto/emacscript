class calculator {
    //Constructor
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }

    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

 const calc = new calculator();
 console.log(calc.sum(5,8));
 console.log(calc.sum(7,3));

 