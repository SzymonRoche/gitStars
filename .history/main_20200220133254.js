import userNames from './users.js'

const user = `johnpapa`;
let gitHubApi = `https://api.github.com/users/${user}`



console.log()



const  getUserNameAndProjectCounts = async ( name ) => { 
    
    name.map(x => console.log(x))
    name.indexOf('johnpapa')) // wyświetla index usera

   const response = await fetch(gitHubApi);
   const json = await response.json();
   console.log(json)



};


getUserNameAndProjectCounts(userNames())