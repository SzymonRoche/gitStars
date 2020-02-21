const userNames = () => {
    // All users that you need to display. 
    ['yyx990803', 'toddmotto', 'johnpapa', 'angular', 'facebook', 'vuejs']
};
userNames.map(singleUser => console.log(singleUser)) //to dostaniesz w konsoli 6 wyników każdy w stringu


  
export default () => {
    userNames()
};

