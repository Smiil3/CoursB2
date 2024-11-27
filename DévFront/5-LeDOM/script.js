/* Toutes les variables */
let dateJour = new Date(Date.now());
let dateJourFr = dateJour.toLocaleDateString('fr-FR')
let h2 = document.querySelector("h2");
let li = document.querySelector("#listeCourses li");
h2.innerHTML = h2.innerHTML + ` : ${dateJourFr}`;

let myInput = document.querySelector("#myInput");
let btn = document.querySelector(".btn");
let liste = document.querySelector("#listeCourses");

btn.addEventListener('click', ()=>{
addProduct(myInput.value);
})
myInput.addEventListener('keydown', (e)=>{
    if (e.key === "Enter") {
    addProduct(myInput.value);
    }
    })

/* Tous les évènements */
li.addEventListener('click', ()=>{
  // Mettre ici le code pour le TP13
  li.classList.toggle("itemCheck");
})
li.addEventListener('dblclick', ()=>{
  li.remove();
})


function addProduct(value){
    if (value==="") {
        alert('Erreur de saisie')
    } else {
        alert("Produit ajouté   ")
        let newLi = document.createElement("li");
        newLi.innerHTML = value;
        newLi.addEventListener('click', ()=>{
            // Mettre ici le code pour le TP13
            newLi.classList.toggle("itemCheck");    
          })
        newLi.addEventListener('dblclick', ()=>{
            newLi.remove();
          })  

        liste.appendChild(newLi);
        myInput.value = "";
    }
}

/* Les fonctions */
// A voir plus tard

