import  userNames  from "./users.js";
import tabela from "./tabele.js";

function CreateTabele() {
    const tab = document.querySelector(".my-table");
    const tabela = tab.insertRow(0);
    const tabela2 = tab.insertRow(1);

    const topLeft = tabela.insertCell(0);
    const topMiddle = tabela.insertCell(1);
    const TopRight = tabela.insertCell(2);

    const topLeft2 = tabela2.insertCell(0);
    const topMiddle2 = tabela2.insertCell(1);
    const TopRight2 = tabela2.insertCell(2);



    topLeft.innerHTML = "USERNAME"
    topMiddle.innerHTML = "COUNTS"
    TopRight.innerHTML = "STARS"

    topLeft2.innerHTML = "USERNAME"
    topMiddle2.innerHTML = "COUNTS"
    TopRight2.innerHTML = "STARS"

};

CreateTabele();


console.log(tabela);