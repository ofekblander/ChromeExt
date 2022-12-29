

// var db = null;
// const dbUrl = chrome.runtime.getURL('opdb-sample.db');
// console.log(dbUrl);

// chrome.storage.local.get({"db": dbUrl}, function(items) {
//   console.log("amit");
//   // items.db will contain the contents of the database file
//   db = new SQL.Database(items.db);
//   alert("hey");
//   // you can now use the db object to execute SQL statements
// });

// var url1 = "https://moobiileleginds.xyz/";
// var res = db.exec("SELECT * FROM phishing_urls WHERE url = 'https://moobiileleginds.xyz/'");
// alert(res[0].values.length);
// if (res[0].values.length > 0) {
//   alert("exists in the table!");
// } else {
//   alert("does not exist in the table.");
// };

var db = null;
const dbUrl = chrome.runtime.getURL('data.sqlite');
console.log(dbUrl);

fetch(dbUrl)
  .then((response) => response.arrayBuffer())
  .then((buffer) => {
    const db = new SQL.Database(buffer);
    // Use the database object to perform operations on the database
  });