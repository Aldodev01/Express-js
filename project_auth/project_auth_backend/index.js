import express from "express";
import sq from "./models/connection";

const app = express();

//* Routing
app.get("/", (req, res) => {
  res.send("bobrok");
});

// *Middleware
app.use(express.json());

sq.sync({ force: true }).then((result) => {
  console.log("database terkocok");
});

app.post("/user_register", (req, res) => {
  // tangkap data dari query
  let { username, password, status } = req.query;

  // kembalikan response tangkapa querynya
  res.json({
    _username: username,
    _password: password,
    _status: status,
  });
});

app.post("/user_register/:username/:password", (req, res) => {
  // kita tangkap data params nya
  let { username, password } = req.params;

  // kita kembalikan
  res.json({
    _username: username,
    _password: password,
  });
});

app.post("/user_login", (req, res) => {
  let { username, password } = req.body;

  res.json({
    _username: username,
    _password: password,
  });
});

app.listen(9000, () => {
  console.log("ea ea ");
});
