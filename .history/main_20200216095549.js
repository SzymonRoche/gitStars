import  userNames  from "./users.js";
import { createTabele } from "./tabele.js";

createTabele();
userNames(); // ['yyx990803', 'toddmotto', 'johnpapa', 'angular', 'facebook', 'vuejs']
const cos  = [`dupa`, `oko`, `noga`, `oko`, `dick`]




//wypisuje komórkę w tabelę
const itWtiteTabeleCells = (cellNumber) => {
    let i = 0
    for(i=0; i<3; i++){
    const value = document.getElementById(`tr${i}`);
    const left = value.insertCell(-1);

       left.innerHTML = `${cos[i]}`;
    };
};

itWtiteTabeleCells(1);


