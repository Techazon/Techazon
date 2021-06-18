"use strict";
const createUsers = require("../script/users");
const createAddresses = require("../script/createAddress");
const {
  db,
  models: { Product, Category },
} = require("../server/db");

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");

  await createUsers();

  await createAddresses();

  const computers = await Category.create({
    categoryName: "computers",
  });
  const laptops = await Category.create({
    categoryName: "laptops",
  });
  const videoGameConsoles = await Category.create({
    categoryName: "video game consoles",
  });
  const cellPhones = await Category.create({
    categoryName: "cell phones",
  });
  const keyboards = await Category.create({
    categoryName: "keyboards",
  });

  //Products

  const appleG3 = await Product.create({
    productName: "Apple iMacG3",
    stock: 100,
    price: 129999,
    imageUrl:
      "https://cdn.sh04.net/plasticlemag/fit1200,630/5e2843ab17984_test-image-detourage.png",
    categoryId: computers.id,
  });
  const appleIBook = await Product.create({
    productName: "Apple IBook G3",
    stock: 100,
    price: 179999,
    imageUrl:
      "https://www.stuff.tv/sites/stuff.tv/files/styles/main-full-width/public/207450049bli_0.jpg?itok=YRjADERX&timestamp=1505012581",
    categoryId: laptops.id,
  });
  const ibm5150 = await Product.create({
    productName: "IBM 5150",
    stock: 100,
    price: 100099,
    imageUrl:
      "https://www.stuff.tv/sites/stuff.tv/files/styles/main-full-width/public/2076008fcbli_0.jpg?itok=DZtx03VD&timestamp=1505012581",
    categoryId: computers.id,
  });
  const epson = await Product.create({
    productName: "EPSON HX-20 ",
    stock: 100,
    price: 207099,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/8/8d/Epson-hx-20.jpg",
    categoryId: laptops.id,
  });
  const ibmThink = await Product.create({
    productName: "IBM ThinkPad 700C",
    stock: 100,
    price: 507299,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/9/9e/IBM_ThinkPad_700C.jpg",
    categoryId: laptops.id,
  });
  const magnavox = await Product.create({
    productName: "Magnavox Odyssey",
    stock: 100,
    price: 59999,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/0/0f/Magnavox-Odyssey-Console-Set.png",
    categoryId: videoGameConsoles.id,
  });
  const ping = await Product.create({
    productName: "Ping-O-Tronic",
    stock: 100,
    price: 9999,
    imageUrl:
      "https://img.playbuzz.com/image/upload/q_auto:good,f_auto,fl_lossy,w_480,c_limit,dpr_2.5/v1549524215/v67nxgazplirnfzs03z9.jpg",
    categoryId: videoGameConsoles.id,
  });
  const nokia = await Product.create({
    productName: "Nokia 8110",
    stock: 100,
    price: 17999,
    imageUrl:
      "http://www.globalnerdy.com/wp-content/uploads/2012/05/nokia-8110-in-the-matrix.jpg",
    categoryId: cellPhones.id,
  });
  const motorola = await Product.create({
    productName: "Motorola DynaTAC 8000X",
    stock: 100,
    price: 1071299,
    imageUrl: "https://live.staticflickr.com/5546/9407333846_66e4259f06_z.jpg",
    categoryId: cellPhones.id,
  });
  const spaceCadet = await Product.create({
    productName: "Space Cadet",
    stock: 100,
    price: 150099,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/4/47/Space-cadet.jpg",
    categoryId: keyboards.id,
  });
  const maltron = await Product.create({
    productName: "Maltron",
    stock: 100,
    price: 69599,
    imageUrl:
      "https://www.boundlessat.com/core/media/media.nl?id=2929&c=1281905&h=a5fbb7574caab6aa8894",
    categoryId: keyboards.id,
  });

  console.log(`seeded successfully`);
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
