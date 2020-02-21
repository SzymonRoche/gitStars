import  userNames  from "./users.js";
import { createTabele } from "./tabele.js";

createTabele();
userNames(); // ['yyx990803', 'toddmotto', 'johnpapa', 'angular', 'facebook', 'vuejs']
const cos  = [`dupa`, `oko`, `noga`, `oko`, `dick`,`riko`]
const repoUrl = `https://api.github.com/users/johnpapa`


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
const repoCounts = []


// fetch( repoUrl )  
//     .then(res => res.json())
//     .then( res => {const num = res.public_repos
//        return console.log(num)})
    
//         .catch(err => console.log('wystąpił błąd'))
 


const request = async () => {
    const response = await fetch(repoUrl);
    const json = await response.json();
    const res = await json.public_repos; 

   return await repoCounts.unshift(res)
   console.log(reoiCounts[1])
    
}

request();

