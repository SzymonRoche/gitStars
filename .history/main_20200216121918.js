import  userNames  from "./users.js";
import { createTabele } from "./tabele.js";

createTabele();
userNames(); // ['yyx990803', 'toddmotto', 'johnpapa', 'angular', 'facebook', 'vuejs']
const cos  = [`dupa`, `oko`, `noga`, `oko`, `dick`,`riko`]






fetch(`https://api.github.com/users/johnpapa/repos{?type,,per_page,sor`)
    
    .then( res => res.json())
    .then(res => console.log(res))
 










//wypisuje komórkę w tabelę przyjmując nazwę tablicy jako parametr funkcji
const itWtiteTabeleCells = (arrayName) => {
    let i = 0
        for(i=0; i<6; i++){
        const value = document.getElementById(`tr${i+1}`);
        const left = value.insertCell(-1);

            left.innerHTML = `${arrayName[i]}`;
    };
};

itWtiteTabeleCells(cos);




