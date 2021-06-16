const {
  models: { Address },
} = require("../server/db");

async function createAddresses() {
  const address1 = await Address.create({
    streetAddress1: "123 Boring Rd.",
    streetAddress2: "apt 4D",
    City: "Brooklyn",
    State: "NY",
    Zip: "11210",
    addressType: "MAILING",
    userId: 1,
  });

  const address2 = await Address.create({
    streetAddress1: "123 Something Rd.",
    streetAddress2: "apt 4D",
    City: "Brooklyn",
    State: "NY",
    Zip: "11215",
    addressType: "MAILING",
    userId: 2,
  });

  const address3 = await Address.create({
    streetAddress1: "123 Bore Rd.",
    streetAddress2: "apt 4G",
    City: "Brooklyn",
    State: "NY",
    Zip: "11219",
    addressType: "MAILING",
    userId: 3,
  });
}

module.exports = createAddresses;
