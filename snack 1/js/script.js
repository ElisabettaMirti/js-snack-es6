// ceo l'array con i nomi degli ospiti

const listaVip = [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni',  'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello'];


//uso un map per creare un array di oggetti con i nomi, l'ordine giusto, e il loro tavolo

const listaInvitati = listaVip.map((guest, indice) => ({
    nome: guest,
    posto: indice + 1,
    tavolo: "Tavolo vip"
}))



//stampo in console
console.log(listaInvitati);

