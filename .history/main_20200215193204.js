import  userNames  from "./users.js";
import { createTabele } from "./tabele.js";

createTabele();


const value = document.getElementById("tr5");
const left = value.insertCell(0);
value.appendChild(left);
left.innerHTML = "New cell";

