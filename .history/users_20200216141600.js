const userNames = () => {
    // All users that you need to display. 
    return ['yyx990803', 'toddmotto', 'johnpapa', 'angular', 'facebook', 'vuejs']
};

let usersNamesArray = []

  usersNamesArray.unshift(...userNames())
  console.log(usersNamesArray)

//wypisuje komórkę w tabelę przyjmując nazwę tablicy jako parametr funkcji
const itWtiteTabeleCells = (arrayName) => {
    let i = 0
        for(i=0; i<6; i++){
        const value = document.getElementById(`tr${i+1}`);
        const left = value.insertCell(-1);
            left.innerHTML = `${arrayName[i]}`;
    };
};

itWtiteTabeleCells(cos);




export default () => {
    usersNamesArray
};

