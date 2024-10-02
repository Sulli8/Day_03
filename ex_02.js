// Write your code here...

function findHousing(search, list) {
    let cpt = 0;
    while (cpt < list.length) {
        if (list[cpt] == search) { 
            return [cpt, list[cpt]]; 
        }
        cpt++;
    }
    return null; 
}


//Use console.log to debug you're code ! It is very useful


//Some code to display your function output: (you must modify it but /!\ do not deliver it /!\ ). Only deliver your function
displayResult(findHousing("Igloo", ["Flat", "House", "Hut", "House", "Igloo"]))
