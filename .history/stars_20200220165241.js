import userNames 
const stars = ["kwejk"]

let numberOfPage = 1;
const apiUrl = `https://api.github.com/users/johnpapa/repos?page=${numberOfPage}&per_page=100%E2%80%9D`


const starsApi = async  () => {

        const response = await fetch(apiUrl);
        const json = await response.json();
        const res = await json[0]
        const starts = await console.log(res.stargazers_count) //działa i kit xD 
        
}

starsApi();

// tenary (isMember ? "$2.00" : "$10.00")
// nullish coalescing operator
//     stargazers_count


export { stars }; 