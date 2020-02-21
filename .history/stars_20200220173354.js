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
        const res = await json
        const stars = await console.log(res.stargazers_count); 
                 const addStars =  await ( res ) => { 
                           res.map(user => ({[id]: stargazers_count}))
                           //  par.reduce((obj1, obj2) => Object.assign(obj1, obj2), {})
                 };

        addStars(res)

        
        
        console.log(res);
        
};

starsApi()
//const toWrite = ( ) => userNames().map( x => starsApi(x) );
//toWrite();









// tenary (isMember ? "$2.00" : "$10.00")
// nullish coalescing operator
//                                                               stargazers_count    <--- tego szukamy
 

export { stars }; 