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

    try{

        const resposta = await fetch(

            `https://deezerdevs-deezer.p.rapidapi.com/search?q=${nome}`,

            {

                method:"GET",

                headers:{

                    "x-rapidapi-host":
                    "deezerdevs-deezer.p.rapidapi.com",

                    "x-rapidapi-key":
                    "e26b1ad218mshfcbcdd8e4bc5b9bp12827bjsne0c473b37007"

                }

            }

        )

        const dados = await resposta.json()

        console.log(dados)

        const artista = dados.data[0]

        return {

            nome:
                artista.artist.name,

            imagem:
                artista.artist.picture_big,

            seguidores:
                Math.floor(
                    Math.random() * 100000000
                )

        }

    }

    catch(error){

        console.log(error)

        alert(
            "Erro ao buscar artista."
        )
    }
}

async function novaRodada(){

    const nome1 =

        artistas[
            Math.floor(
                Math.random() * artistas.length
            )
        ]

    let nome2 =

        artistas[
            Math.floor(
                Math.random() * artistas.length
            )
        ]

    while(nome1 === nome2){

        nome2 =

            artistas[
                Math.floor(
                    Math.random() * artistas.length
                )
            ]
    }

    artista1 = await buscarArtista(nome1)

    artista2 = await buscarArtista(nome2)

    if(!artista1 || !artista2){

        alert(
            "Erro ao carregar artistas."
        )

        return
    }

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

    if(!artista1 || !artista2){

        return
    }

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

    }

    else{

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

        score = 0
    }

    document.getElementById("score")

        .innerText = `Score: ${score}`

    novaRodada()
}

novaRodada()
