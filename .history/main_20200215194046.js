import  userNames  from "./users.js";
import { createTabele } from "./tabele.js";

createTabele();
userNames();

//wpisuje wartości w tabelę

const itWtiteTabeleCells = () => {

    const value = document.getElementById("tr1");
    const left = value.insertCell(0);
    
        left.innerHTML = "New cell${n}`;
};

itWtiteTabeleCells();
itWtiteTabeleCells();
itWtiteTabeleCells();