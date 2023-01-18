const flights = [
    { id: 00, to: 'New York', from: 'Barcelona', cost: 700, scale: false },
    { id: 01, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },
    { id: 02, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },
    { id: 03, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },
    { id: 04, to: 'London', from: 'Madrid', cost: 200, scale: false },
    { id: 05, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },
    { id: 06, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },
    { id: 07, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },
    { id: 08, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },
    { id: 09, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false },
];

const userData = new Object();

const userWelcome = () => {
    
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
    
    userData.name = prompt(`${greetingType}, Por favor introduzca su nombre de usuario`);

    if (!userData.name || !isNaN(userData.name)){
        alert('Por favor, introduzca un nombre de usuario válido');
        userWelcome();
     } else {
        alert(`${userData.name}, ISDI AIRLINES le da bienvenida. A continuación verá los vuelos disponibles para hoy`);
    };

};


const showFlightList = (line) => {
    
    console.log(`
--------------------------------- ISDI AIRLINES: VUELOS DEL DÍA ---------------------------------

    `);
    line.forEach((flight) => {
    console.log(`Vuelo ISDI #00${flight.id}, ${flight.scale ? 'con' : 'sin'} escalas. Origen: ${flight.from} | Destino: ${flight.to}. Plazas disponibles desde ${flight.cost}€`);
    }); 

    console.log(`
#################################################################################################
    `);

};


const moreInfoNeeded = () => {
    
    userData['Interested in more info'] = confirm(`${userData.name}, ¿desea ver más información?`);
   !userData['Interested in more info'] ? farewell() : moreFlightInfo();

};


const moreFlightInfo = () => {

    let averageFlightCost = [];

    for ( let i = 0; i < flights.length; i++) {
        averageFlightCost.push(flights[i].cost);
    };  
    
    averageFlightCost = (Math.round(averageFlightCost.reduce((a, b) => a + b) / flights.length) * 100) / 100;

    console.log(`
---------------------------------------- MÁS INFORMACIÓN ----------------------------------------

[COSTE MEDIO]: El coste medio de los vuelos es ${averageFlightCost}€.

    `);

const scaledFlights = flights.filter((flight) => flight.scale);
    console.log(`[VUELOS CON ESCALA]: Hoy hay ${scaledFlights.length} vuelos con escala disponibles. Son estos:`);

    showScaledFlightList(scaledFlights);

};


const showScaledFlightList = (scale) => {

    scale.forEach((flightLine) => {
    console.log(` > Vuelo ISDI #00${flightLine.id}, Origen: ${flightLine.from} | Destino: ${flightLine.to}`);
    }); 
    
    let lastFiveFights = flights.slice(-5);
    lastFlights(lastFiveFights);

};



const lastFlights = (destination) => {
   
    console.log(`
[ÚLTIMOS 5 DESTINOS DEL DÍA]: Estos son nuestros últimos destinos del día con plazas disponibles:`);

    destination.forEach((destinationLine) => {
    console.log(` > Vuelo ISDI #00${destinationLine.id}, DESTINO: ${destinationLine.to} (con origen en ${destinationLine.from})`);
    });

    farewell();

};


function farewell() {

    console.log(`
#################################################################################################

¡Hasta pronto y Gracias por su visita!`);

};

userWelcome();  
showFlightList(flights);
moreInfoNeeded();