import  userNames  from "./users.js";
import { createTabele } from "./tabele.js";

createTabele();
userNames(); // ['yyx990803', 'toddmotto', 'johnpapa', 'angular', 'facebook', 'vuejs']
const cos  = [`dupa`, `oko`, `noga`]




//wypisuje komórkę w tabelę
const itWtiteTabeleCells = (trNumber, cellNumber) => {
    i = 0
    for(i=0; i<7; i++){
    const value = document.getElementById(`tr${trNumber}`);
    const left = value.insertCell(-1);
    
       return  left.innerHTML = `${cos[1]}`;
    }
};

itWtiteTabeleCells(1, 1);
itWtiteTabeleCells(2, 2);
itWtiteTabeleCells(2, 3);
itWtiteTabeleCells(4, 3);
itWtiteTabeleCells(5, 3);

