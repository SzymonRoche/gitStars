import userNames from './users.js'


let gitHubApi = `api.github.com/users/${user}`



console.log()



const  getUserNameAndProjectCounts = async ( name ) => { 

    
    name.map(x => console.log(x))
   console.log(name.indexOf('johnpapa')) // wyświetla index usera




};


getUserNameAndProjectCounts(userNames())