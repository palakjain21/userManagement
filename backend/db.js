const pg = require("pg");
const client = new pg.Client({
  connectionString:
    "postgresql://postgres:A22AgeW1FMjyHzytjgGO@containers-us-west-153.railway.app:5864/railway",
});

module.exports = client;
