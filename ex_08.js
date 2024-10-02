// Your code here...
function houseEnergyScore(housingList){
    return housingList.sort((a, b) => a[1] - b[1]);
   }
  // This lines will display the result for you
  if (typeof houseEnergyScore === "function") {
      const scores = [["Hutch", 30],["Loft", 345], ["Castle", 560], ["Igloo", 12], ["Villa", 232], ["Flat", 212]];
      const result = houseEnergyScore(scores);
      displayResult(result);
  }