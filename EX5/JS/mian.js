let li= document.getElementsByClassName("li")
let ul = document.getElementById('list');
let btn= document.getElementById('btn');
let modeBtn = document.getElementById('mode')
let filterInput =document.getElementById("filterInput")
let html = document.documentElement; 

for (let i = 0; i < li.length; i++) {
    li[i].addEventListener('mouseover', () => {
        li[i].style.backgroundColor = 'blueviolet';
        li[i].style.color = 'whitesmoke';
    });

    li[i].addEventListener('mouseout', () => {
        li[i].style.backgroundColor = '';
        li[i].style.color = '';
    });
}

let visibility = () => {
    let valueBtn = btn.innerText;  

    if (valueBtn === "hide") {
        ul.style.display = "none";  
        btn.innerText = "display";  
    } else if (valueBtn === "display") {
        ul.style.display = "block";  
        btn.innerText = "hide";  
    }
}

// filterInput.addEventListener('keyup',()=>{
//     let key = filterInput.value
//         for(let i = 0 ; i < li.length ; i++ ){
//             if(key === li[i] ){
//                 li.style.display = '';
//             }
//             li.style.display = 'none';
//         }
// })

// ignoreCase not in js 
// filterInput.addEventListener('keyup', () => {
//     let key = filterInput.value.ignoreCase;  

//     for (let i = 0; i < li.length; i++) {
//         if (li[i].textContent.ignoreCase.includes(key)) {
//             li[i].style.display = ''; 
//         } else {
//             li[i].style.display = 'none';  
//         }
//     }
// });

filterInput.addEventListener('keyup', () => {
    let key = filterInput.value.toLowerCase();  

    for (let i = 0; i < li.length; i++) {
        if (li[i].textContent.toLowerCase().includes(key)) {
            li[i].style.display = ''; 
        } else {
            li[i].style.display = 'none';  
        }
    }
});

let darkMode = () => {
    let mode = modeBtn.innerText;  

    if (mode === "🌙") {  
        html.style.backgroundColor = "black";  
        html.style.color = "white";  
        modeBtn.innerText = "☀️";  
        modeBtn.style.color = "white"; 
        modeBtn.style.backgroundColor = "black";  
        
    } else if (mode === "☀️") {
        html.style.backgroundColor = "white";  
        html.style.color = "black";  
        modeBtn.style.color = "black";  
        modeBtn.style.backgroundColor = "white";  
        modeBtn.innerText = "🌙";
    }
}
modeBtn.addEventListener("click",darkMode)
btn.addEventListener("click",visibility)

