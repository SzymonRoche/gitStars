import userNames from './users.js'
import { createTabele } from './tabele.js'

createTabele();

// Fetch login and projects from github api
const  getUserNameAndProjectCounts = async ( user ) => { 
    let gitHubApi = `https://api.github.com/users/${user}`

   const response = await fetch(gitHubApi);
   const json = await response.json();
   const login = await json.login;
   const projectCounts = await json.public_repos;

console.log(login);
console.log(projectCounts);

const DisplayLogin = await userName.innerHTML = login;
await DisplayLogin projectsCounts.innerHTML = projectCounts;
await DisplayS starts.innerHTML = "NEW starts";

};

//it put all users from "userNames" array in api function 
const writeUserNamesAndProjectCounts = (name) => {
    return name.map( x =>  getUserNameAndProjectCounts(x) );
};


writeUserNamesAndProjectCounts(userNames());




