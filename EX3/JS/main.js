let nbr1input = document.getElementById("nbr");
let nbr2input = document.getElementById("nbr2");
let btn = document.getElementById("btn");
let btn2 = document.getElementById("add");
let container = document.getElementById("container");

let racine = () => {
    let value =nbr1input.value;
    return Math.sqrt(value);
};

let carre = () => {
    let valueNb = nbr1input.value;
    return valueNb * valueNb;
};

let somme = ()=>{
    let value1 = parseFloat(nbr1input.value);
    let value2 = parseFloat(nbr2input.value);
    return (value1 + value2)
    
} 

let afficher = () => {
    let valeur = nbr1input.value;
    let racineCarre = racine();
    let carreNb = carre();

    if (valeur === "") {
        alert(" Enter a number ");
        return;
    }

    let ul = document.createElement("ul");
    let li = document.createElement("li");
    li.textContent = ` Votre Nombre = ${valeur} | Racine : ${racineCarre} | Carré : ${carreNb}`;
    ul.appendChild(li);
    container.appendChild(ul);
    viderChamps()   
};

let afficherSomme = () => {

    let valeur = nbr1input.value;
    let valeur2 = nbr2input.value;
    let sumNbs = somme() 
    if ( valeur === "" || valeur2 === "" ) {
        alert(" Enter a number ");
        return;
    }

    let ul = document.createElement("ul");
    let li = document.createElement("li");
    li.textContent = ` Votre 1 Nombre =  ${valeur} |Votre 2  Nombre= ${valeur2} | Somme : ${sumNbs}`;
    ul.appendChild(li);
    container.appendChild(ul);
    viderChamps()                 

};

let viderChamps =()=>{
    
    nbr1input.value=""
    nbr2input.value="" 
}

let nbPremier = (nb) => {

    if (nb < 2) {
        console.log(`Votre nombre : ${nb} n'est pas un nombre premier`);
        return;
    }

    for (let i = 2; i < nb ; i++) {
        if (nb % i === 0) {
            console.log(`Votre nombre : ${nb} n'est pas un nombre premier`);
            return;
        }
    }
    
    console.log(`Votre nombre : ${nb} est un nombre premier`);
};


btn.addEventListener("click", afficher);
btn2.addEventListener("click", afficherSomme);
nbPremier(2); 
nbPremier(4);  
nbPremier(17);
nbPremier(1);
nbPremier(11);  

