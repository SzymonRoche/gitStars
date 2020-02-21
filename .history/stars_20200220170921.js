import userNames from './users.js'


const stars = ["kwejk"]

let numberOfPage = 1;




const starsApi = async (userName) => {

        const userName = 'johnpapa'
        const apiUrl = `https://api.github.com/users/${userName}/repos?page=${numberOfPage}&per_page=100%E2%80%9D`

        const response = await fetch(apiUrl);
        const json = await response.json();
        const res = await json[0]
        const starts = await console.log(res.stargazers_count); 
        console.log(res)
        
}

starsApi(`facebook`);
console.log(userNames())

// tenary (isMember ? "$2.00" : "$10.00")
// nullish coalescing operator
//                                                               stargazers_count    <--- tego szukamy
 

export { stars }; 