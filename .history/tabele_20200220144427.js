



const createTabele = () => {

    const tab = document.querySelector(".my-table");
    const row = tab.insertRow(1);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(1);

    cell1.innerHTML = "NEW CELL1";
    cell2.innerHTML = "NEW CELL2";
    cell3.innerHTML = "NEW CELL3";

    tab.setAttribute("id", `tr1`);
};



    
export { createTabele };
