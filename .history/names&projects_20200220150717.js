
import { getUserNameAndProjectCounts } fro
// put all users from "userNames" array in api function 
const writeUserNamesAndProjectCounts = (name) => {
    return name.map( x =>  getUserNameAndProjectCounts(x) );
};
