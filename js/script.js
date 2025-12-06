const pointerBody = document.querySelector("body")

const btnBackgroundColor = document.createElement("button")
btnBackgroundColor.textContent = "Cambia lo sfondo"
btnBackgroundColor.classList.add("buttonStyle", "buttonBackground")
pointerBody.appendChild(btnBackgroundColor)

const backgroundColor = ["linear-gradient(to top, white,green)",
                        "linear-gradient(to top, white,blue)",
                        "linear-gradient(to top, white,red)",
                        "linear-gradient(to top, white,purple)",
                        "linear-gradient(to top, white,orange)"]
let currentBackground = 0

btnBackgroundColor.addEventListener("click", ()=>{
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

const listSave = document.createElement("ul")
listSave.classList.add("span3")
listSave.textContent="I tuoi contatori salvati:"
        
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
    numbSaves = saveCounter(counter.textContent, numbSaves, arraySave)      
})

btnDeleteLast.addEventListener("click", ()=>{
    if (numbSaves===0) return
    if (numbSaves==1){
        divGrid.removeChild(listSave)
    }
    arraySave.pop()
    listSave.removeChild(listSave.lastChild)
    numbSaves--
})

btnEmptyArray.addEventListener("click", ()=>{
    numbSaves = emptyArray(arraySave)
})

function saveCounter (num, index, array){
    if(index === 0){
        divGrid.appendChild(listSave)
    }

    array[index] = num;
    index++;

    let newCounter = document.createElement("li")
    newCounter.textContent = "Contatore " + index + ": " + num
    listSave.appendChild(newCounter)

    return index 
}


function emptyArray(array) {
    while (array.length > 0) {
        array.pop();
        if (listSave.lastChild)
            listSave.removeChild(listSave.lastChild)
    }

    if (divGrid.contains(listSave))
        divGrid.removeChild(listSave)

    return 0
}