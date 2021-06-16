const {
  models: { User },
} = require("../server/db");

async function createUsers() {
  const craig = await User.create({
    firstName: "Craig",
    lastName: "Johnson",
    email: "craig@johnson.com",
    role: "User",
    password: "123",
  });

  const cynthia = await User.create({
    firstName: "Cynthia",
    lastName: "Erickson",
    email: "cynthia@erickson.com",
    role: "User",
    password: "321",
  });

  const matt = await User.create({
    firstName: "Matt",
    lastName: "Baker",
    email: "matt@baker.com",
    role: "Admin",
    password: "1234",
  });

  const david = await User.create({
    firstName: "David",
    lastName: "Degenstein",
    email: "david@degenstein.com",
    role: "Admin",
    password: "12345",
  });

  const john = await User.create({
    firstName: "John",
    lastName: "Lee",
    email: "john@lee.com",
    role: "Admin",
    password: "123456",
  });

  const ugene = await User.create({
    firstName: "Ugene",
    lastName: "Romashov",
    email: "ugene@romashov.com",
    role: "Admin",
    password: "1234567",
  });

  const peter = await User.create({
    firstName: "Peter",
    lastName: "Jackson",
    email: "peter@jackson.com",
    role: "User",
    password: "12345678",
  });
}
module.exports = createUsers;
