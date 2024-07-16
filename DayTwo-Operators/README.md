# Operators

Operators are special symbols in JavaScript that perform operations on values (operands). These operations can be mathematical calculations, comparisons, logical manipulations, and more. By combining operators with variables and values, you can write programs that perform complex tasks.

There are many types of operators in JavaScript including : 

### > Arithmetic Operators <

Use to perform basic mathematical calculations like addition (+), subtraction (-), multiplication (*), division (/), remainder (%), and exponentiation (**).

```
let sum = 10 + 5; // result will be 15
let subtract = 20 - 7; // result will be 13
let multiply = 3 * 4; // result will be 12
let divide = 30 / 6; // result will be 5
let modulus = 11 % 3; // 11 divided by 3 leaves a remainder of 2
let power = 2 ** 3; // (2 raised to the power of 3 is 8)
```
There also additional operators including **Increment** and **Decrement** operators. These operator is quite special because the placement of the operators can give out different results.

- When placing the operator **after** the variable while **executing it**, the value of the variable **doesn't change until after executed**.

- But when placing the operator **before** the variable **while executing it**, the value **change before executed**.

```
let x = 10;
console.log(x++); // 10
console.log(++x); // 11

let y = 20;
console.log(y--); // 20
console.log(--y); // 19
```

### > Assignment Operators <

Use to assign values to variables. The basic assignment operator is =, but there are shorthand operators like += (add and assign), -= (subtract and assign), etc.

```
let x = 10;
x += 5; // x will now be 15 (10 + 5)
x -= 2; // x will now be 13 (15 - 2)
```

### > Comparison Operators <

Use to compare two values and return a boolean (true or false) based on the comparison. These include == (equal to), != (not equal to), === (strict equal to), !== (strict not equal to), < (less than), > (greater than), <= (less than or equal to), and >= (greater than or equal to).

```
console.log(10 == "10"); // true (type coercion converts "10" to a number)

console.log(10 === "10"); // false (strict comparison considers different types)
```

### > Logical Operators <

Combine Boolean expressions using && (AND), || (OR), and ! (NOT) to perform logical operations.

```
let a = true && false; // a will be false
let b = false || true; // b will be true
let c = !true; // c will be false
```

### > Other Operators <

1. **Ternary Operator**

Is a conditional Operator use as an alternative to the If-Statement.

```
let check = 10 > 5 ? "10 is greater" : "5 is greater"; 

// if true return "10 is greater", if false, return "5 is greater"
```

2. **Unary Operator**

Use to perform on one operand.

```
let yes = true;
console.log(!yes); // false

let age = 10;
console.log(typeof age); // numbers

let strNumber = "420";
console.log(+strNumber); // 420 as number
```

**Note** : 
>
> There are more operators in JavaScript including Bitwise operator, Comma Operators, etc. I haven't list those in the lesson is because they aren't commonly used.
>
