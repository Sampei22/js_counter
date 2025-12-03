const pointerBody = document.querySelector("body")

const btnBackground = document.createElement("button")
btnBackground.textContent = "Cambia lo sfondo"
btnBackground.classList.add("buttonStyle", "buttonBackground")
pointerBody.appendChild(btnBackground)

const backgroundColor = ["linear-gradient(to top, white,green)",
                        "linear-gradient(to top, white,blue)",
                        "linear-gradient(to top, white,red)",
                        "linear-gradient(to top, white,purple)",
                        "linear-gradient(to top, white,orange)"]
let currentBackground = 0

btnBackground.addEventListener("click", ()=>{
    let newBackground

    do{
        newBackground = Math.floor(Math.random() * backgroundColor.length)
    } while (newBackground === currentBackground);
    
    pointerBody.style.background = backgroundColor[newBackground]
    currentBackground = newBackground
})

const divGrid = document.createElement("div")
divGrid.setAttribute("class", "counterGrid")
pointerBody.appendChild(divGrid)

const title = document.createElement("h1")
title.textContent = "Contatore JavaScript"
divGrid.appendChild(title)
        
const btnMinus = document.createElement("button")
btnMinus.setAttribute("class","buttonStyle")
btnMinus.textContent = "-"        

const counter = document.createElement("span")
counter.textContent = 0

const btnPlus = document.createElement("button")
btnPlus.setAttribute("class","buttonStyle")
btnPlus.textContent = "+"

const btnResetCounter = document.createElement("button")
btnResetCounter.classList.add("buttonStyle","span3")
btnResetCounter.textContent = "Azzera contatore"

const btnSave = document.createElement("button")
btnSave.classList.add("buttonStyle","span3")
btnSave.textContent = "Salva contatore"

const btnDeleteLast = document.createElement("button")
btnDeleteLast.classList.add("buttonStyle","span3")
btnDeleteLast.textContent = "Cancella ultimo contatore salvato"

const btnEmptyArray = document.createElement("button")
btnEmptyArray.classList.add("buttonStyle","span3")
btnEmptyArray.textContent = "Svuota i contatori salvati"          

let arraySave = []
let numbSaves = 0
        
divGrid.appendChild(btnMinus)
divGrid.appendChild(counter)
divGrid.appendChild(btnPlus)
divGrid.appendChild(btnResetCounter)
divGrid.appendChild(btnSave)
divGrid.appendChild(btnDeleteLast)
divGrid.appendChild(btnEmptyArray)

const listaSalvataggi = document.createElement("ul")
listaSalvataggi.classList.add("span3")
listaSalvataggi.textContent="I tuoi contatori salvati:"
        
btnMinus.addEventListener("click", ()=> {
    counter.textContent = Number(counter.textContent) - 1;
})

btnPlus.addEventListener("click", ()=>{
    counter.textContent = Number(counter.textContent) + 1;
})

btnResetCounter.addEventListener("click", ()=>{
    counter.textContent = "0"
})

btnSave.addEventListener("click", ()=>{
    numbSaves = salvaCont(counter.textContent, numbSaves, arraySave)      
})

btnDeleteLast.addEventListener("click", ()=>{
    if (numbSaves===0) return
    if (numbSaves==1){
        divGrid.removeChild(listaSalvataggi)
    }
    arraySave.pop()
    listaSalvataggi.removeChild(listaSalvataggi.lastChild)
    numbSaves--
})

btnEmptyArray.addEventListener("click", ()=>{
    numbSaves = svuotaArray(arraySave)
})

function salvaCont (num, indice, array){
    if(indice === 0){
        divGrid.appendChild(listaSalvataggi)
    }

    array[indice] = num;
    indice++;

    let nuovoContatore = document.createElement("li")
    nuovoContatore.textContent = "Contatore " + indice + ": " + num
    listaSalvataggi.appendChild(nuovoContatore)

    return indice 
}


function svuotaArray(array) {
    while (array.length > 0) {
        array.pop();
        if (listaSalvataggi.lastChild)
            listaSalvataggi.removeChild(listaSalvataggi.lastChild)
    }

    if (divGrid.contains(listaSalvataggi))
        divGrid.removeChild(listaSalvataggi)

    return 0
}