const maximumBallsInGame = 75;
const maximumPlayerNumbers = 15;
const maximumPlayerPoints = 10000;
const PlayerPointsSubstraction = 135;

const pointsRanking = [
  { player: "Nathan Drake", "points left": 2533 },
  { player: "Mario & Luigi", "points left": 1484 },
  { player: "Master Chief", "points left": 8505 },
  { player: "Captain Price", "points left": 5890 },
  { player: "Artur Morgan", "points left": 3709 },
  { player: "Cloud Strife", "points left": 3482 },
  { player: "Umbasa", "points left": 4027 },
  { player: "Samus Aran", "points left": 6533 },
];

const playerData = {};
playerData["número cartón"] = 0;
playerData.points = maximumPlayerPoints - PlayerPointsSubstraction;

let bingoCard = [];
let bingoCardNumbers = [];

const twoDigitsforCard = (number) => {
  if (number < 10) {
    return "0" + number;
  }

  return number;
};

let takenBalls = [];

const ballsInGame = [];

for (let i = 1; i < maximumBallsInGame + 1; i++) {
  ballsInGame.push(i);
}

const randomBallNumbers = () => Math.ceil(Math.random() * ballsInGame.length);

let greetingType;
const userDate = new Date();
const hour = userDate.getHours();
if (hour > 5 && hour <= 12) {
  greetingType = "Buenos días";
} else if (hour > 12 && hour <= 19) {
  greetingType = "Buenas tardes";
} else {
  greetingType = "Buenas noches";
}

const bingo = () => {
  const nickname = prompt(`▁▁▁▁▁ ▁ ▂ ▃ ▄ ▅ ▆ ✪ B I N G O ✪ ▆ ▅ ▄ ▃ ▂ ▁ ▁▁▁▁▁


     ${greetingType}. Por favor, introduce un NOMBRE DE JUGADOR

    (Piensa en un nombre guay, aparecerá en un ranking si ganas ☺)
     ▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁
     `);

  if (nickname === null) {
    cancelFarewell();
  } else if (!nickname || !isNaN(nickname)) {
    alert(
      "Por favor, introduce un NOMBRE DE JUGADOR válido. No puedes estar vacío o contener solo números."
    );
    bingo();
  } else {
    playerData.name = nickname;
    alert(`▁▁▁▁▁ ▁ ▂ ▃ ▄ ▅ ▆ ✪ B I N G O ✪ ▆ ▅ ▄ ▃ ▂ ▁ ▁▁▁▁▁

                  Bienvenido, ♙${playerData.name}. ¡Empieza el juego!
        
        A continuación, verás en pantalla las reglas y tu cartón.
        ▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁ `);

    console.log(`

                                        ▁▁▁▁▁ ▁ ▂ ▃ ▄ ▅ ▆ ✪ B I N G O ✪ ▆ ▅ ▄ ▃ ▂ ▁ ▁▁▁▁▁

    ╔════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╗ 
            ═══════════════════════════════════════════ ✪ REGLAS DE JUEGO ✪ ═══════════════════════════════════════════
    ╠════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╣                                                                                                                               
       Hay ➑ ${maximumBallsInGame} bolas en el bombo y ☻ ${maximumPlayerPoints} puntos en tu marcador.
    ║                                                                                                                            ║                                                                                                                            
        ➀ Cada vez que pidas una bola del bombo se restan ${PlayerPointsSubstraction} puntos de tu marcador.
    ║                                                                                                                            ║
        ➁ Cuando una bola coincida con un número de tu cartón, se marcará con ▀▄. 
    ║                                                                                                                            ║
        ➂ Cuando completes una columna se cantará ¡LINEA!, pero el juego seguirá.
    ║                                                                                                                            ║
        ➃ Cuando completes el cartón se cantará ¡BINGO!. Ganarás la partida y entrarás en ranking según tus puntos restantes.
    ║                                                                                                                            ║
        ➄ Si te quedas sin puntos antes de cantar ¡BINGO! o cancelas un turno, perderás la partida...                           
    ╚════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╝
        `);

    bingoCardNumbersGenerator();

    bingoCardGenerator();
  }
};

const bingoCardNumbersGenerator = () => {
  do {
    const randomBuffer = randomBallNumbers();
    if (!bingoCardNumbers.includes(randomBuffer) || randomBuffer === 0) {
      bingoCardNumbers.push(randomBuffer);
    } else {
      bingoCardNumbersGenerator();
    }
  } while (bingoCardNumbers.length < maximumPlayerNumbers);
};

const bingoCardGenerator = () => {
  bingoCardNumbers = bingoCardNumbers.sort((a, b) => a - b);

  const rowOne = bingoCardNumbers.slice(0, 5);
  const rowTwo = bingoCardNumbers.slice(5, 10);
  const rowThree = bingoCardNumbers.slice(10);

  const cardRowOne = { ...rowOne };
  bingoCard.push(cardRowOne);

  const cardRowTwo = { ...rowTwo };
  bingoCard.push(cardRowTwo);

  const cardRowThree = { ...rowThree };
  bingoCard.push(cardRowThree);

  playerData["número cartón"] += 1;

  console.log(`
    ╔═════════════════════════════════╗ 
            ✪ CARTÓN Nº ${twoDigitsforCard(playerData["número cartón"])} ✪ 
    ╠═════════════════════════════════╣
             L1       L2       L3
        B   【${twoDigitsforCard(bingoCard[0][0])}】   【${twoDigitsforCard(
    bingoCard[1][0]
  )}】   【${twoDigitsforCard(bingoCard[2][0])}】
    ║                                 ║
        I   【${twoDigitsforCard(bingoCard[0][1])}】   【${twoDigitsforCard(
    bingoCard[1][1]
  )}】   【${twoDigitsforCard(bingoCard[2][1])}】
    ║                                 ║
        N   【${twoDigitsforCard(bingoCard[0][2])}】   【${twoDigitsforCard(
    bingoCard[1][2]
  )}】   【${twoDigitsforCard(bingoCard[2][2])}】
    ║                                 ║
        G   【${twoDigitsforCard(bingoCard[0][3])}】   【${twoDigitsforCard(
    bingoCard[1][3]
  )}】   【${twoDigitsforCard(bingoCard[2][3])}】
    ║                                 ║
        O   【${twoDigitsforCard(bingoCard[0][4])}】   【${twoDigitsforCard(
    bingoCard[1][4]
  )}】   【${twoDigitsforCard(bingoCard[2][4])}】

    ╚═════════════════════════════════╝
`);

  playerData["boleto aceptado"] =
    confirm(`Tienes en pantalla tu cartón de juego.

    ✔ haz clic en [ACEPTAR] para usarlo y EMPEZAR EL JUEGO, o
    ✖ haz clic en [CANCELAR] para obtener otro.`);

  if (playerData["boleto aceptado"]) {
    console.log(`
    _    ____ ___ ____    ____ ___ ____ ____ ___ |
    |    |___  |  [__     [__   |  |__| |__/  |  |
    |___ |___  |  ___]    ___]  |  |  | |  ╲  |  ·      
        `);

    drumNumberBallTaker();
  } else {
    bingoCard.splice(0, bingoCard.length);
    bingoCardNumbers.splice(0, bingoCardNumbers.length);
    bingoCardNumbersGenerator();
    bingoCardGenerator();
  }
};

const drumNumberBallTaker = () => {
  if (takenBalls.length === ballsInGame.length) {
    gameOverByBalls();
  } else if (
    bingoCard[0].completed &&
    bingoCard[1].completed &&
    bingoCard[2].completed
  ) {
    alert(`
▁▁▁▁▁ ▁ ▂ ▃ ▄ ▅ ▆ ✪ B I N G O ✪ ▆ ▅ ▄ ▃ ▂ ▁ ▁▁▁▁▁
    
                                 ¡H A S   G A N A D O!
  
        Ⓡ RONDAS TOTALES: ${takenBalls.length} de ${ballsInGame.length} 
        Ⓟ PUNTOS RESTANTES: ${
          playerData.points + PlayerPointsSubstraction
        } de ${maximumPlayerPoints}.
        ▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁
                A continuación verás tu posición en el ranking!
         `);

    console.log(`
        
    __   __  _____  _     _      _  _  _ _____ __   _  |
      ╲_/   |     | |     |      |  |  |   |   | ╲  |  |
       |    |_____| |_____|      |__|__| __|__ |  ╲_|  ·
        
        `);

    pointsRanking.push({
      player: playerData.name,
      "points left": playerData.points,
    }),
      console.table(
        pointsRanking.sort((a, b) => b["points left"] - a["points left"])
      );

    console.log(`
    _______ _     _ _______ __   _ _     _ _______      _______  _____   ______       _____         _______ __   __ _____ __   _  ______  |
       |    |_____| |_____| | ╲  | |____/  |______      |______ |     | |_____/      |_____] |      |_____|   ╲_/     |   | ╲  | |  ____  |
       |    |     | |     | |  ╲_| |    ╲_ ______|      |       |_____| |    ╲_      |       |_____ |     |    |    __|__ |  ╲_| |_____|  ·
        `);

    wannaPlayAgain();
  } else if (playerData.points < 1) {
    gameOverByPoints();
  } else {
    const numberBallTaker = randomBallNumbers();

    if (takenBalls.findIndex((ball) => ball === numberBallTaker) === -1) {
      takenBalls.push(numberBallTaker);

      const ColumOneChecker = Object.values(bingoCard[0]).findIndex(
        (number) => number === numberBallTaker
      );

      if (ColumOneChecker !== -1) {
        bingoCard[0][ColumOneChecker] = "▀▄";
      }

      const ColumTwoChecker = Object.values(bingoCard[1]).findIndex(
        (number) => number === numberBallTaker
      );

      if (ColumTwoChecker !== -1) {
        bingoCard[1][ColumTwoChecker] = "▀▄";
      }

      const ColumThreeChecker = Object.values(bingoCard[2]).findIndex(
        (number) => number === numberBallTaker
      );

      if (ColumThreeChecker !== -1) {
        bingoCard[2][ColumThreeChecker] = "▀▄";
      }

      const numberBallTaken = confirm(`    Ⓡ RONDA: ${takenBalls.length} de ${
        ballsInGame.length
      }    ║    Ⓟ PUNTOS RESTANTES: ${
        playerData.points
      } de ${maximumPlayerPoints}.
    ▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁ 
                      SALE DEL BOMBO LA BOLA NÚMERO...
    
                                        ✪ 【${twoDigitsforCard(
                                          numberBallTaker
                                        )}】 ✪
    ▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁ 
    Si coincide con un número de tu cartón se marcará.
        ✔ haz clic en [ACEPTAR] para seguir jugando, o
        ✖ haz clic en [CANCELAR] para dejar de jugar`);

      console.log(`
    ╔═════════════════════════════════╗ 
            ✪ CARTÓN Nº ${twoDigitsforCard(playerData["número cartón"])} ✪ 
    ╠═════════════════════════════════╣
             L1       L2       L3
        B   【${twoDigitsforCard(bingoCard[0][0])}】   【${twoDigitsforCard(
        bingoCard[1][0]
      )}】   【${twoDigitsforCard(bingoCard[2][0])}】
    ║                                 ║
        I   【${twoDigitsforCard(bingoCard[0][1])}】   【${twoDigitsforCard(
        bingoCard[1][1]
      )}】   【${twoDigitsforCard(bingoCard[2][1])}】
    ║                                 ║
        N   【${twoDigitsforCard(bingoCard[0][2])}】   【${twoDigitsforCard(
        bingoCard[1][2]
      )}】   【${twoDigitsforCard(bingoCard[2][2])}】
    ║                                 ║
        G   【${twoDigitsforCard(bingoCard[0][3])}】   【${twoDigitsforCard(
        bingoCard[1][3]
      )}】   【${twoDigitsforCard(bingoCard[2][3])}】
    ║                                 ║
        O   【${twoDigitsforCard(bingoCard[0][4])}】   【${twoDigitsforCard(
        bingoCard[1][4]
      )}】   【${twoDigitsforCard(bingoCard[2][4])}】

    ╚═════════════════════════════════╝                
            `);

      if (!numberBallTaken) {
        cancelFarewell();
      } else {
        const lineAchieved = (value) => value === "▀▄";

        if (Object.values(bingoCard[0]).every(lineAchieved)) {
          alert(`▁▁▁▁▁ ▁ ▂ ▃ ▄ ▅ ▆ ✪ B I N G O ✪ ▆ ▅ ▄ ▃ ▂ ▁ ▁▁▁▁▁

    ¡Bien hecho! Has completado la LÍNEA 1 en ${takenBalls.length} Ⓡ RONDAS 
    y con ${playerData.points} Ⓟ PUNTOS restantes.
     ▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁ `);

          console.log(`
           _____ __   _ _______      __      |
    |        |   | ╲  | |______        |     |
    |_____ __|__ |  ╲_| |______      __|__   ·

    `);

          bingoCard[0].completed = true;

          playerData.points -= PlayerPointsSubstraction;
          drumNumberBallTaker();
        } else if (Object.values(bingoCard[1]).every(lineAchieved)) {
          alert(`▁▁▁▁▁ ▁ ▂ ▃ ▄ ▅ ▆ ✪ B I N G O ✪ ▆ ▅ ▄ ▃ ▂ ▁ ▁▁▁▁▁

    ¡Bien hecho! Has completado la LÍNEA 2 en ${takenBalls.length} Ⓡ RONDAS 
    y con ${playerData.points} Ⓟ PUNTOS restantes.
    ▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁ `);

          console.log(`
           _____ __   _ _______       _______    |
    |        |   | ╲  | |______       _______|   |
    |_____ __|__ |  ╲_| |______      |_______    ·
        
    `);
          bingoCard[1].completed = true;

          playerData.points -= PlayerPointsSubstraction;
          drumNumberBallTaker();
        } else if (Object.values(bingoCard[2]).every(lineAchieved)) {
          alert(`▁▁▁▁▁ ▁ ▂ ▃ ▄ ▅ ▆ ✪ B I N G O ✪ ▆ ▅ ▄ ▃ ▂ ▁ ▁▁▁▁▁

    ¡Bien hecho! Has completado la LÍNEA 3 en ${takenBalls.length} Ⓡ RONDAS 
    y con ${playerData.points} Ⓟ PUNTOS restantes.
    ▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁ `);

          console.log(`
           _____ __   _ _______       _______    |
    |        |   | ╲  | |______       _______|   |
    |_____ __|__ |  ╲_| |______       _______|   ·

    `);
          bingoCard[2].completed = true;

          playerData.points -= PlayerPointsSubstraction;
          drumNumberBallTaker();
        } else {
          playerData.points -= PlayerPointsSubstraction;
          drumNumberBallTaker();
        }
      }
    } else {
      drumNumberBallTaker();
    }
  }
};

const cancelFarewell = () => {
  alert(`▁▁▁▁▁ ▁ ▂ ▃ ▄ ▅ ▆ ✪ B I N G O ✪ ▆ ▅ ▄ ▃ ▂ ▁ ▁▁▁▁▁

                            ¡HAS CANCELADO EL JUEGO!
▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁ `);

  console.log(`
    ______  _______ _______ _______       _____   _    _ _______  ______ |
    |  ____ |_____| |  |  | |______      |     |  ╲   /  |______ |_____/ |
    |_____| |     | |  |  | |______      |_____|   ╲ /   |______ |    ╲_ · 
    `);

  wannaPlayAgain();
};

const gameOverByBalls = () => {
  console.log(`
    ______  _______ _______ _______       _____   _    _ _______  ______ |
    |  ____ |_____| |  |  | |______      |     |  ╲   /  |______ |_____/ |
    |_____| |     | |  |  | |______      |_____|   ╲ /   |______ |    ╲_ · 
    
                    SE HAN SACADO TODAS LAS BOLAS DEL BOMBO!
    `);

  wannaPlayAgain();
};

const gameOverByPoints = () => {
  console.log(`
    ______  _______ _______ _______       _____   _    _ _______  ______ |
    |  ____ |_____| |  |  | |______      |     |  ╲   /  |______ |_____/ |
    |_____| |     | |  |  | |______      |_____|   ╲ /   |______ |    ╲_ · 
    
                            TE HAS QUEDADO SIN PUNTOS!
    `);

  wannaPlayAgain();
};

const wannaPlayAgain = () => {
  const playAgain = confirm(`${playerData.name}, ¿quieres volver a jugar?`);

  if (playAgain) {
    playerData["número cartón"] = 0;
    playerData.points = maximumPlayerPoints - PlayerPointsSubstraction;
    bingoCard = [];
    takenBalls = [];
    bingoCardNumbers = [];
    bingoCardNumbersGenerator();
    bingoCardGenerator();
  }
};

bingo();
