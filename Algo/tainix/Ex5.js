// NE PAS TOUCHER
const distance = 681068;
const shipSize = 'L';
const consumptions = ['XS:2.3', 'S:6.8', 'M:10.3', 'L:15.8', 'XL:21.9'];
const crew = [167, 166, 186, 161, 164, 185, 156, 194, 185, 185, 180, 175, 169, 179, 187, 195];
const safetyIndex = 6;
// NE PAS TOUCHER

const calcFuel = function (consumptions, shipSize) {
    let ourConsumption
    for (let consumption of consumptions) {
       consumption.split(":").includes(shipSize) ? ourConsumption=consumption.split(":")[1] : "" 
    }
    return Math.ceil((distance/10000)*ourConsumption)
}

const calcFood = function (distance, crew) {
    crewSize = 0
    for(let size of crew) {
        crewSize+=size
    }
    return Math.ceil((distance/10000)* (crewSize/10))
}

const calcEquipement = function(safetyIndex, crew) {
    let equipement = 0
    for (let size of crew) {
        size<180 ? equipement+=40 : equipement+=45
    }
    return safetyIndex *equipement
    
}

const result = function(distance, shipSize, consumptions, crew, safetyIndex) {
    return `${calcFuel(consumptions, shipSize)}_${calcFood(distance, crew)}_${calcEquipement(safetyIndex, crew)}`
}
console.log(result(distance, shipSize, consumptions, crew, safetyIndex))
