const userNames = () => {
    // All users that you need to display. 
    return ['yyx990803', 'toddmotto', 'johnpapa', 'angular', 'facebook', 'vuejs']
};

let UsersNamesArray = []

  UsersNamesArray.unshift(...userNames())

  console.log(UsersNamesArray[1])

export default () => {
    userNames
};

