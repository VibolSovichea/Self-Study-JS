# Variables

**Imagine variable as an object, it has name, types and value.**

### > Declaration <

*Declaration* is basically create an **empty variable**.
While *Initialization* is to create a **variable with value**.

A variable is made up of :
```
Funciton-scope VariableName = Value;
```
- Function-scope are keywords use to declare variables ( var, let, const ).
- VariableName : Name you use to identify the variable.
- Value : can be Numbers, Strings, Boolean.

Example :
```
let name = "Vannda"; // String
let age  = 24; // Number
let hasGirlFriend = true; // Boolean
```
### > Data Types <

The most common data types in javascript are : 

- **Number** -> ( Integers, Floats ) 
- **String** -> ( Texts, Characters )
- **Boolean** -> ( True, False )
- **Object** -> ( Array, Date... )
- **BigInt** -> ( Long Integer )

>
>***Remembers* : Javascript is a dynamic language, unlike others language like Java, C, C++, C#. You don't need to specify the datatype when declaring a variable which make it easy to write code but it can also be troublesome since it allow you to make mistakes easily.**
>

Example : 
```
let ageOne = "12";
let ageTwo = 23;

let totalage = ageOne + ageTwo;
console.log(totalage); // 1223
```
### > Type Conversion <

Just like many other languages, Javascript allow you to covert datatypes using different methods.

There are 2 types of Type Conversion including : 

1. **Implicit type conversion**.
2. **Explicit type conversion**.

#### **Implicit Type Conversion**
In JavaScript, implicit type conversion, also known as coercion, happens when **the engine automatically converts a value from one data type to another**. While convenient, it can sometimes lead to unexpected results if you're not familiar with the rules.

1. Converting String to Numbers :

When attempting to convert String to a number, you must add the plus symbol (+) in front of the string. That plus symbol is called **Unary Plus**. Also the string must be a valid number, otherwise, it will return **NaN** (Not a Number Error*).

```
let stringNumber = "15";
let newNumber = +stringNumber + 5;
console.log(newNumber); // 20
```

2. Converting Number to String : 

When attempting to convert number to string, it can be done simply but adding string value to the number. **The String value must be a number**.
```
let number = 15;
let stringofNumber = 15 + "6";
console.log(stringofNumber); // 156 (String)
```

3. Converting String, Number to Boolean

JavaScript treats certain values as truthy or falsy for boolean operations. Truthy values like non-zero numbers, strings (except empty ones), and true are converted to true. Falsy values like zero, null, undefined, and empty strings are converted to false.

```
let num = 0;
let str = "";

console.log(num); //false
console.log(str); //false
```

**Notes** : 
>
>- Converting string to number using implicit method can be confusing, so ***it is not recommended***.
>

#### **Explicit Type Conversion**

In JavaScript, explicit type conversion, also known as type casting, allows you to manually control how a value is converted from one data type to another. This is done using built-in functions like Number(), String(), and Boolean(). Unlike implicit conversion, which happens automatically, explicit conversion gives you more control and predictability over your code's behavior.

1. Converting to Numbers:

**Number() function** : This function attempts to convert the provided value to a number.
```
let str = "25";
let num = Number(str); // num will be 25 (string converted to number)

let bool = true;
num = Number(bool); // num will be 1 (truthy boolean converted to 1)
```

2. Converting to Strings:

**String() function** : This function converts the provided value to a string.
```
let num = 30;
let str = String(num); // str will be "30" (number converted to string)

let bool = false;
str = String(bool); // str will be "false" (boolean converted to string)
```

3. Converting to Booleans:

**Boolean() function** : This function converts the provided value to a true or false boolean value based on JavaScript's truthy and falsy values.
```
let num = 0;
let bool = Boolean(num); // bool will be false (0 is falsy)

let str = "";
bool = Boolean(str); // bool will be false (empty string is falsy)

let obj = {};
bool = Boolean(obj); // bool will be true (objects are truthy)

```