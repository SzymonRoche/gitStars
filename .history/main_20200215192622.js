import  userNames  from "./users.js";
import { createTabele } from "./tabele.js";

createTabele();


const value = document.getElementById("tr2");
const left = value.insertCell(0);
value.appendChild(left);
    left.innerText = "aaa"

