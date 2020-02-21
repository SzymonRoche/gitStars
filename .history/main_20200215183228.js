import  userNames  from "./users.js";
import tabela from "./tabele.js";

function CreateTabele(nr) {

     tab = document.querySelector(".my-table");
     tabela = tab.insertRow(nr);    

     topLeft = tabela.insertCell(0);
     topMiddle = tabela.insertCell(1);
     TopRight = tabela.insertCell(2);

    topLeft.innerHTML = "USERNAME"
    topMiddle.innerHTML = "COUNTS"
    TopRight.innerHTML = "STARS"


};

CreateTabele(1);
CreateTabele(2);


console.log(tabela);