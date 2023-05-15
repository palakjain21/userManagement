const express = require("express");
const cors = require("cors");
const client = require("./db.js");
// const env = require("dotenv");
const pg = require("pg");

const databaseRouter = require("./db_router.js");
const app = express();
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
const PORT = 8000;
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// env.config();
// pg.defaults.ssl = true;

const main = async () => {
  await client.connect();
  client.query(
    `CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            mobile_no VARCHAR(255) NOT NULL,
             photo VARCHAR(255) NOT NULL,
            status VARCHAR(255) NOT NULL
        )`,
    (err, res) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Table created");
      }
    }
  );
  console.log("created table");
  app.use("/", databaseRouter);

  app.listen(PORT, () => {
    console.log("server started at ", PORT);
  });
};

main();
