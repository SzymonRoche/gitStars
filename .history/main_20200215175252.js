import  userNames  from "./users.js";
import tabela from "./tabele.js";

function CreateTabele() {
    const tab = document.querySelector(".my-table");
    tab.insertRow(2);
    tab.innerHTML = "dupa"

};

CreateTabele();


console.log(tabela);