



const createTabele = () => {
    
    let i = 0;
    for(i = 0; i<7; i++){

        const tab = document.querySelector(".my-table");
        const tabela = tab.insertRow(1);  
        tabela.setAttribute(1, `tr3`);  

    };
};



    
export { createTabele };
