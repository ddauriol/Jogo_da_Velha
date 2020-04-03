const CardTwoPlayers = document.getElementById('CardTwoPlayers')
const SelectedTwoPlayeres = document.getElementById('SelectedTwoPlayeres')
const SelectedOnePlayer = document.getElementById('SelectedOnePlayer')
const ScoreMax = document.getElementById('ScoreMax')
const MensagemAlert = document.getElementById('MensagemAlert')
const Alert = document.getElementById('Alert')
const NamePlayerOne = document.getElementById('NamePlayerOne')
const NamePlayerTwo = document.getElementById('NamePlayerTwo')
const mainMenu = document.getElementById('mainMenu')
const gameBoard = document.getElementById('gameBoard')
const ScorePlayerOne = document.getElementById('ScorePlayerOne')
const ScorePlayerTwo = document.getElementById('ScorePlayerTwo')


let ScoreMaxValue = 0
let NumberPlayes = 2
let NamePlayerOneValue = NamePlayerOne.value
let NamePlayerTwoValue = NamePlayerTwo.value
let ScorePlayerOneValue = 0
let ScorePlayerTwoValue = 0

document.addEventListener('click', function(e) {
    e = e || window.event;
    var target = e.target || e.srcElement,
        TextId = target.id;
    if (TextId == 'btnOnePlayer'){
        OnePlayeres()
    }
    if (TextId == 'btnTwoPlayeres'){
        TwoPlayeres()
    }
    if (TextId == 'btnLessScoreMax'){
        LessScoreMax()
    }
    if (TextId == 'btnPlusScoreMax'){
        PlusScoreMax()
    }
    if (TextId == 'btnJogar'){
        PlayGame()
    }
}, false);

function TwoPlayeres(){
    CardTwoPlayers.style.display = 'Block'
    SelectedTwoPlayeres.style.display = 'Block'
    SelectedOnePlayer.style.display = 'none'
    NumberPlayes = 2
}

function OnePlayeres(){
    CardTwoPlayers.style.display = 'none'
    SelectedTwoPlayeres.style.display = 'none'
    SelectedOnePlayer.style.display = 'Block'
    NumberPlayes = 1
}

function ResetScoreMax(){
    ScoreMax.innerHTML = 1
    ScoreMaxValue = 1
}

function PlusScoreMax(){
    ScoreMaxValue = ScoreMaxValue + 1
    ScoreMax.innerHTML = ScoreMaxValue
}

function LessScoreMax(){
    ScoreMaxValue = ScoreMaxValue - 1
    if (ScoreMaxValue < 1 ){
        ScoreMaxValue = 1
    }
    ScoreMax.innerHTML = ScoreMaxValue
}

function PlayGame(){
    NamePlayerOneValue = NamePlayerOne.value
    NamePlayerTwoValue = NamePlayerTwo.value
    var msgErro = 'Necessário um nome de usuário.'

    if (NumberPlayes == 1){
        if (NamePlayerOneValue == ''){
            sendAlert(msgErro)
        }else{
            loadGameBoard()
        }
    }else{
        if (NamePlayerOneValue == '' || NamePlayerTwoValue == ''){
            sendAlert(msgErro)
        }else{
            loadGameBoard()   
        }
    }

}

function loadGameBoard(){
    mainMenu.style.display = 'none'
    gameBoard.style.display = 'Block'
}

function sendAlert(MSG){
    MensagemAlert.innerHTML = MSG
    Alert.style.display = 'Block'
    setTimeout(function () {
        Alert.style.display = 'none'
    }, 2000);
}

function UpdateScore(){
    ScorePlayerOne.innerHTML = ScorePlayerOneValue
    ScorePlayerTwo.innerHTML = ScorePlayerTwoValue
}

TwoPlayeres()
ResetScoreMax()
UpdateScore()