import  userNames  from "./users.js";
import { createTabele } from "./tabele.js";

createTabele();


const value = document.getElementById("tr2");
const left = value.createTHead(`dick`);
value.appendChild(left);
    left.innerText = "aaa"

