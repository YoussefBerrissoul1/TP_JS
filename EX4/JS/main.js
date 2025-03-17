let more = document.getElementById("more")
let less = document.getElementById("less")
let reset = document.getElementById("reset")
let counter = document.getElementById("counter")


less.addEventListener('click',()=>{

    let value = parseInt(counter.innerText)
    value --
    counter.innerText = value
    parity()
    transitonFluide()


})

more.addEventListener('click',()=>{

    let value = parseInt(counter.innerText)
    value ++
    counter.innerText = value
    parity()
    transitonFluide()

})

reset.addEventListener('click',()=>{

    counter.innerText = 0
    parity()
    transitonFluide()

})


let parity = () => {
    let value = parseInt(counter.innerText); 
    if (value > 0) {
        counter.style.color = "green"; 
    } else if (value < 0) {
        counter.style.color = "red"; 
    } else {
        counter.style.color = "blueviolet"; 
    }
}

let transitonFluide = () => {
    counter.style.transform = "scale(1.5)"; 
    counter.style.transition = "transform 0.2s ease-in-out"; 

    setTimeout(() => {
        counter.style.transform = "scale(1)"; 
    }, 200);
};






