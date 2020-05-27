var dashboard = {
  grid_1_1: 0,
  grid_1_2: 0,
  grid_1_3: 0,
  grid_2_1: 0,
  grid_2_2: 0,
  grid_2_3: 0,
  grid_3_1: 0,
  grid_3_2: 0,
  grid_3_3: 0,
};

var win = {
  X: [
    {
      grid_1_1: 1,
      grid_1_2: 1,
      grid_1_3: 1,
    },
    {
      grid_2_1: 1,
      grid_2_2: 1,
      grid_2_3: 1,
    },
    {
      grid_3_1: 1,
      grid_3_2: 1,
      grid_3_3: 1,
    },
    {
      grid_1_1: 1,
      grid_2_1: 1,
      grid_3_1: 1,
    },
    {
      grid_1_2: 1,
      grid_2_2: 1,
      grid_3_2: 1,
    },
    {
      grid_1_3: 1,
      grid_2_3: 1,
      grid_3_3: 1,
    },
    {
      grid_1_1: 1,
      grid_2_2: 1,
      grid_3_3: 1,
    },
    {
      grid_1_3: 1,
      grid_2_2: 1,
      grid_3_1: 1,
    },
  ],
  O: [
    {
      grid_1_1: 2,
      grid_1_2: 2,
      grid_1_3: 2,
    },
    {
      grid_2_1: 2,
      grid_2_2: 2,
      grid_2_3: 2,
    },
    {
      grid_3_1: 2,
      grid_3_2: 2,
      grid_3_3: 2,
    },
    {
      grid_1_1: 2,
      grid_2_1: 2,
      grid_3_1: 2,
    },
    {
      grid_1_2: 2,
      grid_2_2: 2,
      grid_3_2: 2,
    },
    {
      grid_1_3: 2,
      grid_2_3: 2,
      grid_3_3: 2,
    },
    {
      grid_1_1: 2,
      grid_2_2: 2,
      grid_3_3: 2,
    },
    {
      grid_1_3: 2,
      grid_2_2: 2,
      grid_3_1: 2,
    },
  ],
};

let player = 1;
let vencedor = "";
let vencedorFinal = "";
let roundOn = 0;

// Monitorando clicks
document.addEventListener(
  "click",
  function (e) {
    e = e || window.event;
    var target = e.target || e.srcElement,
      TextId = target.id;
    selectPos(TextId);
  },
  false
);

function selectPos(TextId) {
  if (gameOn == 0) {
    return;
  }
  if (vencedorFinal != "") {
    loadWinner(vencedorFinal);
    $("#resultadoModal").modal("show");
  } else {
    if (TextId.includes("grid")) {
      TextId = TextId.replace("div_grid", "grid");
      touchSound.play();
      Object.entries(dashboard).forEach(([key, value]) => {
        if (TextId == key) {
          if (value == 0) {
            if (player == 1) {
              dashboard[key] = 1;
              document.getElementById(key).innerHTML =
                "<h1 id=" + key + ' style="font-size: 15vh;">x</h1>';
              player = 2;
              return;
            }
            if (player == 2) {
              dashboard[key] = 2;
              document.getElementById(key).innerHTML =
                "<h1 id=" + key + ' style="font-size: 15vh;">o</h1>';
              player = 1;
              return;
            }
          }
        }
      });
    }

    Object.entries(win["X"]).forEach(([key, value]) => {
      var sum_x = 0;
      Object.entries(win["X"][key]).forEach(([win_key, win_value]) => {
        Object.entries(dashboard).forEach(([db_key, db_value]) => {
          if (db_key == win_key && win_value == db_value) {
            sum_x = sum_x + 1;
          }
        });
      });
      if (sum_x == 3) {
        console.log("Jogador X - " + sum_x);
        getPlayerNames();
        vencedor = NamePlayerOneValue;
        ScorePlayerOneValue = ScorePlayerOneValue + 1;
        roundOn = 0;
        UpdateScore();
        setTimeout(function () {
          restartGrid();
        }, 1000);
        sum_x = 0;
        if (ScoreMaxValue == ScorePlayerOneValue) {
          gameOn = 0;
          loadWinner(NamePlayerOneValue);
          setTimeout(function () {
            ExitGame();
          }, 2000);
          $("#resultadoModal").modal("show");
        }
        return;
      }
    });

    Object.entries(win["O"]).forEach(([key, value]) => {
      var sum_o = 0;
      Object.entries(win["O"][key]).forEach(([win_key, win_value]) => {
        Object.entries(dashboard).forEach(([db_key, db_value]) => {
          if (db_key == win_key && win_value == db_value) {
            sum_o = sum_o + 1;
          }
        });
      });
      if (sum_o == 3) {
        console.log("Jogador O - " + sum_o);
        getPlayerNames();
        vencedor = NamePlayerTwoValue;
        ScorePlayerTwoValue = ScorePlayerTwoValue + 1;
        roundOn = 0;
        UpdateScore();
        setTimeout(function () {
          restartGrid();
        }, 1000);
        sum_o = 0;
        if (ScoreMaxValue == ScorePlayerTwoValue) {
          gameOn = 0;
          loadWinner(NamePlayerTwoValue);
          setTimeout(function () {
            ExitGame();
          }, 2000);
          $("#resultadoModal").modal("show");
        }
        return;
      }
    });

    botOn();
  }
}

function restartGrid() {
  Object.entries(dashboard).forEach(([key, value]) => {
    dashboard[key] = 0;
    document.getElementById(key).innerHTML =
      "<h1 id=" + key + ' style="font-size: 15vh;">&nbsp;</h1>';
  });
}

function restartGame() {
  player = 1;
  roundOn = 1;
  ScorePlayerOneValue = 0;
  ScorePlayerTwoValue = 0;
  restartGrid();
}
