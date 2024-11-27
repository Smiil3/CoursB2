const select = document.querySelector(".sortGen")
select.addEventListener("change", async (event) => {
    generation = event.target.value
    data = await getData(generation);
    updateCards(data)
  });
let filtreTypeGlobal = "";
  const sortSelect = document.querySelector(".sortSelect")
sortSelect.addEventListener("change", async (event) => {
    let sortValue = event.target.value
    data = await getData(generation)
    
    updateCards(await sortPokemon(filterType(data, filtreTypeGlobal), sortValue))
  });

async function sortPokemon(data, sortValue) {
    let newData;
    switch (sortValue) {
        case "type":
            newData = data.sort( (a,b) => {
                let typeA = a.apiTypes[1] ? a.apiTypes[1].name : a.apiTypes[0].name
                let typeB = b.apiTypes[1] ? b.apiTypes[1].name : b.apiTypes[0].name
                return typeA.localeCompare(typeB);
            })
            break;
        case "name":
            newData = data.sort( (a,b) => {
                let typeA = a.name
                let typeB = b.name
                return typeA.localeCompare(typeB);
            })
            break;
        case "hp":
            newData = data.sort( (a,b) => {
                let typeA = a.stats.HP
                let typeB = b.stats.HP
                return typeA-typeB;
            })
            break;
        case "attack":
            newData = data.sort( (a,b) => {
                let typeA = a.stats.attack
                let typeB = b.stats.attack
                return typeA-typeB;
            })
            break;
        case "defense":
            newData = data.sort( (a,b) => {
                let typeA = a.stats.defense
                let typeB = b.stats.defense
                return typeA-typeB;
            })
            break;
        case "speed":
            newData = data.sort( (a,b) => {
                let typeA = a.stats.speed
                let typeB = b.stats.speed
                return typeA-typeB;
            })
            break;
        default:
            newData = data
            break;
    }
    return newData
}

const main = document.querySelector('main')

//Default One
let generation = 1
let data = await getData(generation);
updateCards(data)

async function getTypes() {
    const response = await fetch(`https://pokebuildapi.fr/api/v1/types`)
    return await response.json() 
}
const typesDiv = document.querySelector('#types')
let allTypes = await getTypes()
allTypes.push({image: "https://cdn-icons-png.flaticon.com/512/9068/9068678.png", name: "Fermer"})
allTypes.forEach(element => {
    const div = document.createElement("div")
    div.innerHTML = `<img src="${element.image}" alt="Filtre ${element.image}">
                    <p>${element.name}</p>`
    if (element.name != "Fermer"){
        div.addEventListener("click", async ()=> {
            updateCards(filterType(await getData(generation), element.name))
            filtreTypeGlobal = element.name
        })
    } else {
        div.addEventListener("click", async ()=> {
            updateCards(filterType(await getData(generation), ""))
            filtreTypeGlobal = ""
    })
    }
    typesDiv.appendChild(div)
})

function filterType(data, typee) {
    if (typee !="") {
        return data.filter(pokemon => pokemon.apiTypes[1] ? pokemon.apiTypes[1].name === typee : pokemon.apiTypes[0].name === typee)
    }
    return data
    
}

async function getData(filtre) {
        const response = await fetch(`https://pokebuildapi.fr/api/v1/pokemon/generation/${filtre}`)
        const data = await response.json()
        return data;
    //console.log(generation)
}


function updateCards(givenData) {
    main.innerHTML = ""
    givenData.forEach(element => {
        //console.log(element)
        putSomeColor(createCard(element), element.apiTypes[1] ? element.apiTypes[1].name : element.apiTypes[0].name)
    });
}

function createCard(element) {
    const article = document.createElement("article")
    article.innerHTML = `<figure>
          <picture>
            <img src="${element.image}" alt="Image ${element.name}" />
          </picture>
          <figcaption>
            <span class="types">${element.apiTypes[1] ? element.apiTypes[1].name : element.apiTypes[0].name}</span>
            <h2>${element.name}</h2>
            <ol>
              <li>Points de vie : ${element.stats.HP}</li>
              <li>Attaque : ${element.stats.attack}</li>
              <li>Défense : ${element.stats.defense}</li>
              <li>Attaque spécial : ${element.stats.special_attack}</li>
              <li>Vitesse : ${element.stats.speed}</li>
            </ol>
          </figcaption>
        </figure>`
    main.appendChild(article)
    return article
}

function putSomeColor(element, type) {
    switch (type) {
        case "Plante":
            element.style.backgroundColor = "#008000"; // Vert
            element.style.borderColor = "#008000";
            break;
        case "Feu":
            element.style.backgroundColor = "#FF0000"; // Rouge
            element.style.borderColor = "#FF0000";
            break;
        case "Eau":
            element.style.backgroundColor = "#0000FF"; // Bleu
            element.style.borderColor = "#0000FF";
            break;
        case "Poison":
            element.style.backgroundColor = "#800080"; // Violet
            element.style.borderColor = "#800080";
            break;
        case "Insecte":
            element.style.backgroundColor = "#90EE90"; // Vert clair
            element.style.borderColor = "#90EE90";
            break;
        case "Vol":
            element.style.backgroundColor = "#ADD8E6"; // Bleu clair
            element.style.borderColor = "#ADD8E6";
            break;
        case "Électrik":
            element.style.backgroundColor = "#FFFF00"; // Jaune
            element.style.borderColor = "#FFFF00";
            break;
        case "Sol":
            element.style.backgroundColor = "#8B4513"; // Brun
            element.style.borderColor = "#8B4513";
            break;
        case "Fée":
            element.style.backgroundColor = "#FFC0CB"; // Rose
            element.style.borderColor = "#FFC0CB";
            break;
        case "Combat":
            element.style.backgroundColor = "#FFA500"; // Orange
            element.style.borderColor = "#FFA500";
            break;
        case "Psy":
            element.style.backgroundColor = "#FF1493"; // Rose foncé
            element.style.borderColor = "#FF1493";
            break;
        case "Glace":
            element.style.backgroundColor = "#E0FFFF"; // Cyan clair
            element.style.borderColor = "#E0FFFF";
            break;
        case "Roche":
            element.style.backgroundColor = "#F5F5DC"; // Beige
            element.style.borderColor = "#F5F5DC";
            break;
        case "Spectre":
            element.style.backgroundColor = "#4B0082"; // Violet foncé
            element.style.borderColor = "#4B0082";
            break;
        case "Dragon":
            element.style.backgroundColor = "#6A5ACD"; // Indigo
            element.style.borderColor = "#6A5ACD";
            break;
        case "Ténèbres":
            element.style.backgroundColor = "#000000"; // Noir
            element.style.borderColor = "#000000";
            break;
        case "Acier":
            element.style.backgroundColor = "#C0C0C0"; // Argent
            element.style.borderColor = "#C0C0C0";
            break;
    }    
    
}

