const userNames = () => {
    // All users that you need to display. 
    return ['yyx990803', 'toddmotto', 'johnpapa', 'angular', 'facebook', 'vuejs']
};
userNames.map(singleUser => console.log(singleUser)) //to dostaniesz w konsoli 6 wyników każdy w stringu

console.log(userNames())
  
export default () => {
    userNames()
};

