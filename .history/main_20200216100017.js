import  userNames  from "./users.js";
import { createTabele } from "./tabele.js";

createTabele();
userNames(); // ['yyx990803', 'toddmotto', 'johnpapa', 'angular', 'facebook', 'vuejs']
const cos  = [`dupa`, `oko`, `noga`, `oko`, `dick`,`riko`]




//wypisuje komórkę w tabelę
const itWtiteTabeleCells = () => {
    let i = 0
    for(i=0; i<6; i++){
    const value = document.getElementById(`tr${i}`);
    const left = value.insertCell(2);

       left.innerHTML = `${cos[i]}`;
    };
};

itWtiteTabeleCells();


