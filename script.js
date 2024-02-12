const key = "add40e4eb36c2e395eb066ff7cebe781"

function dadosnatela(dados) {
    console.log(dados)
    document.querySelector(".cidade").innerHTML = dados.name
    document.querySelector(".graus").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = dados.main.humidity + "%"
    document.querySelector(".img-previsao").src= `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    document.querySelector(".min").innerHTML = Math.floor(dados.main.temp_min) + "°C"
    document.querySelector(".max").innerHTML = Math.floor(dados.main.temp_max) + "°C"

}

async function buscarCidade(cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())
    dadosnatela(dados)
}

function cliqueiNoBotao() {
    const cidade = document.querySelector(".input-cidade").value
    const divmaior = document.querySelector(".caixa-maior")
    const lupa = document.querySelector(".img-busca")
    const divcity = document.querySelector(".div-cidade")

    if (cidade !== '') {
        divmaior.style.height = '260px'
        divmaior.style.top = '26px'
    }else{
        divcity.style.opacity = '0'
        alert ('Por favor digite uma cidade...')
        
    }

    if(cidade.length > 10){
        divcity.style.width = '215px'
        divcity.style.right = '98px'

    } else{
        divcity.style.width = '150px'
    }
    
    if (window.matchMedia("(max-width: 640px)").matches) {

        if (cidade.length > 10) {
            divcity.style.right = '45px'

        }

    }

    buscarCidade(cidade)
}


