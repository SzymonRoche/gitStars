const userNames = () => {
    // All users that you need to display. 
    return ['yyx990803', 'toddmotto', 'johnpapa', 'angular', 'facebook', 'vuejs']
};

let usersNamesArray = []

  usersNamesArray.unshift(...userNames())
  console.log(usersNamesArray[4])

export default () => {
    usersNamesArray
};
