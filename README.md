# Contatore JavaScript

[![github](https://img.shields.io/badge/github-repo-blue?logo=github&style=plastic)](https://github.com/Sampei22/js_counter)
[![release](https://img.shields.io/badge/release-1.0-blue?style=plastic)]()
[![stars](https://img.shields.io/github/stars/Sampei22/js_counter?style=plastic&color=yellow)]()
[![license](https://img.shields.io/badge/license-unlicense-green?style=plastic)](https://github.com/Sampei22/js_counter/blob/main/LICENZA.txt)
[![language](https://img.shields.io/badge/language-JavaScript-orange?style=plastic)]()

## Descrizione del progetto

Un semplice contatore realizzato in JavaScript per esercitarmi nella manipolazione del DOM e nella gestione degli eventi. L’interfaccia permette di incrementare, decrementare, azzerare e salvare valori, oltre a cambiare casualmente lo sfondo.

## Indice
- [Caratteristiche](#caratteristiche)
- [Demo](#demo)
- [Installazione](#installazione)
- [Utilizzo](#utilizzo)
- [Struttura del progetto](#struttura-del-progetto)
- [Tecnologie utilizzate](#tecnologie-utilizzate)
- [Licenza](#licenza)


## Caratteristiche

Il contatore aumenta o diminuisce il valore visualizzato. Oltre ai due pulsanti + e -, troviamo anche altre funzioni come:

**Azzera contatore** - riporta il contatore a 0.

**Salva contatore** - permette di salvare il contatore corrente in un array che viene mostrato (se abbiamo almeno un contatore salvato) sotto i bottoni.

**Cancella ultimo contatore salvato** - cancella dall'array l'ultimo contatore salvato.

**Svuota i contatori salvati** - elimina tutti i contatori salvati presenti all'interno dell'array.

**Cambia sfondo** - nell'angolo in alto a sinistra della schermata, troviamo un bottone che se cliccato cambia il colore dello sfondo.

## Esempio di codice

```JavaScript
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
```

Vediamo che è stato creato un array che contiene cinque colori differenti, successivamente genera un numero intero compreso tra 0 e 4 grazie a Math.floor(), che utilizza come indice dell'array per assegnare un nuovo valore allo sfondo. Tramite il ciclo `do while` e le due variabili `sfondoPrecedente` e `nuovoSfondo` controlla che il colore non si ripeta.

## Screenshot

![Screen presentazione](img/screen_counter.png)

## Demo

👉 [Link demo del progetto](https://sampei22.github.io/js_counter/)

## Installazione

```
git clone https://github.com/Sampei22/js_counter.git

cd js_counter

Apri index.html nel tuo browser

```

## Utilizzo

Una volta aperto il file index.html nel browser, utilizza i pulsanti presenti nell’interfaccia per:

- Incrementare o decrementare il valore del contatore  
- Azzerare il contatore  
- Salvare il valore corrente  
- Rimuovere l’ultimo valore salvato  
- Svuotare completamente la lista dei valori salvati  
- Cambiare il colore di sfondo tramite l’apposito pulsante


## Struttura del progetto

*   `js_counter/`
    *   `css/` : Contiene il file di stile css.
        * `style.css`
    *   `img/` : Contiene le immagini utilizzate nel progetto.
        * `screen_counter.png`
    *   `js/` : Contiene il file JavaScript.
        * `script.js`
*   `index.html` : Contiene il file principale.
*   `LICENSE_en.txt` : Documentazione sulla licenza in lingua Inglese.
*   `README_en.md` : File README in lingua Inglese.
*   `LICENZA.txt` : Documentazione sulla licenza in Italiano.
*   `README.md` : Questo file.



## Tecnologie utilizzate

- JavaScript

- HTML5

- CSS3

## Autori

**Enrico Sanchini** - [GitHub](https://github.com/Sampei22)

## Licenza

Distribuito sotto licenza Unlicense. Per maggiori informazioni, consultare il file [LICENZA.txt](https://github.com/Sampei22/js_counter/blob/main/LICENZA.txt).



