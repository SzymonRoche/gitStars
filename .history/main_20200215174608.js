import  userNames  from "./users.js";
import tabela from "./tabele.js";

function CreateTabele() {
    var table = document.querySelector("first");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "NEW CELL1";
    cell2.innerHTML = "NEW CELL2";
};
CreateTabele();
console.log(tabela);