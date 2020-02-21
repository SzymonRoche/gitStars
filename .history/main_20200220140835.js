import userNames from './users.js'





const  getUserNameAndProjectCounts = async ( name ) => { 

    const user = 'angular';
    let gitHubApi = `https://api.github.com/users/${user}`
   // name.map(x => console.log(x))
   // name.indexOf('johnpapa') // wyświetla index usera

   const response = await fetch(gitHubApi);
   const json = await response.json();
   const login = await json.login;
   const projectCounts = await json.public_repos;

console.log(login);
console.log(projectCounts);

};



getUserNameAndProjectCounts()


//const nameAndProjectCounts = await json.map(user => ({[user.login]: user.public_repos}));