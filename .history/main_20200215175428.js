import  userNames  from "./users.js";
import tabela from "./tabele.js";

function CreateTabele() {
    const tab = document.querySelector(".my-table");
    const tabela = tab.insertRow(0);
    const cell1 = tabela.insertCell(0)
    const cell2 = tabela.insertCell(1)

};

CreateTabele();


console.log(tabela);