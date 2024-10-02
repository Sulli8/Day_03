function fillbus(stopBus, busseat){
	let result = []
  
  for(let i = 0; i < stopBus.length; i++){
     busseat = busseat - stopBus[i]
     if(busseat < stopBus[i]){
     		result.push(stopBus[i-1])
     }
  }
  return console.log(result[0])
}


fillbus([1,3,10,1],12)