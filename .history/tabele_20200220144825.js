



const createTabele = (i) => {

    const tab = document.querySelector(".my-table");
    const row = tab.insertRow(1);
    const userName = row.insertCell(0);
    const projectsCounts = row.insertCell(1);
    const starts = row.insertCell(2);

    userName.innerHTML = "NEW userName";
    projectsCounts.innerHTML = "NEW projectsCounts";
    starts.innerHTML = "NEW starts";

    td.setAttribute("id", `tr${i}`);
};



    
export { createTabele };
