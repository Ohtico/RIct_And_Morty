const personajes =  "https://rickandmortyapi.com/api/character/?page=2"

const main = document.getElementById('main')

async function cartas(url){
    try{
        let rick = await fetch(url)
        let morty = await rick.json()
        ahoraSi(morty.results)
    } catch (error){
        console.log(error);
    }
  
}

cartas(personajes)

function ahoraSi(img){
    img.map((imagen)=> {
        const {image, name, species, type} = imagen;
        let carta = document.createElement('div');
        carta.classList.add('aplication');
        carta.innerHTML = `<img src="${image}" alt = "">
                            <div class="card"> <h1 id="flex-end">${name}</h1>
                            <p>${species}</p>
                            <p>${type}</p></div>`
        main.appendChild(carta);
    });
}