import  userNames  from "./users.js";
import { createTabele } from "./tabele.js";

createTabele();
userNames();

//wpisuje wartości w tabel
const value = document.getElementById("tr1");
const left = value.insertCell(0);
value.appendChild(left);
    left.innerHTML = "New cell";

