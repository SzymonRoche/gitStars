import userNames from './users.js'


const stars = ["kwejk"]



//api.github.com/users/facebook/repos?page=1&per_page=100%E2%80%9D


const starsApi = async (name, num) => {

        let numberOfPage = num;
        const UUUU = 'johnpapa'
      //  const userName = 'johnpapa'
        const apiUrl = `https://api.github.com/users/${UUUU}/repos?page=${numberOfPage}&per_page=100%E2%80%9D`

        const response = await fetch(apiUrl);
        const json = await response.json();
        
         // ---> szukamy undefined
         
          const starsApiReader =  ( ) => {
                const stargazerCounter =  json.map( ({ stargazers_count }) => (stargazers_count));
                const stargazersCounterSum =  stargazerCounter.reduce((acc, x) => ((acc + x)));
        
                        console.log(stargazerCounter)
                        console.log(stargazersCounterSum)
                if(stargazerCounter.length / 30 =/ 1 ) {num++};
                
                
               //starsApi('name', num);
        };
        starsApiReader()
};

starsApi('name', 1)
//const toWrite = ( ) => userNames().map( x => starsApi(x) );
//toWrite();


// tenary 
// nullish coalescing operator
//                                                               stargazers_count    <--- tego szukamy
 

export { stars }; 