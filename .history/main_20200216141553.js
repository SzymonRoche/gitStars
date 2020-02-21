import  usersNamesArray  from "./users.js";
import { createTabele } from "./tabele.js";

createTabele();
 // ['yyx990803', 'toddmotto', 'johnpapa', 'angular', 'facebook', 'vuejs']
const cos  = [`dupa`, `oko`, `noga`, `oko`, `dick`,`riko`]
const repoUrl = `https://api.github.com/users/johnpapa`
const repoCounts = []




//tworzy zapytanie do githuba o ilość repo usera
const requestApi = async () => {
    const response = await fetch(repoUrl);
    const json = await response.json();
    const res = await json.public_repos; 
    
   await repoCounts.unshift(res)


    itWtiteTabeleCells(repoCounts)
}

requestApi();