const stars = ["kwejk"]

let numberOfPage = 1;
const apiUrl = `https://api.github.com/users/johnpapa/repos?page=${numberOfPage}&per_page=100%E2%80%9D`

const starsApi = async  () => {
    const response = await fetch(apiUrl)
    const res = await res.jason()
        return console.log(res)
        const response = await fetch(apiUrl);
        const json = await response.json();
        const res = await json.public_repos; 
        const login = await json.login;
}

starsApi();






export { stars }; 