const dataset = [9,10,8,2,23,25,30,12,23,9,4,5,18,19,20,21,22,9,8,15,11,28,3,9.9];

let sortAscending = (array) => {
    let temp;
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length; j++){
            if(array[i] < array[j]){
                temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }    
    }
    return array;
}

let sortDescending = (array) => {
    let temp;
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length; j++){
            if(array[i] > array[j]){
                temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }    
    }
    return array;
}

let findValue = (array, target) => {
    let index = -1;
    for(let i = 0; i < array.length; i++){
        if(array[i] == target){
            index = i;
        }
    }
    if(index != -1){
     return (`The value is found at index ${index}`);
    }
    else{return("The value does not exist in the array")};
}

let findMean = (array) => {
    let total = 0.0;
    let size = array.length;
    for(let i of array){
          total += array[i];
    }
    return (total / size);
}

let findModes = (array) => {
    const frequencyMap = {};
    let maxFrequency = 0;
    let modes = [];
  
    // Count occurrences of each element
    for (const num of array) {
      frequencyMap[num] = (frequencyMap[num] || 0) + 1;
      maxFrequency = Math.max(maxFrequency, frequencyMap[num]);
    }
  
    // Find all modes
    for (const num in frequencyMap) {
      if (frequencyMap[num] === maxFrequency) {
        modes.push(Number(num));
      }
    }
  
    return (`Mode of the dataset : [${modes}]`);
} 

let findMode = (array) =>{
     let sortedArray = sortAscending(array);
     let mode = sortedArray[0];
     let count  = 1;
     let maxCount = 0;

     for(let i = 1; i < sortedArray.length; i++){
          if(sortedArray[i] === sortedArray[i - 1]){
               count++;
          }else{
               if(count > maxCount){
                    maxCount = count;
                    mode = sortedArray[i - 1];
               }
               count = 1;
          }
     }

     if(count > maxCount){
          maxCount = count;
          mode = sortedArray[sortedArray.length - 1];
     }

     return (`Mode of the dataset : [${mode}]`);
}

let findMedian = (data) => {
    const sortedData = data.slice().sort((a, b) => a - b);
    const middleIndex = Math.floor(sortedData.length / 2);
  
    if (sortedData.length % 2 === 0) {
      return (sortedData[middleIndex - 1] + sortedData[middleIndex]) / 2;
    } else {
      return sortedData[middleIndex];   
    }
  }

console.log("Before : " + dataset);
console.log("After : " + sortAscending(dataset));

console.log(findMode(dataset));
console.log("Median : " + findMedian(dataset));