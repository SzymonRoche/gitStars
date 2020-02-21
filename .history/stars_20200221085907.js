import userNames from './users.js'

const stars = ["kwejk"]


//api.github.com/users/facebook/repos?page=1&per_page=100%E2%80%9D

const starsApi = async (name, num) => {

       // let numberOfPage = num;
      //  const UUUU = 'johnpapa'
      //  const userName = 'johnpapa'
        const apiUrl = `https://api.github.com/users/${name}/repos?page=${num}&per_page=100%E2%80%9D`
        
        const response = await fetch(apiUrl);
        const json = await response.json();
        
        if(Object.keys(json).length % 30 == 0 ); {

          const starsApiReader =  ( ) => {
                const stargazerCounter =  json.map( ({ stargazers_count }) => (stargazers_count));
                const stargazersCounterSum =  stargazerCounter.reduce((acc, x) => ((acc + x)));
                
                        console.log(stargazerCounter)
                        console.log(stargazersCounterSum)
                        
        }
        starsApiReader();}   return };
};

const toWrite = ( ) => {
        userNames().map( x => starsApi(x,3) )
};

toWrite();

// tenary 
// nullish coalescing operator
//                                                               stargazers_count    <--- tego szukamy
 

export { stars }; 