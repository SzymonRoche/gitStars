// pushed all users from "userNames" array in api function 
impor

const writeUserNamesAndProjectCounts = (name) => {
    return name.map( user =>  getUserNameAndProjectCounts(user) );
};
