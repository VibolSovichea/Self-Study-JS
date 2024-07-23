// Array is a variable that can hold many value.

// console.log(arrayofCars[0]);
// console.log(arrayofCars[1]);
// console.log(arrayofCars[2]);


// for(let i in arrayofCars){
     //      console.log(arrayofCars[i]);
     // }
     
// arrayofCars[0] = "Honda";
// arrayofCars[2] = "Lamboghini";
// console.log(arrayofCars);

// Function for array

// let size = arrayofCars.length;
let arrayofNumber = [10,20,30,40,50];
// pop and push
// let result = arrayofNumber.pop();
// let result2 = arrayofNumber.push(60);

//Shift and unshift
// arrayofNumber.shift(); // remove the first element of an array
// arrayofNumber.unshift(0); // add an element to the start of an array

//Splice
// arrayofNumber.splice(0,4);// delete elemet (start index, amount of element);
// arrayofNumber.splice(0,0,0,5,6,7,8); // add elements (start index, amount of element to delete,element to add...)

//slice // copy elements from an array to create a new array
// let new_array = arrayofNumber.slice(0,3);
// console.log(arrayofNumber);
// console.log(new_array);

//concat join or merge 2 or more arrays together.
let arrayofCarsOne = ["Toyota", "Audi", "Ford"];
let arrayofCarsTwo = ["Aston Martin", "Lambo"];
let arrayofCarsThree = ["Ferrari", "Honda", "BMW"];

let new_arrayofCars = arrayofCarsOne.concat(arrayofCarsTwo, arrayofCarsThree);
console.log(new_arrayofCars);

