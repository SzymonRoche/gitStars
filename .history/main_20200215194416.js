import  userNames  from "./users.js";
import { createTabele } from "./tabele.js";

createTabele();
userNames();

//wpisuje wartości w tabelę

const itWtiteTabeleCells = (cellNumber, trNumber) => {

    const value = document.getElementById(`tr${trNumber}`);
    const left = value.insertCell(-1);
    
        left.innerHTML = `New cell${cellNumber}`;
};

itWtiteTabeleCells(1, 1);
itWtiteTabeleCells(1, 1);
itWtiteTabeleCells(1, 1);
