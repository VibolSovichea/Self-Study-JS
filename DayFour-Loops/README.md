# Loops

Loop is use to execute a block of code multiple times. There are different loop statements that can be use including **For Loop**, **For in Loop**, **For of Loop**, **While Loop** and **Do While Loop**.

***
### For Loop

For loop is use when you know the amount of time a block of code or a process needed to be executed.

Syntax :
```
for (expression 1; expression 2; expression 3) {
  // code block to be executed
}
```
- **Expression 1** is executed (one time) before the execution of the code block.
- **Expression 2** defines the condition for executing the code block.
- **Expression 3** is executed (every time) after the code block has been executed.

Example :
```
// print "penny!" 5 times.
for(let i = 0; i < 5; i++){
     console.log("Penny!");
}
```

### For In

for-in is similar to the for-loop but most commonly use with array or object. Instead of setting the amount of time it needed to loop, For in just loop through the size of an array or object.

Syntax :
```
for(variable in array){
     // code to be executed
}
```

Example :
```
let numberArray = [12,51,25,45];
let total = 0;

for(let x in numberArray){
     total += numberArray[x]; // total = 133;
}
```

### While Loop

While loop is use when you don't exactly know how many time it needed to loop but base on specific condion.

Syntax :
```
while(condition){
     // code to be executed
}
```

Example :
```
let i = 0;
while(i < 5){
     console.log("Hello");
     i++;
}
```
In addition to while loop, you can also use **do-while loop**. It is basically the same as while loop but it execute the block of code first before checking the condition.

Syntax :
```
do{
     // code to be executed
}while(condition);
```

Example :
```
let i = 0;
do{
     console.log("Hello!");
     i++;
}while(i < 10);