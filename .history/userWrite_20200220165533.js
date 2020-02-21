// pushed all users from "userNames" array in api function 
import 

const writeUserNamesAndProjectCounts = (name) => {
    return name.map( user =>  getUserNameAndProjectCounts(user) );
};
