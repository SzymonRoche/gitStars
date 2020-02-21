import userNames from './users.js'


let gitHubApi = 'api.github.com/users/$'






console.log()



const  getUserNameAndProjectCounts = async ( name ) => { 

    const response = await fetch(gitHubApi);
    const json = await response.json();
    console.log(json)


    name.map(x => console.log(x))
   console.log(name.indexOf('johnpapa')) // wyświetla index usera
};


getUserNameAndProjectCounts(userNames())