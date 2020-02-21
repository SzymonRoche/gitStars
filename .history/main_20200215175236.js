import  userNames  from "./users.js";
import tabela from "./tabele.js";

function CreateTabele() {
    const tab = document.querySelector(".my-table");
    tab.table.insertRow(0);
    tab.innerHTML = "dupa"

};

CreateTabele();


console.log(tabela);