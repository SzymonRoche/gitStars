
const tabela = ["dick", "rick","majk"]


function CreateTabele() {
    
    let i = 0;
    for(i = 0; i<7; i++){

        const tab = document.querySelector(".my-table");
        const tabela = tab.insertRow(1);  
        tabela.setAttribute("id", `tr${i}`);  

        const topLeft = tabela.insertCell(0);
        const topMiddle = tabela.insertCell(1);
        const TopRight = tabela.insertCell(2);

            topLeft.innerHTML = ""
            topMiddle.innerHTML = ""
            TopRight.innerHTML = ""
}
    };

CreateTabele();



export default  => {
    CreateTabele()
} 