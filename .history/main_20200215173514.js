import  userNames  from "./users.js";
import tabela from "./tabele.js";

const tabColumn = document.createElement("tr")
const tabRow = document.createElement("td")
tabRow.innerText = " hello worlds"

const first = document.querySelector("tr")
first.appendChild(tabColumn)
tabColumn.appendChild(tabColumn)
console.log(tabela);