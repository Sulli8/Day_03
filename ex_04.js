// Write your code here...

function displayResult(arr){
    let capitalize = [];
        for(let i = 0; i  < arr.length;i++){
          let cap = arr[i].toUpperCase();
          capitalize.push(cap)
      }
      return capitalize
    }
    
    // Here is some code to test and display your function output:
    // (you must modify it to test out your code but /!\ do not deliver it /!\ ). Only deliver your function
    const result = ["CHANGE", "this", "array", "BY", "ThE", "RESULT", "oF", "youR", "FUNCTION", "TO", "test", "IT", "OUT"]
    displayResult(result)