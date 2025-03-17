let button =document.getElementById("btn")
let input =document.getElementById("input")
let list =document.getElementById("list")
let sortBtn =document.getElementById("srt")
let removeBtn=document.getElementById("remove")
const tableauJS=[]


let add = () => {

// Question 3 :

    let phrase = input.value;
    if(phrase===""){
        return
// pour n ajouter pas une ligne vide 
    }

    let ul = document.createElement("ul");
    let li = document.createElement("li");
    li.innerText = phrase;
    ul.appendChild(li);
    list.appendChild(ul);

// Question 2
//  ajouter la phrase dans la console

    tableauJS.push(phrase);
    console.log(tableauJS);
    input.value = ""; 

};

button.addEventListener("click",add);

// Question 4
let sort = () => {

    tableauJS.sort(); 
    list.innerHTML = "";
    let ul = document.createElement("ul");
    for (let phrase of tableauJS) {
        let li = document.createElement("li");
        li.innerText = phrase;
        ul.appendChild(li);
        list.appendChild(ul);
    }
};
sortBtn.addEventListener("click", sort);



// Question 5 
let remove = () => {
    
    let list = document.getElementById("list");
    list.lastChild.remove();
};
removeBtn.addEventListener("click",remove);
