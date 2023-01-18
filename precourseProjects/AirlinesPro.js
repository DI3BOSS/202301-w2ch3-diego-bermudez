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


 
const logInControl = () => {

    userData.role =  prompt(`${greetingType}. Para continuar, por favor, indíquenos su rol:`, 'Escriba aquí USER o ADMIN');

    if (userData.role === null) {
        farewell();

    } else if (!userData.role) {
        alert('ATENCIÓN: Rol no introducido.');
        logInControl();   

    } else {
        switch (userData.role.toUpperCase()) {

            case 'USER':
                userWelcome();
                break;

            case 'ADMIN':
                adminWelcome();
                break;

            default:            
                alert('ATENCIÓN: Rol no reconocido.');
                logInControl();
                break;
        };
    };
};


const adminWelcome = () => {

    userData.adminAction = prompt(`${greetingType}, ADMIN. ¿Qué deseas hacer?`,'Escriba CREAR o BORRAR');

    if (!userData.adminAction) {
        alert('ATENCIÓN: Acción no introducida');
        adminWelcome();
        
    } else {
        switch (userData.adminAction.toUpperCase()) {

            case 'CREAR':
                const createNewFligths = () => {

                    const newFlight = {};

                    newFlight.id = flights.length -1 +1;
                    newFlight.to = createFlightDestination();
                    newFlight.from = createFlightOrigin();
                    newFlight.cost = createFlightCost();
                    newFlight.scale = createFlightScale();

                    flights.push(newFlight);

                    showFlightList(flights);

                    if (flights.length > 15) {
                    const flightsListLimit = alert ('ATENCIÓN: Límite del listado de vuelos alcanzado. No puedes crear más vuelos');
                    showFlightList(flights);

                    } else {
                    const createMore = confirm(`CREADO vuelo número ${flights.length}. ¿Quieres crear otro nuevo vuelo?`);

                        if (createMore) {
                            createNewFligths();

                        } else {
                            showFlightList(flights);
                            farewell();
                        };
                    };
                };      
                createNewFligths();
                break;
        
            case 'BORRAR':
                const deleteFlights = () => {

                const flightDelete = +prompt('Por favor escribe la ID del vuelo a eliminar');
        
                    const flightId = (index) => index.id === flightDelete;

                    if (!flightDelete || isNaN(flightDelete)) {
                        alert('Por favor, introduzca un ID válido');
                        deleteFlights();
    
                    } else if (flights.findIndex(flightId) === -1) {
                        alert(`El vuelo con ID #${flightDelete} no existe en nuestra base de datos`)
                        deleteFlights();
    
                    } else {

                    flights.splice(flights.findIndex(flightId), 1);
                    alert(`El vuelo con ID #${flightDelete} ha sido correctamente eliminado.`);
                    showFlightList(flights)

                const deleteMore = confirm('¿Desea eliminar otro vuelo?');
                  
                    if (deleteMore) {
                        deleteFlights();

                    } else {
                        showFlightList(flights);
                        farewell();
                    };
                };
                };
                deleteFlights();
                break;
        
            default:          
                alert('ATENCIÓN: Acción no reconocida.');
                adminWelcome();
                break;
        };
    };
};


const userWelcome = () => {
    
    userData.name = prompt(`Bienvenido, USER. Por favor, introduzca su nombre`);

    if (!userData.name || !isNaN(userData.name)){
        alert('Por favor, introduzca un nombre de usuario válido');
        userWelcome();

     } else {
        alert(`${userData.name}, ✈️ ISDI AIRLINES le da bienvenida. A continuación verá los vuelos disponibles para hoy:`);
    };

    showFlightList(flights);
};


const showFlightList = (line) => {
    
    console.log(`
--------------------------------- ISDI AIRLINES: VUELOS DEL DÍA ---------------------------------

    `);

    line.forEach((flight) => {
    console.log(`Vuelo ✈️ ISDI #${flight.id}, ${flight.scale ? 'con' : 'sin'} escalas. 🛫 Origen: ${flight.from} | 🛬 Destino: ${flight.to}. 💺 Plazas disponibles desde ${flight.cost}€`);
    
    }); 

    console.log(`
#################################################################################################
    `);

    if ( userData.role.toUpperCase() === "USER" ) { 
        moreInfoNeeded();
    }; 
};


const moreInfoNeeded = () => {
    
    userData['Interested in more info'] = confirm('¿Desea información adicional?');
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
    console.log(`
[VUELOS CON ESCALA]: Hoy hay ${scaledFlights.length} vuelos con escala disponibles. Son estos:`);

    showScaledFlightList(scaledFlights);
};


const showScaledFlightList = (scale) => {

    scale.forEach((flightLine) => {
    console.log(` > Vuelo ✈️ ISDI #${flightLine.id}, 🛫 Origen: ${flightLine.from} | 🛬 Destino: ${flightLine.to}`);
    }); 
    
    let lastFiveFights = flights.slice(-5);
    lastFlights(lastFiveFights);
};


const lastFlights = (destination) => {
   
    console.log(`
[ÚLTIMOS 5 DESTINOS DEL DÍA]: Estos son nuestros últimos destinos del día con plazas disponibles:`);

    destination.forEach((destinationLine) => {
    console.log(` > Vuelo ✈️ ISDI #${destinationLine.id}, 🛬 DESTINO: ${destinationLine.to} (con 🛫 origen en ${destinationLine.from})`);
    });

    
    userData['Search flights by price'] = confirm(`En pantalla tiene los vuelos con escala y los últimos 5 del día.
¿desea filtrar los vuelos en función del precio que introduzca?`)
    !userData['Search flights by price'] ? farewell() : userLimitCost();
};


const userLimitCost = () => {
    
    userData['Flight limit Cost'] = prompt('Por favor indique el coste máximo que desea pagar');

    if (!userData['Flight limit Cost'] || isNaN(userData['Flight limit Cost'])) {
        alert('Por favor, introduce un valor númerico');
        userLimitCost();

    } else {
       filterFlightsByPrice(userData['Flight limit Cost']);
    };
};


const filterFlightsByPrice = (limit) => {

    alert('BÚSQUEDA CONCLUIDA. Haga clic en aceptar para ver los resultados:');

    const priceFilter = flights.filter((flight) => flight.cost <= limit);

    if (priceFilter.length > 0 ) {
        console.log(`
    
[FILTRO POR PRECIO]: Hay ${priceFilter.length} ${priceFilter.length < 2 ? "vuelo" : "vuelos"} con precio menor o igual al buscado. Son estos:`);
        
        showPriceFilteredFligths(priceFilter);

    } else { 
        console.log(`Lo sentimos. No tenemos vuelos disponibles, para hoy, con un coste igual o inferior a ${userData['Flight limit Cost']}€`);
    };
};


const showPriceFilteredFligths = (cost) => {

    cost.forEach((flightLine) => {
    console.log(` > Vuelo ✈️ ISDI #${flightLine.id}, 🛫 Origen: ${flightLine.from} | 🛬 Destino: ${flightLine.to} | 💸 Precio: ${flightLine.cost}`);
    }); 
    
    farewell();    
};


const createFlightDestination = () => {

    const newFlightDestination =  prompt('Introduce el DESTINO del vuelo');

    if (!newFlightDestination || !isNaN(newFlightDestination)) {
        alert('Por favor, introduce un Destino válido');
        createFlightDestination();

    } else {
        return newFlightDestination;
    };
};


const createFlightOrigin = () => {

    const newFlightOrigin =  prompt('Introduce el ORIGEN del vuelo');

    if (!newFlightOrigin || !isNaN(newFlightOrigin)) {
        alert('Por favor, introduce un Origen válido');
        createFlightOrigin();

    } else {
        return newFlightOrigin;
    };
};


const createFlightCost = () => {

    const newFlightCost =  +prompt('Introduce el COSTE del vuelo');

    if (!newFlightCost || isNaN(newFlightCost)) {
        alert('Por favor, introduce un valor númerico');
        createFlightCost();

    } else {
       return  +newFlightCost;
    };
};


const createFlightScale = () => {

    let newFlightScale =  prompt('¿Este vuelo tendrá escalas? Y / N');

    if (newFlightScale.toUpperCase() === 'Y') {
        return true;

    } else if (newFlightScale.toUpperCase() === 'N') {
        return false;

    } else {
        alert('Por favor, introduce un Y o N');
        createFlightScale();
    };
};


function farewell() {

    console.log(`
#################################################################################################

¡Hasta pronto y Gracias por su visita!`);

};


logInControl();