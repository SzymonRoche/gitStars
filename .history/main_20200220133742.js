import userNames from './users.js'

const user = `johnpapa`;
let gitHubApi = `https://api.github.com/users/${user}`







const  getUserNameAndProjectCounts = async ( name ) => { 
    
    name.map(x => console.log(x))
    name.indexOf('johnpapa') // wyświetla index usera

   const response = await fetch(gitHubApi);
   const json = await response.json();
   //const nameAndProjectCounts = await json.map(user => ({[user.login]: user.public_repos}));

   console.log(json.login);
   console.log(json.login);



};


getUserNameAndProjectCounts(userNames())