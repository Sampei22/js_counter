const styleSheets = document.createElement("link")
styleSheets.rel = "stylesheet"
styleSheets.href = "css/style.css"
document.head.appendChild(styleSheets)

const favicon = document.createElement("link")
favicon.rel = "icon"
favicon.href = "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
document.head.appendChild(favicon)

const pointerBody = document.querySelector("body")

const btnSfondo = document.createElement("button")
btnSfondo.textContent = "Cambia lo sfondo"
btnSfondo.setAttribute("class", "buttonStyle")
btnSfondo.style.cssText="position:fixed; top:10px; left:10px; font-size:1rem;"
pointerBody.appendChild(btnSfondo)

const coloriSfondo = ["linear-gradient(to top, white,green)","linear-gradient(to top, white,blue)","linear-gradient(to top, white,red)","linear-gradient(to top, white,purple)","linear-gradient(to top, white,orange)"]
let sfondoPrecedente = 0

btnSfondo.addEventListener("click", ()=>{
    let nuovoSfondo

    do{
        nuovoSfondo = Math.floor(Math.random() * coloriSfondo.length)
    } while (nuovoSfondo === sfondoPrecedente);
    
    pointerBody.style.background = coloriSfondo[nuovoSfondo]
    sfondoPrecedente = nuovoSfondo
})

const divGrid = document.createElement("div")
divGrid.setAttribute("class", "counterGrid")
pointerBody.appendChild(divGrid)

const titolo = document.createElement("h1")
titolo.style.cssText = "grid-column:1/-1; text-align:center; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;"
titolo.textContent = "Contatore JavaScript"
divGrid.appendChild(titolo)
        
const btnMeno = document.createElement("button")
btnMeno.setAttribute("class","buttonStyle")
btnMeno.textContent = "-"        

const counter = document.createElement("span")
counter.style.cssText="text-align:center; font-size:2rem; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;"
counter.textContent = 0

const btnPiu = document.createElement("button")
btnPiu.setAttribute("class","buttonStyle")
btnPiu.textContent = "+"

const btnAzzera = document.createElement("button")
btnAzzera.classList.add("buttonStyle","span3")
btnAzzera.textContent = "Azzera contatore"

const btnSalva = document.createElement("button")
btnSalva.classList.add("buttonStyle","span3")
btnSalva.textContent = "Salva contatore"

const btnCanc = document.createElement("button")
btnCanc.classList.add("buttonStyle","span3")
btnCanc.textContent = "Cancella ultimo contatore salvato"

const btnSvuota = document.createElement("button")
btnSvuota.classList.add("buttonStyle","span3")
btnSvuota.textContent = "Svuota i contatori salvati"          

let arraySalvataggi = new Array()
let i = 0 /*controllare*/
        
divGrid.appendChild(btnMeno)
divGrid.appendChild(counter)
divGrid.appendChild(btnPiu)
divGrid.appendChild(btnAzzera)
divGrid.appendChild(btnSalva)
divGrid.appendChild(btnCanc)
divGrid.appendChild(btnSvuota)

const listaSalvataggi = document.createElement("ul")
listaSalvataggi.classList.add("span3")
listaSalvataggi.style.cssText="font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif; list-style-type:none; text-align:center;"
        /* sistemare */
listaSalvataggi.textContent="I tuoi contatori salvati:"
        
btnMeno.addEventListener("click", ()=> {
    counter.textContent = Number(counter.textContent) - 1;
})

btnPiu.addEventListener("click", ()=>{
    counter.textContent = Number(counter.textContent) + 1;
})

btnAzzera.addEventListener("click", function(){
    counter.textContent = "0"
})

btnSalva.addEventListener("click", function(){
    i = salvaCont(counter.textContent, i, arraySalvataggi)      
})

btnCanc.addEventListener("click", function(){
    if (i===0) return
    if (i==1){
        divGrid.removeChild(listaSalvataggi)
    }
    arraySalvataggi.pop()
    listaSalvataggi.removeChild(listaSalvataggi.lastChild)
    i--
})

btnSvuota.addEventListener("click", function(){
    i = svuotaArray(arraySalvataggi)
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