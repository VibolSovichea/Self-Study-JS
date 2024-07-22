# ARRAYS

Array is a variable that can hold multiple value. You can access the value but referring to an index.

**To creat an array :**
```
const array_name = [item1, item2, ...];
```
You can also :
```
let array_name = new Array(item1, item2, ...);
```

**To Access Array's elements :**

You can access array's elements via index, index always start with 0.
```
let cars = ["BMW", "Lamborghini", "Ferrari", "Ford"];

// Array index start from 0.

console.log(cars[0]); // BMW
console.log(cars[1]); // Lamborghini
console.log(cars[2]); // Ferrari
console.log(cars[3]); // Ford
```
You can also use loops :
```
let cars = ["BMW", "Lamborghini", "Ferrari", "Ford"];

for(let i = 0; i < cars.length; i++){
     console.log(cars[i]);
}
```

**Modify Array's elements :**

you can modify array's elements by accessing the element and asign a new value to it.
```
let cars = ["BMW", "Lamborghini", "Ferrari", "Ford"];

cars[1] = "Toyota"; // Lamborghini is replace by Toyota.
```

## Array Methods

### Length method
you can use length method to indentify the size of an array. 
```
let cars = ["BMW", "Lamborghini", "Ferrari", "Ford"];
let arraySize = cars.length; // 4
```

### Pop and Push method
- pop() is use to remove the last element of an array and it return the element that was "popped out".
```
let cars = ["BMW", "Lamborghini", "Ferrari", "Ford"];
cars.pop();
```
- Push() is use to remove the first element of an array and it return the element that was "pushed out".
```
let cars = ["BMW", "Lamborghini", "Ferrari", "Ford"];
cars.push();
```

### Shift and Unshift method
- Shift() is use to remove the first element of an array and "shifts" all other elements to a lower index.
```
let cars = ["BMW", "Lamborghini", "Ferrari", "Ford"];
cars.shift();
```
- Unshift() is use to add an element to the begining of an array and shift all other elements to the next index.
```
let cars = ["BMW", "Lamborghini", "Ferrari", "Ford"];
cars.unshift("Nissan");
```
### Splice Method

you can use splice() to add or remove elements from an array. Splice method allow you to add or remove elements at a specific location in array.
```
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 2, "Lemon", "Kiwi");
```
- The first parameter (2) defines the position where new elements should be added (spliced in).
- The second parameter (2) defines how many elements should be removed.
- The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
- Splice also return the removed items/elements.

### Slice Method
Slice is a method that allow us to slice out elements of an existing array to create a new array. When slicing elements of an array, those elements aren't actually removed from the array. The method act more as copy elements from an existing array to create a new one.
```
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(3); // return Orange.
```

- When the slice() method is given two arguments, it selects array elements from the start argument, and up to (but not included) the end argument:
```
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3); // return Orange and Lemon.
```

### Concat Method
Concat() is an array method in javascript that allow use to merge 2 or more arrays together.
```
let japaneseCars = ["Toyota", "Honda", "Nissan", "Lexus"];
let italianCars = ["Lamborghini", "Ferrari", "Masaratti"];

let allCars = japaneseCars.concat(italianCars);
```






