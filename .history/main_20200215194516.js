import  userNames  from "./users.js";
import { createTabele } from "./tabele.js";

createTabele();
userNames();

//wpisuje wartości w tabelę

const itWtiteTabeleCells = (trNumber, cellNumber) => {

    const value = document.getElementById(`tr${trNumber}`);
    const left = value.insertCell(-1);
    
        left.innerHTML = `New cell${cellNumber}`;
};

itWtiteTabeleCells(1, 2);
itWtiteTabeleCells(1, 2);
itWtiteTabeleCells(1, 3);
