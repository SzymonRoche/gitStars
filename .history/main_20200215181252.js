import  userNames  from "./users.js";
import tabela from "./tabele.js";

function CreateTabele(left, mid, right) {
    const tab = document.querySelector(".my-table");

    const tabela = tab.insertRow(0);
    
    this.left = tabela.insertCell(0);
    this.mid = tabela.insertCell(1);
    const TopRight = tabela.insertCell(2);


    topLeft.innerHTML = "USERNAME"
    topMiddle.innerHTML = "COUNTS"
    TopRight.innerHTML = "STARS"



};

CreateTabele();


console.log(tabela);