import  userNames  from "./users.js";
import tabela from "./tabele.js";

function CreateTabele() {
    const tab = document.querySelector(".my-table");
    const tabela = tab.insertRow(0);
    const topLef = tabela.insertCell(0);
    const cell2 = tabela.insertCell(1);
    const cell3 = tabela.insertCell(2);

    cell1.innerHTML = "dick"
    cell2.innerHTML = "rick"
    cell3.innerHTML = "mick"


};

CreateTabele();


console.log(tabela);