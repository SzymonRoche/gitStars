import userNames from './users.js'


const gitHubApi = 'https://api.github.com'






console.log()



const  getUserNameAndProjectCounts = async ( name ) => { 
    name.map(x = console.log )
   console.log(name.indexOf('johnpapa')) // wyświetla index usera
};


getUserNameAndProjectCounts(userNames())