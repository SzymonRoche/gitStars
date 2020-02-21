import userNames from './users.js'


const stars = ["kwejk"]

let numberOfPage = 1;

//api.github.com/users/facebook/repos?page=1&per_page=100%E2%80%9D


const starsApi = async (name) => {
        
        const UUUU = 'facebook'
      //  const userName = 'johnpapa'
        const apiUrl = `https://api.github.com/users/${UUUU}/repos?page=${numberOfPage}&per_page=100%E2%80%9D`

        const response = await fetch(apiUrl);
        const json = await response.json();
        const res = await json[0]
        const stars = await console.log(res.stargazers_count); 
        console.log(res);
        
};

starsApi()
//const toWrite = ( ) => userNames().map( x => starsApi(x) );
//toWrite();


const do







// tenary (isMember ? "$2.00" : "$10.00")
// nullish coalescing operator
//                                                               stargazers_count    <--- tego szukamy
 

export { stars }; 