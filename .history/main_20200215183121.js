import  userNames  from "./users.js";
import tabela from "./tabele.js";

function CreateTabele(nr, ) {

     tab = document.querySelector(".my-table");
     tabela = tab.insertRow(0);    

    const topLeft = tabela.insertCell(0);
    const topMiddle = tabela.insertCell(1);
    const TopRight = tabela.insertCell(2);

    topLeft.innerHTML = "USERNAME"
    topMiddle.innerHTML = "COUNTS"
    TopRight.innerHTML = "STARS"


};

CreateTabele();


console.log(tabela);