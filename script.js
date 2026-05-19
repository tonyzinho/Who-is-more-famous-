let score = 0

let artista1
let artista2

const artistas = [

"Taylor Swift",
"Drake",
"The Weeknd",
"Justin Bieber",
"Billie Eilish",
"Ariana Grande",
"Eminem",
"Rihanna",
"Bruno Mars",
"Ed Sheeran",
"Kanye West",
"Lady Gaga",
"Travis Scott",
"Bad Bunny",
"Olivia Rodrigo",
"Post Malone",
"Doja Cat",
"Sabrina Carpenter",
"Britney Spears",
"Katy Perry"

]

async function buscarArtista(nome){

    const resposta = await fetch(
        `https://corsproxy.io/?https://api.deezer.com/search/artist?q=${nome}`
    )

    const dados = await resposta.json()

    const artista = dados.data[0]

    return {

        nome: artista.name,

        imagem: artista.picture_big,

        seguidores: artista.nb_fan

    }
}

async function novaRodada(){

    const nome1 =
        artistas[
            Math.floor(Math.random() * artistas.length)
        ]

    const nome2 =
        artistas[
            Math.floor(Math.random() * artistas.length)
        ]

    artista1 = await buscarArtista(nome1)
    artista2 = await buscarArtista(nome2)

    document.getElementById("img1")
        .src = artista1.imagem

    document.getElementById("img2")
        .src = artista2.imagem

    document.getElementById("nome1")
        .innerText = artista1.nome

    document.getElementById("nome2")
        .innerText = artista2.nome
}

function escolher(opcao){

    let acertou = false

    if(
        opcao === 1 &&
        artista1.seguidores >
        artista2.seguidores
    ){
        acertou = true
    }

    if(
        opcao === 2 &&
        artista2.seguidores >
        artista1.seguidores
    ){
        acertou = true
    }

    if(acertou){

        score++

        alert(
            "Acertou!\n\n" +

            artista1.nome +
            ": " +
            artista1.seguidores.toLocaleString()
            +
            " fãs\n\n" +

            artista2.nome +
            ": " +
            artista2.seguidores.toLocaleString()
            +
            " fãs"
        )

    }else{

        score = 0

        alert(
            "Errou!\n\n" +

            artista1.nome +
            ": " +
            artista1.seguidores.toLocaleString()
            +
            " fãs\n\n" +

            artista2.nome +
            ": " +
            artista2.seguidores.toLocaleString()
            +
            " fãs"
        )
    }

    document.getElementById("score")
        .innerText = `Score: ${score}`

    novaRodada()
}

novaRodada()