import  userNames  from "./users.js";
import { createTabele } from "./tabele.js";

createTabele();
userNames(); // ['yyx990803', 'toddmotto', 'johnpapa', 'angular', 'facebook', 'vuejs']



console.log(userNames([1])

//wypisuje komórkę w tabelę
const itWtiteTabeleCells = (trNumber, cellNumber) => {

    const value = document.getElementById(`tr${trNumber}`);
    const left = value.insertCell(-1);
    
        left.innerHTML = `new cell${cellNumber}`;
};

itWtiteTabeleCells(1, 1);
itWtiteTabeleCells(2, 2);
itWtiteTabeleCells(2, 3);
itWtiteTabeleCells(4, 3);
itWtiteTabeleCells(5, 3);

//const addToCell = userNames.map( )