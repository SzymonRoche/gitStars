import userNames from './users.js'

// Fet
const  getUserNameAndProjectCounts = async ( user ) => { 
    let gitHubApi = `https://api.github.com/users/${user}`

   const response = await fetch(gitHubApi);
   const json = await response.json();
   const login = await json.login;
   const projectCounts = await json.public_repos;

console.log(login);
console.log(projectCounts);

};

//
const writeUserNamesAndProjectCounts = (name) => {
    return name.map( x =>  getUserNameAndProjectCounts(x) );
};


writeUserNamesAndProjectCounts(userNames());

