const stars = ["kwejk"]

let numberOfPage = 1;
const apiUrl = `api.github.com/users/johnpapa/repos?page=${numberOfPage}&per_page=100%E2%80%9D`

const starsApi = async  () => {
    const response = await fetch(apiUrl)
    const res = await  console.log(res.jason())
    const catch = console.log("jakiś pł")
    
}
starsApi();

export { stars }; 