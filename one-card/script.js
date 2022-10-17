const carta0 = {
    img: 'img/luffy-icon.jpg',
    nome: 'Luffy',
    atributos: {
        ataque: 9,
        defesa: 6,
        inteligencia: 3
    }
}
const carta1 = {
    img: 'img/zoro-icon.jpg',
    nome: 'Zoro',
    atributos: {
        ataque: 8,
        defesa: 5,
        inteligencia: 5
    }
}
const carta2 = {
    img: 'img/nami-icon.jpg',
    nome: 'Nami',
    atributos: {
        ataque: 5,
        defesa: 4,
        inteligencia: 7
    }
}
const carta3 = {
    img: 'img/usopp-icon.jpg',
    nome: 'Usopp',
    atributos: {
        ataque: 6,
        defesa: 3,
        inteligencia: 6
    }
}
const cartas = [carta0, carta1, carta2, carta3]
var playerCard
var iaCard
// Cards - ↑

function sortearCarta() {
    let playerDado = parseInt(Math.random() * cartas.length)
    let iaDado
    // player & ia dice ↑

    do { iaDado = parseInt(Math.random() * cartas.length); } while (iaDado == playerDado)
    // validates wether dice1 != dice2

    playerCard = cartas[playerDado]
    iaCard = cartas[iaDado]
    // players cards ↑

    let btn = document.querySelector('div.btnSortear')
    btn.removeChild(btn.children[0])
    // removed buttons ↑

     let form = document.querySelector('#form')
     form.innerHTML += `<button type="button" id="btnJogar" onclick="jogar()">Jogar</button>`

    exibirOpcoes()
}
function exibirOpcoes() {
    let opcoes = document.querySelector('#opcoes')
    let opcoesText = ``
    let personImg
    for (var atributo in playerCard.atributos) {
        personImg = `<h2>Escolha o seu atributo</h2><br><img class='person-img' src='${playerCard.img}'><br>`
        opcoesText += `<br><input class='radio-atributos' type='radio' name='atributo' value='${atributo}'>${atributo.toUpperCase()}`
    }
    opcoes.innerHTML = personImg + opcoesText
}
function escolha() {
    let radioAtributos = document.getElementsByName('atributo')

    for (i = 0; i < radioAtributos.length; i++) {
        if (radioAtributos[i].checked == true) {
            return radioAtributos[i].value
        } else if (radioAtributos == 0) {
            alert('no')
        }
    }
}
function jogar() {
    let escolhaJogador = escolha()
    let atributoJogador = playerCard.atributos[escolhaJogador]
    let atributoIa = iaCard.atributos[escolhaJogador]
    // Atributos ↑
    if (escolhaJogador == null) {
        return alert('Você precisa escolher um atributo!')
    }
    // Não escolheu atributo ↑
    let res = document.querySelector('#resultado')
    if (atributoJogador > atributoIa) {
        res.innerHTML = `<h1 class="res-title" style='background-color:rgba(60, 158, 51, 0.713);'>Você ganhou! ${iaCard.nome} perdeu..</h1>`
    } else if (atributoJogador == atributoIa) {
        res.innerHTML = `<h1 class="res-title">Você empatou!</h1>`
    } else {
        res.innerHTML = `<h1 class="res-title" style='background-color:rgba(223, 72, 72, 0.713);'>Você perdeu! ${iaCard.nome} ganhou..</h1>`
    }
    console.log(escolhaJogador);

    // console.log(atributoJogador);
    // console.log(atributoIa);
}