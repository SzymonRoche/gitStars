import  userNames  from "./users.js";
import tabela from "./tabele.js";

function CreateTabele(nr) {

     consttab = document.querySelector(".my-table");
     tabela = tab.insertRow(nr);    

     topLeft = tabela.insertCell(0);
     topMiddle = tabela.insertCell(1);
     TopRight = tabela.insertCell(2);

    topLeft.innerHTML = "USERNAME"
    topMiddle.innerHTML = "COUNTS"
    TopRight.innerHTML = "STARS"


};

CreateTabele(0);
CreateTabele(1);


console.log(tabela);