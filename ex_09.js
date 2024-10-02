// Write your code here...
function addHousing(logement_card, demand_logement, quantity ){
    let array = [[demand_logement, quantity]]
      array.forEach(([key,value]) => {
       logement_card.set(key,value)
      })
      return logement_card
    }
    let housingList = new Map();
    addHousing(housingList, "Flat", 4)
    addHousing(housingList, "Log", 3)
    addHousing(housingList, "Hutch", 2)
    
    displayResult(housingList);