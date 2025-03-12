console.log("Ex1")
// NE PAS TOUCHER
const shipsFirstPeriod = 8;
const shipsSecondPeriod = 10;
const shipsThirdPeriod = 3;
const shipsMax = 17;
// NE PAS TOUCHER

let totalShips=shipsFirstPeriod + shipsSecondPeriod + shipsThirdPeriod
if ( totalShips<= shipsMax) {
    console.log("OK :", shipsMax-totalShips)
} else {
    console.log("KO :", totalShips-shipsMax)
}




console.log("Ex2")
// NE PAS TOUCHER
const sizes = [1, 7, 1, 8, 6, 4, 9, 6, 8, 9, 7, 4, 5, 9, 6, 10];
const maxCapacity = 88;
// NE PAS TOUCHER

let currentCapacity = 0;
let count = 0;

for (let i = 0; i < sizes.length; i++) {
    if (currentCapacity + sizes[i] <= maxCapacity) {
        currentCapacity += sizes[i];
        count++;
    }
}

console.log(`${count}_${maxCapacity - currentCapacity}`);


console.log("Ex3")
// NE PAS TOUCHER
const ships = ['XL', 'M', 'XS', 'M', 'XL', 'XL', 'M', 'L', 'M', 'L', 'XS', 'XL', 'XL', 'S', 'L', 'XL', 'M', 'XS', 'M', 'M', 'XS', 'XS', 'XL', 'XS', 'XS', 'XL', 'M', 'XS', 'XL', 'M', 'XL', 'XL', 'M', 'L', 'XL', 'XL', 'S', 'XS', 'XS', 'L', 'XS', 'L', 'L', 'S', 'L', 'XL', 'M', 'S', 'L', 'XL', 'S', 'S', 'XL', 'M', 'L', 'S', 'M', 'L', 'XS', 'S', 'XS', 'M', 'L', 'L', 'L', 'M', 'S', 'S', 'M', 'L', 'XL', 'XS', 'L', 'S', 'L', 'L', 'XL', 'XL', 'M', 'XS', 'M', 'XS', 'M', 'XS', 'L', 'L', 'M', 'L', 'M', 'S', 'S', 'L', 'L'];
// NE PAS TOUCHER

let counts = {};
let maxSize = '';
let maxCount = 0;

for (let ship of ships) {
    counts[ship] ? counts[ship] += 1 : counts[ship]=1;
    if (counts[ship] > maxCount) {
        maxSize = ship;
        maxCount = counts[ship];
    }
}

console.log(`${maxSize}_${maxCount}`);

console.log("Ex4")
// NE PAS TOUCHER
const planets = ['MEZ_71_3_15', 'TWD_3_4_96', 'XNR_82_2_66', 'IQC_96_3_69', 'HIM_97_2_83', 'GOV_3_9_36', 'MTO_53_3_37', 'XTC_19_1_57', 'DBM_96_4_92', 'JVS_86_9_37', 'JSK_56_2_99', 'GLK_39_7_79', 'JDA_51_8_84', 'NBT_15_1_92', 'RDG_99_6_16', 'JXM_10_7_19', 'KZB_93_9_45', 'IAT_9_9_63', 'PQZ_78_8_36', 'OBM_19_6_48'];
const safetyLevelMin = 3;
const safetyLevelMax = 9;
// NE PAS TOUCHER

const calcSafetyLevel = function(planet) {
    [planetCode, temp, size, distanceForCalc ] = planet.split("_")
    return [planetCode, (temp*size)/distanceForCalc]
} 

let notSafePlanets = []
for (let i = 0; i < planets.length; i++) {
    let [planetCode, result] = calcSafetyLevel(planets[i])
    if (!(result >= safetyLevelMin && result <= safetyLevelMax)) {
        notSafePlanets.push(planetCode)
    }
}
console.log(notSafePlanets.join("_"))


console.log("Ex5")
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
