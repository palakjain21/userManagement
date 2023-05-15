const client = require("./db.js");

const addUser = (req, res) => {
  console.log(req.body);
  const { data } = req.body;

  client.query(
    // "INSERT INTO users (name, email, mobile_no, photo, status) VALUES ($1, $2, $3, $4, $5)",
    // [name, email, mobile_no, photo, status],
    "INSERT INTO users (name, email, mobile_no, photo, status) VALUES ($1, $2, $3, $4, $5)",
    [data.name, data.email, data.mobile_no, data.photo, data.status],
    (err, results) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).json({ message: "User added successfully" });
        console.log(results);
      }
    }
  );
};

const getUsers = (req, res) => {
  client.query(`SELECT * FROM users`, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json(result.rows);
      console.log(result.rows);
    }
  });
};

const getUser = async (req, res) => {
  const id = req.params.id;
  client.query(`SELECT * FROM users WHERE id = $1`, [id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json(result.rows);
    }
  });
};

const updateUser = async (req, res) => {
  const id = req.params.id;
  const { data } = req.body;
  console.log(data);
  client.query(
    `UPDATE users SET name = $1, email = $2, mobile_no = $3, photo = $4, status = $5 WHERE id = $6`,
    [data.name, data.email, data.mobile_no, data.photo, data.status, id],

    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).json({ message: "User updated successfully" });
      }
    }
  );
};

module.exports = { addUser, getUsers, getUser, updateUser };
