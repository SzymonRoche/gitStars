import  userNames  from "./users.js";
import { createTabele } from "./tabele.js";

createTabele();
userNames();

//wpisuje wartości w tabelę

const itWtiteTabeleCells = (n) => {

    const value = document.getElementById("tr1");
    const left = value.insertCell(0);
    
        left.innerHTML = `New cell${n}`;
};

itWtiteTabeleCells(1);
itWtiteTabeleCells();
itWtiteTabeleCells();