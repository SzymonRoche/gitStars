import  userNames  from "./users.js";
import { createTabele } from "./tabele.js";

createTabele();
userNames(); // ['yyx990803', 'toddmotto', 'johnpapa', 'angular', 'facebook', 'vuejs']
const cos  = [`dupa`, `oko`, `noga`, `oko`, `dick`]




//wypisuje komórkę w tabelę
const itWtiteTabeleCells = () => {
    let i = 5
    for(i=0; i>0; i--){
    const value = document.getElementById(`tr${i}`);
    const left = value.insertCell(0);

       left.innerHTML = `${cos[i]}`;
    };
};

itWtiteTabeleCells();


