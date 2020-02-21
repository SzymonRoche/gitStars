const userNames = () => {
    // All users that you need to display. 
    return ['yyx990803', 'toddmotto', 'johnpapa', 'angular', 'facebook', 'vuejs']
};

let usersNamesArray = []

  usersNamesArray.unshift(...userNames())
  
  console.log(userNames().map( x => console.log(x) ))

export default //usersNamesArray // s

