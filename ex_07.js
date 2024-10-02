// You have access to the "adresses" variable, you can use it to test your function
// console.log the found addresses for them to be displayed !
// Write your function here... 

function createCity(country,city){
    if(country == null || city == null){
      return "Failure to get"+"city or country"
    }
    country.push([city,[]])
    return country
  }
  
  function createHousing(country, city,logement){
   if(country == null || city == null){
      return "Failure to get"+"city or country or logement"
    }
      for(let i = 0; i < country.length;i++){
        for(let j = 0; j < country.length;j++){
         if(country[i][j] == city){
            country[i][j+1].push(logement)
         }
          }
      }
    return country
  }
  
  function addCharacteristics(country, city, housing, surface, bth, red, avenue){
     if(country == null || city == null || housing 
     == null || surface == null || bth == null || red == null || avenue == null ){
      return "Failure to get"+"city or country , housing, surface, bth, red or avenue"
    }
    for(let i = 0; i < country.length;i++){
        for(let j = 0; j < country.length;j++){
         if(country[i][j] == city){
            let array = country[i][j+1]
            for(let k = 0; k < array.length;k++){
                if(array[k] == housing){
                  array[k+1] = [surface, bth, red, avenue]
              }
            }
         }
          }
      }
    return country
  }
  
  function getCharacteristicsOfHousing(country, city, housing){
       for(let i = 0; i < country.length;i++){
        for(let j = 0; j < country.length;j++){
         if(country[i][j] == city){
            let array = country[i][j+1]
            for(let k = 0; k < array.length;k++){
                if(array[k] == housing){
                  return country
              }
            }
         }
          }
      }
  }
  
  let country = [];
  country = createCity(country , "Nantes");
  country = createHousing(country, "Nantes", "Apartment1");
  console.log(country)
  addCharacteristics(country , "Nantes", "Apartment1", "100m2", "2 bathrooms",
  "Red paint", "14 rue Arthur III"); 
  
  console.log(getCharacteristicsOfHousing(country, "Nantes", "Apartment1"));
  
  addresses = [["45 avenue des tulipes", "92130 Issy-les-Moulineaux"], ["95 avenue parmentier", "75011 Paris"], ["24 Rue Pasteur", "92400 Courbevoie"], ["Champ de Mars, 5 Av. Anatole France", "75007 Paris"], ["Pl. Louis-Armand", "75571 Paris"]];
  