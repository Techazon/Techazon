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
    categoryName: "Computers",
  });
  const laptops = await Category.create({
    categoryName: "Laptops",
  });
  const videoGameConsoles = await Category.create({
    categoryName: "Video Game Consoles",
  });
  const cellPhones = await Category.create({
    categoryName: "Cell Phones",
  });
  const keyboards = await Category.create({
    categoryName: "Keyboards",
  });

  //Products

  const appleG3 = await Product.create({
    productName: "Apple iMacG3",
    stock: 100,
    price: 129999,
    imageUrl:
      "https://media.techeblog.com/images/apple-imac-g3-anniversary.jpg",
    categoryId: computers.id,
    description:
      "The iMac G3, originally released as the iMac, is a series of Macintosh personal computers developed by Apple under the tenure of Apple's interim CEO and cofounder Steve Jobs after his return to the financially troubled company. The iMac was a huge success for Apple, revitalizing the company and influencing competitors' product designs. It played a role in abandoning legacy technologies like the floppy disk, serial ports, and Apple Desktop Bus in favor of Universal Serial Bus. The product line was updated throughout 1998 until 2001 with new technology and colors, eventually being replaced by the iMac G4 and eMac.",
  });
  const appleIBook = await Product.create({
    productName: "Apple IBook G3",
    stock: 100,
    price: 179999,
    imageUrl:
      "https://i.pinimg.com/originals/48/c9/c2/48c9c289b4e83f2179d2b28d0b31fa2b.jpg",
    categoryId: laptops.id,
    description:
      "iBook is a line of laptop computers designed, manufactured, and sold by Apple Computer, Inc. from 1999 to 2006. The line targeted entry-level, consumer and education markets, with lower specifications and prices than the PowerBook, Apple's higher-end line of laptop computers. It was the first mass consumer product to offer Wi-Fi network connectivity, which was then branded by Apple as AirPort.",
  });
  const ibm5150 = await Product.create({
    productName: "IBM 5150",
    stock: 100,
    price: 100099,
    imageUrl: "http://oldcomputers.net/pics/ibm5150.jpg",
    categoryId: computers.id,
    description:
      "The IBM Personal Computer (model 5150, commonly known as the IBM PC) is the first computer released in the IBM PC model line and the basis for the IBM PC compatible de facto standard. Released on August 12, 1981, it was created by a team of engineers and designers directed by Don Estridge in Boca Raton, Florida.  The machine was based on open architecture and a substantial market of third-party peripherals, expansion cards and software grew up rapidly to support it. The PC had a substantial influence on the personal computer market. The specifications of the IBM PC became one of the most popular computer design standards in the world, and the only significant competition it faced from a non-compatible platform throughout the 1980s was from the Apple Macintosh product line. The majority of modern personal computers are distant descendants of the IBM PC.",
  });
  const epson = await Product.create({
    productName: "EPSON HX-20 ",
    stock: 100,
    price: 207099,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/8/88/Epson-hx-20-dt-frontal.jpg",
    categoryId: laptops.id,
    description:
      "The Epson HX-20 (also known as the HC-20) was the first true laptop computer. It was invented in July 1980 by Yukio Yokozawa, who worked for Suwa Seikosha, a branch of Japanese company Seiko (now Seiko Epson), receiving a patent for the invention. It was announced in 1981 as the HC-20 in Japan, and was introduced by Epson in North America as the HX-20 at the 1981 COMDEX computer show in Las Vegas, where it drew significant attention for its portability. It had a mass-market release in July 1982, as the HC-20 in Japan and as the Epson HX-20 in North America. The size of an A4 notebook and weighing 1.6 kg, it was hailed by BusinessWeek magazine as the fourth revolution in personal computing.",
  });
  const ibmThink = await Product.create({
    productName: "IBM ThinkPad 700C",
    stock: 100,
    price: 507299,
    imageUrl:
      "http://www.rugged-portable.com/wp-content/uploads/2014/02/IBM_Thinkpad_700c.jpg",
    categoryId: laptops.id,
    description:
      "The IBM ThinkPad 700 series is the first notebook computer series for the ThinkPad brand that was released by IBM in 1992. The 700 series was released alongside the IBM ThinkPad 300. The 700 series was meant to be top-of-the-line while the 300 series was meant to be a cheaper, cost-effective version.",
  });
  const magnavox = await Product.create({
    productName: "Magnavox Odyssey",
    stock: 100,
    price: 59999,
    imageUrl:
      "https://cdn.vox-cdn.com/thumbor/gxsuu2BEqcpO706LYtSXa5PaFgA=/98x0:544x297/1200x800/filters:focal(98x0:544x297)/cdn.vox-cdn.com/uploads/chorus_image/image/15577849/magnavox-odyssey.0.jpg",
    categoryId: videoGameConsoles.id,
    description:
      "The Magnavox Odyssey is the first commercial home video game console. The hardware was designed by a small team led by Ralph H. Baer at Sanders Associates, while Magnavox completed development and released it in the United States in September 1972 and overseas the following year. The Odyssey consists of a white, black, and brown box that connects to a television set, and two rectangular controllers attached by wires. It is capable of displaying three square dots and one line of varying height on the screen in monochrome black and white, with differing behavior for the dots depending on the game played. Players place plastic overlays on the screen to display additional visual elements for each game, and the one or two players for each game control their dots with the knobs and buttons on the controller in accordance with the rules given for the game. The console cannot generate audio or track scores. The Odyssey console came packaged with dice, paper money, and other board game paraphernalia to accompany the games, while a peripheral controller—the first video game light gun—was sold separately.",
  });
  const ping = await Product.create({
    productName: "Ping-O-Tronic",
    stock: 100,
    price: 9999,
    imageUrl:
      "https://img.playbuzz.com/image/upload/q_auto:good,f_auto,fl_lossy,w_480,c_limit,dpr_2.5/v1549524215/v67nxgazplirnfzs03z9.jpg",
    categoryId: videoGameConsoles.id,
    description:
      "The Ping-O-Tronic (stylized on its logo as ping • o • tronic and also known as Zanussi Ping-O-Tronic or Sèleco Ping-O-Tronic) is a dedicated first-generation home video game console produced by Zanussi, an Italian home appliance company, and released under their Sèleco brand in late-1974 only in Italy. It was the first Italian video game console, excluding Magnavox Odyssey imports and clones.",
  });
  const nokia = await Product.create({
    productName: "Nokia 8110",
    stock: 100,
    price: 17999,
    imageUrl:
      "http://www.globalnerdy.com/wp-content/uploads/2012/05/nokia-8110-in-the-matrix.jpg",
    categoryId: cellPhones.id,
    description:
      "Nokia 8110 is a mobile phone released in 1996. It was announced on September 9, 1996 as the first of Nokia's high-end 8000 series of phones. Its distinctive styling was the first example of a 'slider' form factor. A sliding cover protected the keypad when being carried in the pocket and extended downwards in use, bringing the microphone closer to the mouth. The action of opening the cover also answered an incoming call. The prominent curvature of the case, particularly when open, earned it the nickname banana phone. It was also the first Nokia phone with monochrome graphic LCD.",
  });
  const motorola = await Product.create({
    productName: "Motorola DynaTAC 8000X",
    stock: 100,
    price: 1071299,
    imageUrl: "https://live.staticflickr.com/5546/9407333846_66e4259f06_z.jpg",
    categoryId: cellPhones.id,
    description:
      "DynaTAC is a series of cellular telephones manufactured by Motorola, Inc. from 1983 to 1994. The Motorola DynaTAC 8000X commercial portable cellular phone received approval from the U.S. FCC on September 21, 1983. A full charge took roughly 10 hours, and it offered 30 minutes of talk time. It also offered an LED display for dialing or recall of one of 30 phone numbers. It was priced at $3,995 in 1984, its commercial release year, equivalent to $9,952 in 2020. DynaTAC was an abbreviation of Dynamic Adaptive Total Area Coverage.",
  });
  const spaceCadet = await Product.create({
    productName: "Space Cadet",
    stock: 100,
    price: 150099,
    imageUrl:
      "https://massdrop-s3.imgix.net/img_thread/DfOO5viBSKiFMlbxxA8U_gmk_space_cadet_keyboards_m65_tokyo60_top_ortho_3k.jpg?auto=format&fm=jpg&fit=min&w=796&dpr=1&q=70",
    categoryId: keyboards.id,
    description:
      "The space-cadet keyboard is a keyboard designed by John L. Kulp in 1978 and used on Lisp machines at Massachusetts Institute of Technology (MIT), which inspired several still-current jargon terms in the field of computer science and influenced the design of Emacs. It was inspired by the Knight keyboard, which was developed for the Knight TV system, used with MIT's Incompatible Timesharing System.",
  });
  const maltron = await Product.create({
    productName: "Maltron",
    stock: 100,
    price: 69599,
    imageUrl:
      "https://www.boundlessat.com/core/media/media.nl?id=2929&c=1281905&h=a5fbb7574caab6aa8894",
    categoryId: keyboards.id,
    description:
      "There are five models of Maltron keyboard. Two target general users, of which one is the original curved, retro-styled keyboard. The other three are geared towards people with more pervasive disabilities. Although the general form has remained the same, the original keyboard has gone through several revisions. Maltron keyboards became well-known in the 1980s and 1990s for their distinctive layouts. Hackaday described the Maltron keyboard as a mass of injection-molded plastic with two deep dishes for all the keys.",
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
