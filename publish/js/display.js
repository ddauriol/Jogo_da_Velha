const CardTwoPlayers = document.getElementById('CardTwoPlayers')
const SelectedTwoPlayers = document.getElementById('SelectedTwoPlayers')
const SelectedOnePlayer = document.getElementById('SelectedOnePlayer')
const SelectedTwoPlayersHiden = document.getElementById('SelectedTwoPlayersHiden')
const SelectedOnePlayerHiden = document.getElementById('SelectedOnePlayerHiden')
const ScoreMax = document.getElementById('ScoreMax')
const MensagemAlert = document.getElementById('MensagemAlert')
const Alert = document.getElementById('Alert')
const NamePlayerOne = document.getElementById('NamePlayerOne')
const NamePlayerTwo = document.getElementById('NamePlayerTwo')
const NamePlayerOneLabel = document.getElementById('NamePlayerOneLabel')
const NamePlayerTwoLabel = document.getElementById('NamePlayerTwoLabel')
const mainMenu = document.getElementById('mainMenu')
const gameBoard = document.getElementById('gameBoard')
const ScorePlayerOne = document.getElementById('ScorePlayerOne')
const ScorePlayerTwo = document.getElementById('ScorePlayerTwo')
const PlayerWinner = document.getElementById('PlayerWinner')
const PlayerOneFinish = document.getElementById('PlayerOneFinish')
const PlayerTwoFinish = document.getElementById('PlayerTwoFinish')

let ScoreMaxValue = 0
let NumberPlayes = 2
let NamePlayerOneValue = ''
let NamePlayerTwoValue = ''
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
    if (TextId == 'btnSair'){
        ExitGame()
    }
    if (TextId == 'btnRset'){
        restartGrid()
    }
}, false);

function TwoPlayeres(){
    CardTwoPlayers.classList.remove('HiddenDiv')
    CardTwoPlayers.classList.add('ShowDiv')
    SelectedTwoPlayers.style.display = 'Block'
    SelectedTwoPlayersHiden.style.display = 'none'
    SelectedOnePlayer.style.display = 'none'
    SelectedOnePlayerHiden.style.display = 'Block'
    NumberPlayes = 2
}

function OnePlayeres(){
    CardTwoPlayers.classList.add('HiddenDiv')
    CardTwoPlayers.classList.remove('ShowDiv')
    SelectedTwoPlayers.style.display = 'none'
    SelectedTwoPlayersHiden.style.display = 'Block'
    SelectedOnePlayer.style.display = 'Block'
    SelectedOnePlayerHiden.style.display = 'none'
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

async function PlayGame(){
    getPlayerNames()
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

async function loadGameBoard(){
    gameBoard.style.display = 'Block'
    mainMenu.style.display = 'none'
    getPlayerNames()
    NamePlayerTwoLabel.innerHTML = NamePlayerTwoValue
    NamePlayerOneLabel.innerHTML = NamePlayerOneValue
}

function ExitGame(){
    gameBoard.style.display = 'none'
    mainMenu.style.display = 'Block'
    restartGame()
    TwoPlayeres()
    ResetScoreMax()
    UpdateScore()    
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

function getPlayerNames(){
    if (NumberPlayes == 2){
        NamePlayerTwoValue = NamePlayerTwo.value
    }else{
        NamePlayerTwoValue = "BOT"
    }
    NamePlayerOneValue = NamePlayerOne.value
}

function loadWinner(PlayerWinnerString){
    PlayerWinner.innerHTML = PlayerWinnerString
    PlayerOneFinish.innerHTML = ScorePlayerOneValue + ' ' + NamePlayerOneValue
    PlayerTwoFinish.innerHTML = ScorePlayerTwoValue + ' ' + NamePlayerTwoValue
}

TwoPlayeres()
ResetScoreMax()
UpdateScore()
getPlayerNames()