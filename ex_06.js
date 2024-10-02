// You have access to the "adresses" variable, you can use it to test your function
// console.log the found addresses for them to be displayed !
// Write your function here... 
function displayAdresse(name_city){
    let adresse_depend_name_city = []
      for(let i = 0; i < addresses.length; i++){
        if(addresses[i][1].toLowerCase().includes(name_city.toLowerCase())){
            adresse_depend_name_city.push(addresses[i])
        }
      } 
     addresses.forEach(address => {
        console.log( address[0], address[1]);
    });
    }
    
    
    addresses = [["45 avenue des tulipes", "92130 Issy-les-Moulineaux"], ["95 avenue parmentier", "75011 Paris"], ["24 Rue Pasteur", "92400 Courbevoie"], ["Champ de Mars, 5 Av. Anatole France", "75007 Paris"], ["Pl. Louis-Armand", "75571 Paris"]];
    
    displayAdresse('Paris')