import  userNames  from "./users.js";
import { createTabele } from "./tabele.js";

createTabele();
userNames();

//wpisuje wartości w tabelę

const itWtiteTabeleCells = () => {
    const value = document.getElementById("tr1");
    const left = value.insertCell(1);
    value.appendChild(left);
        left.innerHTML = "New cell";
};

itWtiteTabeleCells();