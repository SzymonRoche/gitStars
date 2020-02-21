const createTabele = () => {
    
    let i = 0;
    for(i = 0; i<7; i++){

        const tab = document.querySelector(".my-table");
        const tabela = tab.insertRow(1);  
        tabela.setAttribute("id", `tr${i}`);  

        // const topLeft = tabela.insertCell(0);
        // const topMiddle = tabela.insertCell(1);
        // const TopRight = tabela.insertCell(2);

            // topLeft.innerHTML = ""
            // topMiddle.innerHTML = ""
            // TopRight.innerHTML = ""
}
    };

//wypisuje komórkę w tabelę przyjmując nazwę tablicy jako parametr funkcji
const itWtiteTabeleCells = (arrayName) => {
    let i = 0
        for(i=0; i<6; i++){
        const value = document.getElementById(`tr${i+1}`);
        const left = value.insertCell(-1);
            left.innerHTML = `${arrayName[i]}`;
    };
};



export { createTabele, itWtiteTabeleCells };
