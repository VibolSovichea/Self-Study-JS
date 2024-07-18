// Conditional Statement : if-statements, if-else, switch;

// if(10 > 5){
//      console.log("is True");
// }
// if(10 > 13){
//      console.log("is impossible");
// }
// if(10 == 10){
//      console.log("is false");
// }

// if(false){
//      console.log("panha is handsome");
// }else{
//      console.log("panha still handsome");
// }
// if(num == 10){
     //      console.log("ok");
     // }
// else if(num == 100){
//      console.log("so ?")
// }
// else{
     //      console.log("okidokie");
     // }

let readline = require("readline-sync");

let location = readline.question("Enter location : ");
let result;

switch(location){
     case "phnom penh":
          result = "welcome to phnom penh";
          break;
     case "sr":
          result = "welcome to sr";
          break;
     case "btb":
          result = "welcome to btb";
          break;
     default:
          result = "error";
          break;
}
console.log(result);

