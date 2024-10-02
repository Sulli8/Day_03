function getAngryDog(numberOfWoofs)
{
let character = ""
// Your code here
  for(let i = 0; i < numberOfWoofs;i ++){
  	character+="woof"
  }
  return character
}



//Some code to test your function output : (you can modify it but /!\ do not deliver it /!\ ). Only deliver your function
var result = getAngryDog(3);
displayResult(result);