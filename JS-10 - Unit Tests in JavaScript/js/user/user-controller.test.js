const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });

//## Part 3: Implement UserController test

//1. Implement 1 test for the *add* function that verifies a user that is not in the users' list.
test('add user to userController', () => {
  let user = new User(5678,"Milo", "milo@generation.org");
  userController.add(user);    
  expect(userController.getUsers()).toContain(user);
});

//2. Implement 1 test for the *remove* function that verifies a user that is not in the users' list.
test('remove user to userController', () => {    
  let user = new User(5678,"Milo", "milo@generation.org");    
  userController.remove(user);
  expect(userController.users).not.toContain(user);
});

//3. Implement 2 unit tests for the *findByEmail* function.
test('find user by email ', () => {
  userController.findByEmail('santiago@generation.org');
  expect(userController.findByEmail('santiago@generation.org')).toEqual({"email": "santiago@generation.org", "id": 1234, "name": "Santiago"});
});

//4. Implement 2 unit tests for the *findById* function.
test('find user by Id', () => {
  userController.findById(1234);
  expect(userController.findById(1234)).toEqual({"email": "santiago@generation.org", "id": 1234, "name": "Santiago"});
  });
