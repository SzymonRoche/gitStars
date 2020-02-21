import  userNames  from "./users.js";
import { createTabele } from "./tabele.js";

createTabele();


const value = document.getElementById("tr5");
const left = value.insertCell(2);
value.appendChild(left);
    left.innerText = "aaa"

