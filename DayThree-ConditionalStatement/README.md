# Conditional Statements

Think of Condtional Statements as pieces of code that get executed base on specific condition.

**Statement** : refere to a command given to the computer by the programmer.
```
console.log("Hello World"); // a command to tell computer to print "Hello World" on the console.
```
***
### If - Conditional Statement
Syntax : 
```
if(condition){
     // your code to be executed here! also called body.
}
```
If-conditional statement is one of the most commonly use condition statement due to its simplicity. If will execute the body when the set condition is true.

Example :
```
let age = 20;
if(age > 18){
     console.log("You are an adult");
}
```

You can also use multiple if-statements in a program.
```
let age = 20;
if(age > 18){
     console.log("You are an adult");
}
if(age < 21){
     console.log("You are not yet considered an adult in America");
}
```

### If - Else Conditional Statement
Syntax : 
```
if(condition){
     // your code to be executed here! also called body.
}
else {
     // if the condition is not true execute here instead.
}
```

Similar to the **If-Statement**, it is use to execute statements base on specific condition. But if you want to execute something else when the set condition is not true, you can use **else** to execute the alternative.

Example :
```
let age = 20;
if(age >= 18){
     console.log("You are an adult");
}
else{
     console.log("You are a child");
}
```

### Switch Conditional Statement
Syntax :
```
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
    break;
}
```
Switch Conditional statement is use to **execute specific code block or statement**. This is how it works:

- The switch expression is evaluated once.
- The value of the expression is compared with the values of each case.
- If there is a match, the associated block of code is executed.
- If there is no match, the default code block is executed.

**Bonus** : When JavaScript reaches a **break** keyword, it breaks out of the switch block.
This will stop the execution inside the switch block.

Example : 
```
let operator = "+";
switch(operator){
     case "+":
          console.log("addition");
     case "-":
          console.log("subtraction");
     case "*":
          console.log("multiplication");
     case "/":
          console.log("division");
     default:
          break;
}
```

**Note :**
>
> Use if-statment when you only need to execute few blocks of code. Use switch when there are many cases or blocks of code to choose from base of one condition or expression. 
>

