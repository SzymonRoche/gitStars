import { getUserNameAndProjectCounts } from './main.js'
import userNames from './users.js'
// pushed all users from "userNames" array in api function 
 
const writeUserNamesAndProjectCounts = (name) => {
    return name.map( user =>  getUserNameAndProjectCounts(user) );
};
writeUserNamesAndProjectCounts(userNames)

export { writeUserNamesAndProjectCounts }; 