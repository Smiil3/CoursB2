// NE PAS TOUCHER
const planets = ['MEZ_71_3_15', 'TWD_3_4_96', 'XNR_82_2_66', 'IQC_96_3_69', 'HIM_97_2_83', 'GOV_3_9_36', 'MTO_53_3_37', 'XTC_19_1_57', 'DBM_96_4_92', 'JVS_86_9_37', 'JSK_56_2_99', 'GLK_39_7_79', 'JDA_51_8_84', 'NBT_15_1_92', 'RDG_99_6_16', 'JXM_10_7_19', 'KZB_93_9_45', 'IAT_9_9_63', 'PQZ_78_8_36', 'OBM_19_6_48'];
const safetyLevelMin = 3;
const safetyLevelMax = 9;
// NE PAS TOUCHER

const calcSafetyLevel = function(planet) {
    [planetCode, temp, size, distance ] = planet.split("_")
    return [planetCode, (temp*size)/distance]
} 

let notSafePlanets = []
for (let i = 0; i < planets.length; i++) {
    let [planetCode, result] = calcSafetyLevel(planets[i])
    if (!(result >= safetyLevelMin && result <= safetyLevelMax)) {
        notSafePlanets.push(planetCode)
    }
}
console.log(notSafePlanets.join("_"))
