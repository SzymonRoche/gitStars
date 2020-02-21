import  userNames  from "./users.js";
import tabela from "./tabele.js";

function CreateTabele() {
    const tab = document.querySelector(".my-table");
    const tabela = tab.insertRow(0);
    const topLeft = tabela.insertCell(0);
    const topMiddle = tabela.insertCell(1);
    const TopRight = tabela.insertCell(2);

    cell1.innerHTML = "USERNAME"
    cell2.innerHTML = "OUNTS"
    cell3.innerHTML = "mick"


};

CreateTabele();


console.log(tabela);