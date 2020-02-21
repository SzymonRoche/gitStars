
import { getUserNameAndProjectCounts } from "./main"
import userNames from "./users.js";

// put all users from "userNames" array in api function 
const writeUserNamesAndProjectCounts = (name) => {
    return name.map( x =>  getUserNameAndProjectCounts(x) );
};


writeUserNamesAndProjectCounts(userNames())

export { };