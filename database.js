let mysql = require("mysql");

let USERDATA = [
  ["Aditya", "Your Mom"],
  ["A kid named finger", "Philadelphia"],
  ["Hank Schrader", "Albeqerque"],
  ["Sussy Baka", "Albeqerque"],
  ["Skyler White", "Teds Bed"],
  ["Flynn, aka Walter White Jr.", "Breakfast Table"],
  ["Captain Cook", "Your Biatch"],
  ["Marie Schrader", "Jewellery Shop"],
  ["Bogdan", "A1A CarWash"],
  ["Huell Babinaux", "Some random apartement"],
];

let connector = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "6969",
  database: "donated_names",
});

connector.connect(function (err) {
  if (err) throw err;
  console.log("connected");

  let sqlData = "INSERT INTO usernames (name, adress) VALUES ?";

  connector.query(sqlData, [USERDATA], function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows);
  });
});
