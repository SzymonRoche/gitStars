import  userNames  from "./users.js";
import tabela from "./tabele.js";

function CreateTabele(nr) {

    for(i = 0; i<7 )
    const tab = document.querySelector(".my-table");
    const tabela = tab.insertRow(nr);    

    const topLeft = tabela.insertCell(0);
    const topMiddle = tabela.insertCell(1);
    const TopRight = tabela.insertCell(2);

    topLeft.innerHTML = "USERNAME"
    topMiddle.innerHTML = "COUNTS"
    TopRight.innerHTML = "STARS"
};



console.log(tabela);