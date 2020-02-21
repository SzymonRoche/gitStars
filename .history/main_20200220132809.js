import userNames from './users.js'


const gitHubApi = 'https://api.github.com'






console.log()



const  getUserNameAndProjectCounts = async ( name ) => { 

    const response = await fetch(gitHubApi);
    const json = await response.json();
    console.log


    name.map(x => console.log(x))
   console.log(name.indexOf('johnpapa')) // wyświetla index usera
};


getUserNameAndProjectCounts(userNames())