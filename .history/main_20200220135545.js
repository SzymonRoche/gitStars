import userNames from './users.js'



const writeUserNamesAndProjectCounts = (name) => {
    name.map(x => x)
};

writeUserNamesAndProjectCounts(userNames());



const user = 'johnpapa';
let gitHubApi = `https://api.github.com/users/${user}`


const  getUserNameAndProjectCounts = async ( name ) => { 
    
   // name.map(x => console.log(x))
   // name.indexOf('johnpapa') // wyświetla index usera

   const response = await fetch(gitHubApi);
   const json = await response.json();
   const login = await json.login;
   const projectCounts = await json.public_repos;

console.log(login);
console.log(projectCounts);

};




getUserNameAndProjectCounts(userNames())


//const nameAndProjectCounts = await json.map(user => ({[user.login]: user.public_repos}));