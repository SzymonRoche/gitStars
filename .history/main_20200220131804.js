import userNames from './users.js'


console.log(userNames());

const gitHubApi = 'https://api.github.com'


const  getUserNameAndProjectCounts = async ( name ) => { 
    console.log(name.indexof(name[0]))
};


getUserNameAndProjectCounts(userNames)