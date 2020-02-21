import  usersNamesArray  from "./users.js";
import { createTabele } from "./tabele.js";

createTabele();
// ['yyx990803', 'toddmotto', 'johnpapa', 'angular', 'facebook', 'vuejs']

const repoCounts = []


//wypisuje komórkę w tabelę przyjmując nazwę tablicy jako parametr funkcji
const itWtiteTabeleCells = (arrayName) => {
    let i = 0
        for(i=0; i<6; i++){
        const value = document.getElementById(`tr${i+1}`);
        const left = value.insertCell(-1);
            left.innerHTML = `${arrayName[i]}`;
    };
};


//tworzy zapytanie do githuba o ilość repo usera
const requestApi = async () => {
    let i = 0
    
    for(i = 0; i<5; i++){
        const repoUrl = `https://api.github.com/users/${usersNamesArray[i]}`
    const response = await fetch(repoUrl);
    const json = await response.json();
    const res = await json.public_repos; 
}
    await repoCounts.unshift(res)
    await itWtiteTabeleCells(usersNamesArray)
    await itWtiteTabeleCells(repoCounts)
}

requestApi();
