// Primitive
// 7 types: String, Number, Boolean, NUll, undefines,Symbol,BigINt


const id=Symbol('1234')
const anotherId=Symbol('1234')

console.log(id===anotherId);

const bigNum= 342344243433224242n;
console.log(typeof(bigNum));



// Reference(Non Primitive)
//Arrays, Objects, Functions

const heros = ["shaktiman", "Ironman", "Invincible"];

let myObj={
    name:"Reacher",
    age:22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof myFunction);

// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object


//***************************************************************************************************************** */

// Stack(Primitives), Heap (NON - Prmitives)
