// > Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// > Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// > Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.Infine usando la destrutturazione 
//     creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

//creo l'array di squadre


const squadreCalcio = [
    { 
        nome: "Juventus", 
        puntiFatti: 0, 
        falliSubiti: 0 
    },

    { 
        nome: "Inter", 
        puntiFatti: 0, 
        falliSubiti: 0 
    },

    { 
        nome: "Milan", 
        puntiFatti: 0, 
        falliSubiti: 0 
    },

    { 
        nome: "Napoli", 
        puntiFatti: 0, 
        falliSubiti: 0 
    },

    { 
        nome: "Roma", 
        puntiFatti: 0, 
        falliSubiti: 0 
    },

    { 
        nome: "Lazio", 
        puntiFatti: 0, 
        falliSubiti: 0 
    },

    { 
        nome: "Fiorentina", 
        puntiFatti: 0, 
        falliSubiti: 0 
    },

    { 
        nome: "Atalanta", 
        puntiFatti: 0, 
        falliSubiti: 0 
    },

    { 
        nome: "Torino", 
        puntiFatti: 0, 
        falliSubiti: 0 
    },

    { 
        nome: "Sampdoria", 
        puntiFatti: 0, 
        falliSubiti: 0 
    }
];

//creo la funzione per generare numeri random

function generaRandom(min, max) {
    num = Math.floor(Math.random() * ((max + 1) - min)) + min;
    return num;
};


//chiamo la funzione per riassegnare i valori di punti fatti e falli subiti 

squadreCalcio.forEach((squadra) => {
    squadra.puntiFatti = generaRandom(1, 30);
    squadra.falliSubiti = generaRandom(1, 30);
});

console.log(squadreCalcio);




//destrutturo e creo un nuovo array con solo nomi e falli subiti 


const newSquadraArray = squadreCalcio.map(({nome, falliSubiti}) => {
    return {nome, falliSubiti};
});


//stampo in console 

console.log(newSquadraArray)
