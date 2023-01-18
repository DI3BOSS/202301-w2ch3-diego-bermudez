const questionPacks = [
    {
      letter: "a",
      answer: ["abducir", "arrancar", "alcalino"],
      status: 0,
      question:
        ["CON LA A. Acción de secuestrar alguien mediante una nave extraterrestre",
         "CON LA A. Acción de quitar algo con fuerza y violencia",
         "CON LA A. En química. Medio con un pH superior a 7"],
    },
    {
      letter: "b",
      answer: ["bingo", "bacalao", "biblioteca"],
      status: 0,
      question:
        ["CON LA B. Juego que ha sacado de quicio a todos los 'Coders' en las sesiones de precurso",
         "CON LA B. Pescado blanco de mar que necesita desalarse para ser consumido",
         "CON LA B. Edificio donde se conservan conjuntos de libros ordenados y clasificados"],
    },
    {
      letter: "c",
      answer: ["churumbel", "caracol", "cometa"],
      status: 0,
      question: 
        ["CON LA C. Vulgarismo. Niño, crío, bebé",
         "CON LA C. Molusco provisto de caparazón y pie carnoso mediante el que se arrastra",
         "CON LA C. Cuerpo celeste que deja tras de sí una cola luminosa"],
    },
    {
      letter: "d",
      answer: ["diarrea", "diente", "delantal"],
      status: 0,
      question:
        ["CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y consistencia líquida",
         "CON LA D. Pieza osea dura y blanca que crece en la boca", 
         "CON LA D. Prenda de vestir usada para cocinar"],
    },
    {
      letter: "e",
      answer: ["ectoplasma", "estadio", "enfermedad"],
      status: 0,
      question:
        ["CON LA E. Región periférica de la célula, la cual carece de orgánulos y es de menor densidad que el endoplasma",
         "CON LA E. Instalación deportiva de grandes dimensiones", 
         "CON LA E. alteración leve o grave del funcionamiento normal de un organismo"],
    },
    {
      letter: "f",
      answer: ["facil", "forastero", "frase"],
      status: 0,
      question: 
        ["CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad", 
         "CON LA F. Persona que es o ha venido de otro lugar", 
         "CON LA F. Unidad lingüística que consta de sujeto y predicado"],
    },
    {
      letter: "g",
      answer: ["galaxia", "gato", "general"],
      status: 0,
      question:
       ["CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas", 
        "CON LA G. Mamífero felino de tamaño pequeño", 
        "CON LA G. Máximo rango del ejército"],
    },
    {
      letter: "h",
      answer: ["harakiri", "helado", "hierro"],
      status: 0,
      question: 
      ["CON LA H. Suicidio ritual japonés por desentrañamiento", 
       "CON LA H. Crema láctea que se sirve congelada", 
       "CON LA H. Elemento 26 de la tabla periódica"],
    },
    {
      letter: "i",
      answer: ["iglesia", "irlanda", "iman"],
      status: 0,
      question: 
      ["CON LA I. Templo o comunidad propia del cristianismo",
      "CON LA I. País europeo cuyo patrón es san Patricio", 
      "CON LA I. Mineral capaz de atraer el hierro"],
    },
    {
      letter: "j",
      answer: ["jabalina", "jota", "jabon"],
      status: 0,
      question:
       ["CON LA J. Lanza diseñada para ser arrojada",
        "CON LA J. Canto y danza tradicional de Aragón", 
        "CON LA J. Sustancia que, mezclada con agua, sirve para lavarse o fregar"],  
    },
    {
      letter: "k",
      answer: ["kamikaze", "kimono", "karaoke"],
      status: 0,
      question:
       ["CON LA K. Piloto suicida japonés que tripulaba un avión con explosivos",
        "CON LA K. Prenda típica de Japón", 
        "CON LA K. Aparato audiovisual para cantar"],
    },
    {
      letter: "l",
      answer: ["licantropo", "loteria", "laconico"],
      status: 0,
      question: 
       ["CON LA L. Hombre lobo",
        "CON LA L. Juego de azar ", 
        "CON LA L. Cultismo. Algo que es breve o conciso"],
    },
    {
      letter: "m",
      answer: ["misantropo", "moraleja", "montaraz"],
      status: 0,
      question:
       ["CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas",
        "CON LA M. Enseñanza que se deduce de una fábula", 
        "CON LA M. Dícese de Aragorn y de quien es criado en la montaña"],
    },
    {
      letter: "n",
      answer: ["necedad", "natacion", "nomada"],
      status: 0,
      question: 
       ["CON LA N. Demostración de poca inteligencia",
        "CON LA N. Deporte acuático", 
        "CON LA N. Persona que va de un lugar a otro sin establecerse permanentemente"],
    },
    {
      letter: "ñ",
      answer: ["señal", "ñoqui", "ñoño"],
      status: 0,
      question:
       ["CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.",   
        "CON LA Ñ. Pasta en forma de bola, elaborada con patata", 
        "CON LA Ñ. Persona apocada o de poco ingenio "],
    },
    {
      letter: "o",
      answer: ["ogro", "oliva", "olimpiadas"],
      status: 0,
      question:
       ["CON LA O. Ser fantástico y gigantesco parecido al hombre que se alimenta de carne humana.",
        "CON LA O. Fruto comestible del que se extrae aceite", 
        "CON LA O. Fiesta deportiva iniciada en la antigua Grecia"],
    },
    {
      letter: "p",
      answer: ["protesis", "puerto", "policia"],
      status: 0,
      question:
       ["CON LA P. Pieza o aparato empleados para sustituir un órgano o un miembro del cuerpo",
        "CON LA P. Lugar donde las embarcaciones pueden detenerse", 
        "CON LA P. Cuerpo de autoridad que mantiene el orden público"],
    },
    {
      letter: "q",
      answer: ["queso", "quirofano", "quemadura"],
      status: 0,
      question:
       ["CON LA Q. Producto obtenido por la maduración de la cuajada de la leche",
        "CON LA Q. sala hospitalaria para realizar operaciones", 
        "CON LA Q. Lesión en la piel causada por fuego"],
    },
    { letter: "r", 
      answer: ["raton", "rey", "roble"],
      status: 0, 
      question: 
       ["CON LA R. Mamífero pequeño del género mus",
        "CON LA R. Soberano de una monarquía", 
        "CON LA R. Árbol de corteza parduzca, copa ancha y hoja caduca"],
    },
    {
      letter: "s",
      answer: ["sabana", "santo", "sobrio"],
      status: 0,
      question: 
       ["CON LA S. Bioma caracterizado por un estrato arbóreo-arbustivo de escasa cobertura",
        "CON LA S. Quien ya goza de la Gloria del Cielo", 
        "CON LA S. Que es moderado y discreto"],
    },
    {
      letter: "t",
      answer: ["terminator", "tangible", "tiburón"],
      status: 0,
      question:
       ["CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984",
        "CON LA T. Que puede ser tocado", 
        "CON LA T. Pez marino carnívoro"],
    },
    {
      letter: "u",
      answer: ["unamuno", "uretra", "umami"],
      status: 0,
      question:
       ["CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914",
        "CON LA U. Conducto por el que se expulsa la orina", 
        "CON LA U. Sabor suave y prolongado"],
    },
    {
      letter: "v",
      answer: ["vikingos", "vino", "vastago"],
      status: 0,
      question:
       ["CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa",
        "CON LA V. Bebida acohólica que se extrae de la uva", 
        "CON LA V. Tallo nuevo. Persona descendiente de otra"],
    },
    {
      letter: "x",
      answer: ["botox", "xenofobia", "xilofono"],
      status: 0,
      question: 
       ["CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética",
        "CON LA X. Rechazo a los extranjeros", 
        "CON LA X. Instrumento musical de percusión formado por láminas de madera"],
    },
    {
      letter: "y",
      answer: ["peyote", "yema", "yegua"],
      status: 0,
      question:
       ["CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos",
       "CON LA Y. Núcleo de los huevos", 
       "CON LA Y. Hembra del caballo"],
    },
    {
      letter: "z",
      answer: ["zigzag", "zarzamora", "zapatero"],
      status: 0,
      question:
       ["CON LA Z. Línea formada por angulos alternativos entrantes y salientes",
        "CON LA Z. Fruto comestible de la zarza", 
        "CON LA Z. Persona que se dedica a fabricar, reparar o vender zapatos"],
    },
];

const questionPackSelector = () => {
    return Math.round(Math.random()*2)
    };

const playerData = {};
      playerData.questionsIdForGame = questionPackSelector();
      playerData.points = 0;

const wordsInGame = questionPacks.length;

const passKeyword = 'pasapalabra';
const finishKeyword = 'end';
const gameTime = 150;

let questionidCounter = 0;
console.log(questionPacks[questionidCounter]['question'][playerData.questionsIdForGame])

let guessedCheck = [];
let passedCheck = [];
let cancelCheck = [];

const timeInterval = {};

const timer = () => {

    timeInterval.finish = new Date(timeInterval['start'].getTime() + (gameTime * 1000));

    let secondsLeft = Math.ceil((timeInterval.finish.getTime() - new Date().getTime()) / 1000)
    if (secondsLeft <= 0) { 
    return 0;
    } else {
    return secondsLeft;
    };
};


let greetingType;
    let userDate = new Date();
    let hour = userDate.getHours();
    if (hour > 5 && hour <= 12 ){
        greetingType = 'Buenos días';
    } else if (hour > 12 && hour <= 19) { 
        greetingType = 'Buenas tardes';
    } else {
        greetingType = 'Buenas noches';
    };


const pointsRanking = [
        {player: 'Nathan Drake', guessed: 14},
        {player: 'Mario & Luigi', guessed: 5},
        {player: 'Master Chief', guessed: 18},
        {player: 'Captain Price', guessed: 20},
        {player: 'Artur Morgan', guessed: 12},
        {player: 'Cloud Strife', guessed: 9},
        {player: 'Umbasa', guessed: 26},
        {player: 'Samus Aran', guessed: 24},
];

const pasaPalabra = () => {

console.log(` 
     _____  _______ _______ _______  _____  _______        _______ ______   ______ _______  |
    |_____] |_____| |______ |_____| |_____] |_____| |      |_____| |_____] |_____/ |_____|  |
    |       |     | ______| |     | |       |     | |_____ |     | |_____] |    ╲_ |     |  ·

`);

    if (playerData.name) {

        alert (`▁ ▁ ▂ ▃ ▄ ▅ ▆ ✪  P A S A P A L A B R A  ✪ ▆ ▅ ▄ ▃ ▂ ▁ ▁


    ⚠️ En cuando hagas clic en [ACEPTAR] el juego empezará y se
    pondrá en marcha la cuenta a atrás. Dispones de ${gameTime} segundos.
                                    ¡Vamos allá! 
▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁ `);

console.log(`
                             _    ____ ___ ____    ____ ___ ____ ____ ___ |
                             |    |___  |  [__     [__   |  |__| |__/  |  |
                             |___ |___  |  ___]    ___]  |  |  | |  ╲  |  ·      
`);

    gameboardStatus();

    gameStart();

    };

    if (!playerData.name) {

    const nickname = prompt (` ▁ ▁ ▂ ▃ ▄ ▅ ▆ ✪  P A S A P A L A B R A  ✪ ▆ ▅ ▄ ▃ ▂ ▁ ▁

         ${greetingType}. Por favor, introduce un 👤 NICKNAME

   (Piensa en uno guay, aparecerá en un ranking si no abandonas)
 ▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁
     `);

    if (nickname === null) {
        cancelFarewell();

    } else if (!nickname || !isNaN(nickname)) {
        alert ('Por favor, introduce un NOMBRE DE JUGADOR válido. No puedes estar vacío o contener solo números.')
        pasaPalabra();

    } else {
        playerData.name = nickname;
        alert (` ▁ ▁ ▂ ▃ ▄ ▅ ▆ ✪  P A S A P A L A B R A  ✪ ▆ ▅ ▄ ▃ ▂ ▁ ▁

                  Bienvenido, 👤 ${playerData.name}. ¡Empieza el juego!
        
              📜 A continuación, verás las reglas en pantalla.
        ▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁ `);

        console.log(`

    ╔════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╗ 
            ═══════════════════════════════════════════ ✪ REGLAS DE JUEGO ✪ ═══════════════════════════════════════════
    ╠════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╣                                                                                                                               
       Hay Ⓟ ${wordsInGame} palabras en juego que debes adivinar, según el enunciado que haga el sistema.
    ║                                                                                                                            ║                                                                                                                            
        ➀ Cada vez que aciertes una palabra, se sumará un acierto a tu marcador.
    ║                                                                                                                            ║
        ➁ Si fallas una palabra o la dejas en blanco, no se restarán puntos, pero ya no podrás llevarte el GRAN PREMIO. 
    ║                                                                                                                            ║
        ➂ Si quieres PASAR EL TURNO de una letra, introduce "${passKeyword.toUpperCase()}" y esta se reservará para la siguiente ronda.
    ║                                                                                                                            ║
        ➃ Si quieres RENDIRTE, introduce "${finishKeyword.toUpperCase()}" y la partida acabará. Verás tus aciertos, pero no entrarás en el ranking.
    ║                                                                                                                            ║
        ➄ Piensa y escribe rápido. Dispones de solo ${gameTime} segundos para completar el juego.          
    ╚════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╝
        `);



        alert (`▁ ▁ ▂ ▃ ▄ ▅ ▆ ✪  P A S A P A L A B R A  ✪ ▆ ▅ ▄ ▃ ▂ ▁ ▁


    ⚠️ En cuando hagas clic en [ACEPTAR] el juego empezará y se
    pondrá en marcha la cuenta a atrás. Dispones de ${gameTime} segundos.
                                    ¡Vamos allá! 
        ▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁ `);
    
        console.log(`
                                     _    ____ ___ ____    ____ ___ ____ ____ ___ |
                                     |    |___  |  [__     [__   |  |__| |__/  |  |
                                     |___ |___  |  ___]    ___]  |  |  | |  ╲  |  ·      
        `);

        timeInterval.start = new Date();
        timer();
        gameboardStatus();
        gameStart();
    };
};
};


const gameStart = () => {
 
    let gameRunner = new Promise(opt = (keepPlaying, finishGame) => {
        
        questionPacks.forEach(letter => {

        letter.status = prompt(letter.question[playerData.questionsIdForGame], playerData.name === 'admin' ? letter.answer[playerData.questionsIdForGame] : '');

            if (timer() <= 0) {
                finishGame();
                gameRunner.then (
                    '',
                    opt = () => {
                        timeOver();
                    });

            } else if (letter.status.toLowerCase() === letter.answer[playerData.questionsIdForGame]) {
                letter.status = '🟢';
                keepPlaying()
                gameboardStatus();
                playerData.points ++;
                
            } else if (letter.status.toLowerCase() === passKeyword) {
                letter.status = '🔵';
                keepPlaying()
                gameboardStatus();
            
            } else if (letter.status.toLowerCase() === finishKeyword) {
                letter.status = null;
                finishGame(); 
                gameRunner.then (
                    '',
                    opt = () => {
                        cancelFarewell();
                    });
            } else {
                letter.status = '🔴';
                keepPlaying();
                gameboardStatus();
            };
        });
        
    });

    if(questionPacks[0].status !== null) {
        gameRunner.then (
            '',
            opt = () => {
                cancelFarewell();
            }
        );

    } else {
        gameRunner.then (
            '',
            opt = () => {
                fullStop = () => '';
            }
        );
    };

    winnerChecker();
};


const gameboardStatus = () => {

    const gameBoardMarks = (letter) => {

        if (!isNaN(questionPacks[letter].status)) {
            return '⚪';
        } else {
           return questionPacks[letter].status;
        };

    };

    return console.log(`

                              ⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪
                             ⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪ (A)${gameBoardMarks(0)} ⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪
                            ⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪ (Z)${gameBoardMarks(25)} ⚪⚪ (B)${gameBoardMarks(1)} ⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪
                            ⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪ (Y)${gameBoardMarks(24)} ⚪⚪⚪⚪⚪⚪ (C)${gameBoardMarks(2)} ⚪⚪⚪⚪⚪⚪⚪⚪⚪
                            ⚪⚪⚪⚪⚪⚪⚪⚪ (X)${gameBoardMarks(23)} ⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪ (D)${gameBoardMarks(3)} ⚪⚪⚪⚪⚪⚪⚪
                            ⚪⚪⚪⚪⚪⚪ (V)${gameBoardMarks(22)} ⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪ (E)${gameBoardMarks(4)} ⚪⚪⚪⚪⚪
                            ⚪⚪⚪⚪ (U)${gameBoardMarks(21)} ⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪ (F)${gameBoardMarks(5)} ⚪⚪⚪
                            ⚪⚪ (T)${gameBoardMarks(20)} ⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪ (G)${gameBoardMarks(6)} ⚪
                                
                             ◄ ⚪⚪ P ⚪ A ⚪ S ⚪ A ⚪ P ⚪ A ⚪ L ⚪ A ⚪ B ⚪ R ⚪ A ⚪⚪ ► 
                            
                            ⚪⚪ (S)${gameBoardMarks(19)} ⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪ (H)${gameBoardMarks(7)} ⚪
                            ⚪⚪⚪⚪ (R)${gameBoardMarks(18)} ⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪ (I)${gameBoardMarks(8)} ⚪⚪⚪
                            ⚪⚪⚪⚪⚪⚪ (Q)${gameBoardMarks(17)} ⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪ (J)${gameBoardMarks(9)} ⚪⚪⚪⚪⚪
                            ⚪⚪⚪⚪⚪⚪⚪⚪ (P)${gameBoardMarks(16)} ⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪ (K)${gameBoardMarks(10)} ⚪⚪⚪⚪⚪⚪⚪
                            ⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪ (O)${gameBoardMarks(15)} ⚪⚪⚪⚪⚪⚪ (O)${gameBoardMarks(11)} ⚪⚪⚪⚪⚪⚪⚪⚪⚪
                            ⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪ (Ñ)${gameBoardMarks(14)} ⚪⚪ (M)${gameBoardMarks(12)} ⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪
                             ⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪ (N)${gameBoardMarks(13)} ⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪
                              ⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪⚪
                                                ⏱️ QUEDAN ${timer()} SEGUNDOS
                            
`);
};


const winnerChecker = () => {

    const checkerLoop = (lookFor, describeAs, discartAs, putIn) => {
        for (let i = 0; i < questionPacks.length; i++) {
            questionPacks[i].status === lookFor ? putIn.push(describeAs) : putIn.push(discartAs);
        };
    };

    cancelCheck = [];
        checkerLoop(null, 'cancelled', 'not cancelled', cancelCheck);
        const anyCancelled = (cancelStatus) => cancelStatus === 'cancelled';
    
    passedCheck = [];
        checkerLoop('🔵', 'passed', 'not passed', passedCheck);
        const nonePassed = (passedStatus) => passedStatus === 'not passed';

    guessedCheck = [];
        checkerLoop('🟢', 'guessed', 'not guessed', guessedCheck);
        const allGuessed = (guessedStatus) => guessedStatus === 'guessed';
    
    if (guessedCheck.every(allGuessed)) {

console.log(` 
                             _____  _______ _______ _______  _____  _______        _______ ______   ______ _______  
                            |_____] |_____| |______ |_____| |_____] |_____| |      |_____| |_____] |_____/ |_____|  
                            |       |     | ______| |     | |       |     | |_____ |     | |_____] |    ╲_ |     |  

                             L A   M A D R E   Q U E   T E   P A R I Ó,   ¡ H A S   A C E R T A D O   T O D A S !
                            _  _ ____ ____    ____ ____ _  _ ____ ___  ____    _  _ _  _    ____ ____ ____ ____  |
                            |__| |__| [__     | __ |__| |╲ | |__| |  ╲ |  |    |  | |╲ |    |    |__| |___ |___  |
                            |  | |  | ___]    |__] |  | | ╲| |  | |__/ |__|    |__| | ╲|    |___ |  | |    |___  ·


`);
        alert(`▁ ▁ ▂ ▃ ▄ ▅ ▆ ✪  P A S A P A L A B R A  ✪ ▆ ▅ ▄ ▃ ▂ ▁ ▁

        ¡¡ENHORABUENA, DICCIONARIO AMBULANTE!! 
        ¡has acertado todas con ${timer()} segundos de margen!
        
        ☕ Si eres profe de Barcelona, estás invitad@ a un café.
        🤷‍♂️ Si eres profe de Madrid o Málaga... ¯╲_(ツ)_/¯

 ${playerData.name === 'admin'? '🚨 ¡OYEEEE! ¡has usado el truco del admin!, acuerdate del trato ;)' :''}

▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁ `);

        ranking();

        } else if (timer() <= 0) {

        timeOver();
        
        } else if (cancelCheck.some(anyCancelled)) {

            cancelFarewell();

        } else if (passedCheck.every(nonePassed)) {  

    
    alert (`▁ ▁ ▂ ▃ ▄ ▅ ▆ ✪  P A S A P A L A B R A  ✪ ▆ ▅ ▄ ▃ ▂ ▁ ▁

                       ¡HAS COMPLETADO EL PASAPALABRA! 
                    🥲 No te has llevado el GRAN PREMIO...
                       pero ¡al menos no te has rendido!

    ✔ ${playerData.points < 1 ? "No has tenido ningún acierto." : "has acertado " + playerData.points + " palabras"}. En pantalla verás el ranking.
▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁ `);

        ranking();

        } else {

        otherRound();

        };
};


const otherRound = () => {

    alert (`▁ ▁ ▂ ▃ ▄ ▅ ▆ ✪  P A S A P A L A B R A  ✪ ▆ ▅ ▄ ▃ ▂ ▁ ▁

                         💪 ¡A POR OTRA RONDA!

                 ✔ ${playerData.points < 1 ? "No has tenido ningún acierto aún." : "Hasta ahora, has acertado " + playerData.points + " palabras."}
▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁ `);

    let gameRound2 = new Promise(opt = (keepPlaying, finishGame) => {
        
        questionPacks.forEach(letter => {

        if (letter.status === '🔵') {

        letter.status = prompt(letter.question[playerData.questionsIdForGame]);

            if (timer() <= 0) {
                finishGame();
                gameRound2.then (
                    '',
                    opt = () => {
                        timeOver();
                    });

            } else if (letter.status.toLowerCase() === letter.answer[playerData.questionsIdForGame]) {
                letter.status = '🟢';
                keepPlaying()
                gameboardStatus();
                playerData.points ++;
                
            } else if (letter.status.toLowerCase() === passKeyword) {
                letter.status = '🔵';
                keepPlaying()
                gameboardStatus();
            
            } else if (letter.status.toLowerCase() === finishKeyword) {
                letter.status = null;
                finishGame();
                gameRound2.then (
                    '',
                    opt = () => {
                        cancelFarewell();
                    });

            } else {
                letter.status = '🔴';
                keepPlaying();
                gameboardStatus();
            };
        };
        });
        
    });

        gameRound2.then (
            '',
            opt = () => {
                cancelFarewell();
            }
        );

    winnerChecker();
};


const cancelFarewell = () => {
    alert (`▁ ▁ ▂ ▃ ▄ ▅ ▆ ✪  P A S A P A L A B R A  ✪ ▆ ▅ ▄ ▃ ▂ ▁ ▁

                            ¡HAS CANCELADO EL JUEGO!

                            ✔ ${playerData.points < 1 ? "No has tenido ningún acierto." : "has acertado " + playerData.points + " palabras."}
▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁ `);

    console.log(`

                         ______  _______ _______ _______       _____   _    _ _______  ______ |
                         |  ____ |_____| |  |  | |______      |     |  ╲   /  |______ |_____/ |
                         |_____| |     | |  |  | |______      |_____|   ╲ /   |______ |    ╲_ · 

                                             ${playerData.points < 1 ? "No has tenido ningún acierto." : "has acertado " + playerData.points + " palabras."}
    `);
    wannaPlayAgain();
};


const timeOver = () => {

    alert (`▁ ▁ ▂ ▃ ▄ ▅ ▆ ✪  P A S A P A L A B R A  ✪ ▆ ▅ ▄ ▃ ▂ ▁ ▁

                          ¡TE HAS QUEDADO SIN TIEMPO!

                          ✔ ${playerData.points < 1 ? "No has tenido ningún acierto." : "has acertado " + playerData.points + " palabras."}
▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁ `);

console.log(`

                        ______  _______ _______ _______       _____   _    _ _______  ______ |
                        |  ____ |_____| |  |  | |______      |     |  ╲   /  |______ |_____/ |
                        |_____| |     | |  |  | |______      |_____|   ╲ /   |______ |    ╲_ · 

                                             ${playerData.points < 1 ? "No has tenido ningún acierto." : "has acertado " + playerData.points + " palabras."}
`);
    ranking();
};


const ranking = () => {

console.log(`
    ______ _______  __   _ _     _ _____ __   _  ______
    |_____/ |_____| | ╲  | |____/    |   | ╲  | |  ____ ·
    |    ╲_ |     | |  ╲_| |    ╲_ __|__ |  ╲_| |_____| ·
        `);    
    
    pointsRanking.push({player: playerData.name, guessed: playerData.points}),
    console.table(pointsRanking.sort((a, b) => (b['guessed'] - a['guessed'])));

    wannaPlayAgain();
};


const wannaPlayAgain = () => {

    const playAgain = confirm(`▁ ▁ ▂ ▃ ▄ ▅ ▆ ✪  P A S A P A L A B R A  ✪ ▆ ▅ ▄ ▃ ▂ ▁ ▁

    ${playerData.name}, ¿quieres volver a jugar?
    ▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁ `);
    
    if(playAgain) {


    RestartCleaner();
    pasaPalabra();
    
    } else {

            console.log(`

                                                    ¡ H A S T A    L A    P R Ó X I M A !
        _______ _     _ _______ __   _ _     _ _______      _______  _____   ______       _____         _______ __   __ _____ __   _  ______  |
           |    |_____| |_____| | ╲  | |____/  |______      |______ |     | |_____/      |_____] |      |_____|   ╲_/     |   | ╲  | |  ____  |
           |    |     | |     | |  ╲_| |    ╲_ ______|      |       |_____| |    ╲_      |       |_____ |     |    |    __|__ |  ╲_| |_____|  ·
            `);
    

    }; 

    clearInterval()
};


const RestartCleaner = () => {

    playerData.questionsIdForGame = questionPackSelector();
    playerData.points = 0;

    questionPacks.forEach(letter => { letter.status = 0})

    timeInterval.start = new Date();
    timeInterval.finish = new Date(new Date().getTime() + (gameTime * 1000));
};

pasaPalabra();
