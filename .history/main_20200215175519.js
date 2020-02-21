import  userNames  from "./users.js";
import tabela from "./tabele.js";

function CreateTabele() {
    const tab = document.querySelector(".my-table");
    const tabela = tab.insertRow(0);
    const cell1 = tabela.insertCell(0);
    const cell2 = tabela.insertCell(1);

    cell1.innerHTML = "dick"
    cell1.innerHTML = "rick"


};

CreateTabele();


console.log(tabela);