let div = document.getElementById("div");
let nom = document.getElementById("name");
let age = document.getElementById("age");
let city = document.getElementById("city");
let btnAdd = document.getElementById("btnAdd");



class Personne {

    constructor(nom, age, ville){
        this.nom = nom;
        this.age = age;
        this.ville = ville;
    }
    sePresenter(){
        console.log("je suis "+ this.nom + " ,j'ai " + this.age + " ,j'habite a " + this.ville + " ."); 
    }

}

const p1 = new Personne("Youssef","21","FES");

const tab =[
    new Personne("Youssef","21","FES"),
    new Personne("Sara", "25", "CASABLANCA"),
    new Personne("Omar", "30", "RABAT"),
    new Personne("Fatima", "22", "TANGER"),
    new Personne("Ali", "28", "MARRAKECH"),
    new Personne("Khadija", "26", "AGADIR"),
    new Personne("Hassan", "23", "MEKNES"),
    new Personne("Laila", "24", "OUJDA"),
    new Personne("Laila", "24", "OUJDA"),
    new Personne("Laila", "24", "OUJDA"),
    new Personne("Mohamed", "29", "SAFI")
];



// let ajouter =()=>{

//     let ul = document.createElement("ul")
//     let liName = document.createElement("li")
//     let liAge = document.createElement("li")
//     for (let i = 0; i < tab.length; i++) {
//             liName = tab[i].ville.;
//             liAge = tab[i].age;
//     }
//     ul.appendChild(liName)
//     ul.appendChild(liAge)
//     div.appendChild(ul)

// }

afficher = () => {
    div.innerHTML = ""; 
    let ul = document.createElement("ul");

    for (let i = 0; i < tab.length; i++) {
        let li = document.createElement("li");
        li.textContent = tab[i].nom + " (" + tab[i].age + " ans, " + tab[i].ville + ")";
        ul.appendChild(li);
    }
    div.appendChild(ul);
};

let add = () => {
    let nameVal = nom.value.trim();
    let ageVal = age.value.trim();
    let cityVal = city.value.trim();

    if (nameVal === "" || ageVal === "" || cityVal === "") {
        return;
    }

    let newPerson = new Personne(nameVal, ageVal, cityVal);
    tab.push(newPerson); 
    afficher(); 

    nom.value = "";
    age.value = "";
    city.value = "";
};

btnAdd.addEventListener("click", add);

afficher();
tab[0].sePresenter(); 
console.log(tab);







