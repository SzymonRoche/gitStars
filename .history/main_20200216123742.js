import  userNames  from "./users.js";
import { createTabele } from "./tabele.js";

createTabele();
userNames(); // ['yyx990803', 'toddmotto', 'johnpapa', 'angular', 'facebook', 'vuejs']
const cos  = [`dupa`, `oko`, `noga`, `oko`, `dick`,`riko`]




const repoUrl = `https://api.github.com/users/${johnpapa}`

fetch( repoUrl )  
    .then(res => res.json())
    .then(res => console.log(res))
    .then( )
    .catch(err => console.log('wystąpił błąd'))
 




    const userNames = () => ['yyx990803', 'toddmotto', 'johnpapa', 'angular', 'facebook', 'vuejs']

    
    userNames.map(singleUser => console.log(singleUser)) //to dostaniesz w konsoli 6 wyników każdy w stringu





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




