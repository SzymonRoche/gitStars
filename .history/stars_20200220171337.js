import userNames from './users.js'


const stars = ["kwejk"]

let numberOfPage = 1;


constuserNames.map( x =>  )


const starsApi = async (name) => {
        
        
      //  const userName = 'johnpapa'
        const apiUrl = `https://api.github.com/users/${name}/repos?page=${numberOfPage}&per_page=100%E2%80%9D`

        const response = await fetch(apiUrl);
        const json = await response.json();
        const res = await json[0]
        const stars = await console.log(res.stargazers_count); 
        console.log(res)
        
};

starsApi('vuejs');
console.log(userNames())






// tenary (isMember ? "$2.00" : "$10.00")
// nullish coalescing operator
//                                                               stargazers_count    <--- tego szukamy
 

export { stars }; 