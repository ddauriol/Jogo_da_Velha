function botOn() {
  if (gameOn == 1) {
    if (NumberPlayes == 1) {
      let gridZero = 0;
      Object.entries(dashboard).forEach(([key, value]) => {
        if (value == 0) {
          gridZero++;
        }
      });
      setTimeout(function () {
        if (gridZero > 0) {
          if (player == 2) {
            var keys = Object.keys(dashboard);
            let exit = 0;
            let keyTouch = "";

            while (exit == 0) {
              let touch = Math.floor(Math.random() * 9);
              keyTouch = keys[touch];
              console.log(keyTouch);
              console.log(dashboard[keyTouch]);
              exit = 1;
            }

            selectPos(keyTouch);
            console.log(dashboard);
          }
        }
      }, 1000);
    }
  }
}
