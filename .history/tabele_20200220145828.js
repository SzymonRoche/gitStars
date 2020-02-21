



const createTabele = (i) => {

    const tab = document.querySelector(".my-table");
    const row = tab.insertRow(1);
    const userName = row.insertCell(0);
    const projectsCounts = row.insertCell(1);
    const starts = row.insertCell(2);

    userName.innerHTML =  'login';
    projectsCounts.innerHTML =  'projectCounts';
    starts.innerHTML =  "NEW stars"
    
};



    
export { createTabele };
