let container = document.getElementById("container")
let task = document.getElementById("task")
let btnAdd = document.getElementById("btnAdd")
let btnDelete = document.getElementById("delete")


// question 1   
// let addTasks =()=>{
//     let ul =document.createElement("ul");
//     let li =document.createElement("li");
//     let tasks = task.value;
//     if(tasks===""){
//         return 
//     }
//     li.innerText = tasks;
//     ul.appendChild(li);
//     container.appendChild(ul);

// }    

// question 2 : on utilse le meme code mais on ajoute un checkbox 

let addTasks = () => {

    let ul = document.createElement("ul");
    let li = document.createElement("li");
    let checkbox = document.createElement("input");

    checkbox.type = "checkbox";
    let tasks = task.value;

    if (tasks === "") {
        return;
    }

    li.innerHTML = `<input type="checkbox"> ${tasks}`;
    
    ul.appendChild(li);
    container.appendChild(ul);

    li.style.display = "flex";
    li.style.alignItems = "center";

    task.value = "";
};

let deleteTask =()=>{

    let tasks = container.getElementsByTagName("li");
    for (let i = 0 ; i < tasks.length ; i++){

        let checkbox = tasks[i].querySelector("input[type='checkbox']");

        if (checkbox && checkbox.checked){

            tasks[i].remove();
            i--;
        }
    }

}

btnAdd.addEventListener("click", addTasks);
btnDelete.addEventListener("click" , deleteTask);
