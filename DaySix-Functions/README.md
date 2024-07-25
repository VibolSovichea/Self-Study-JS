# FUNCTIONS
***Function is a block of code designed to perform a particular task and also reusable.***

## Declaration and Calling a Function

A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().

Syntax : 
```
function function_name (parameters) {
     // code to be executed.
}
```

To use a function, you can do that by calling the funciton and fill in the parameters if needed.

Example :
```
function happybirthday(){
     console.log("Happy birthda");
}

// call the function
happybirthday();
```

### Return Keyword

Every functions have a return value, it can be string numbers or boolean value. Return function is also use to notify the programmer wether there is any error.

```
function add (numOne, numTwo){
     return numOne + numTwo;
}

let result = add(5,7); // 12
```

### Global Variable vs Local Variable

Global variable is a variable that is declared outside a specific function and can be use/access anywhere inside a program.

Local variable is a variable that is declared inside a function and can be accessed in the specific function.

## Other ways to create a function.

### Function Expression
A function can also be defined using a function expression. A function expression can be stored in a variable.

Syntax :
```
const variableName = function(parameters) {
 // function body
};
```

Example :
```
const greet = function(name) {
 console.log("Hello, " + name + "!");
};
// Calling the function
greet("Bob");
```

### Arrow Function
Arrow functions provide a shorter syntax for writing function expressions. They are always anonymous and change the way this binds in functions.

Syntax :
```
const functionName = (parameters) => {
 // function body
};
```

Example :
```
const greet = (name) => {
 console.log("Hello, " + name + "!");
};
// Calling the function
greet("Charlie");
```

