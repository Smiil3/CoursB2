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




