import { getUserNameAndProjectCounts } from './main.js'
import userNames from './users'
// pushed all users from "userNames" array in api function 
 
const writeUserNamesAndProjectCounts = (name) => {
    return name.map( user =>  getUserNameAndProjectCounts(user) );
};
writeUserNamesAndProjectCounts()

export { writeUserNamesAndProjectCounts }; 