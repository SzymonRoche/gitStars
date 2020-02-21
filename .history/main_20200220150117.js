import userNames from './users.js'
import { createTabele } from './tabele.js'



// Fetch login and projects from github api and write it in tabele
const  getUserNameAndProjectCounts = async ( user ) => { 
    let gitHubApi = `https://api.github.com/users/${user}`

   const response = await fetch(gitHubApi);
   const json = await response.json();
   const login = await json.login;
   const projectCounts = await json.public_repos;


    const tab = document.querySelector(".my-table");
    const row = tab.insertRow(1);
    const userName = row.insertCell(0);
    const projectsCounts = row.insertCell(1);
    const starts = row.insertCell(2);

     userName.innerHTML =  login;
     projectsCounts.innerHTML =  projectCounts;
     starts.innerHTML =  "NEW stars"
    

};

//it put all users from "userNames" array in api function 
const writeUserNamesAndProjectCounts = (name) => {
    return name.map( x =>  getUserNameAndProjectCounts(x) );
};


writeUserNamesAndProjectCounts(userNames());




