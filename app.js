//console.log("Hello World");

const express = require("express");
const app = express();

app.use(express.json());

var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "user",
});

// ROUTES

app.get("/product", (req, res) => {
  res.send("show products from mysql");
});

app.get("/categories", (req, res) => {
  res.send("show categories from mysql");
});

app.get("/brands", (req, res) => {
  res.send("show brands from mysql");
});

app.get("/users", (req, res) => {
  let sql = "SELECT * FROM info";
  connection.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

// ✅ Correct Login Route
app.post("/loginaction", (req, res) => {
  console.log(req.body);

  let sql = `
    SELECT COUNT(*) AS count FROM info
    WHERE emailid = '${req.body.emailid}'
    AND password = '${req.body.password}';
  `;

  connection.query(sql, (err, result) => {
    if (err) throw err;

    if (result[0].count > 0) {
      res.send("Login Successful");
    } else {
      res.send("Login Failed");
    }
  });
});

// Add User
app.post("/add-user", (req, res) => {
  console.log(req.body);

  let sql = `
    INSERT INTO info (name, age, emailid, password)
    VALUES ('${req.body.name}', '${req.body.age}', '${req.body.email}', '${req.body.password}');
  `;

  connection.query(sql, (err, result) => {
    if (err) throw err;

    res.send("User Added Successfully");
  });
});

app.put("/change-password", (req, res) => {
  res.send("update User password in mysql");
});

app.delete("/delete-user", (req, res) => {
  res.send("delete user from mysql");
});

// Start Server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
