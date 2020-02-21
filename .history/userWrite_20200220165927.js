import { getUserNameAndProjectCounts}

// pushed all users from "userNames" array in api function 
 
const writeUserNamesAndProjectCounts = (name) => {
    return name.map( user =>  getUserNameAndProjectCounts(user) );
};


export { writeUserNamesAndProjectCounts }; 