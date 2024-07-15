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
>**Remembers : Javascript is a dynamic language, unlike others language like Java, C, C++, C#. You don't need to specify the datatype when declaring a variable which make it easy to write code but it can also be troublesome since it allow you to make mistakes easily.**
>

Example : 
```
let ageOne = "12";
let ageTwo = 23;

let totalage = ageOne + ageTwo;
console.log(totalage); // 1223
```
### > Type Casting <

To convert datatypes you can use a method call **Type-Casting**.

- Number to String
```
let x = 12;

