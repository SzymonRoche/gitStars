import  userNames  from "./users.js";
import tabela from "./tabele.js";

function CreateTabele(2, ) {

     tab = document.querySelector(".my-table");
     tabela = tab.insertRow(0);    

     topLeft = tabela.insertCell(0);
     topMiddle = tabela.insertCell(1);
     TopRight = tabela.insertCell(2);

    topLeft.innerHTML = "USERNAME"
    topMiddle.innerHTML = "COUNTS"
    TopRight.innerHTML = "STARS"


};

CreateTabele();


console.log(tabela);