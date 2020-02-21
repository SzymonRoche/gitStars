import userNames from './users.js'





const  getUserNameAndProjectCounts = async ( user ) => { 
    let gitHubApi = `https://api.github.com/users/${user}`

   const response = await fetch(gitHubApi);
   const json = await response.json();
   const login = await json.login;
   const projectCounts = await json.public_repos;

console.log(login);
console.log(projectCounts);

};


const writeUserNamesAndProjectCounts = (uame) => {
    return user.map(userName => console.log(userName))
};

writeUserNamesAndProjectCounts(userNames())

getUserNameAndProjectCounts("angular")


//const nameAndProjectCounts = await json.map(user => ({[user.login]: user.public_repos}));