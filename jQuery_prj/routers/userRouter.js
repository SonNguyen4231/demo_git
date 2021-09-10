const router = require("express").Router();
const UserModel = require("../models/userModel");

router.get("/", function (req, res) {
  UserModel.find()
    .then(function (data) {
      res.json(data);
    })
    .catch(function (err) {
      res.json(err);
    });
});

router.get("/:id", function (req, res) {
  UserModel.findOne({ _id: req.params.id })
    .then(function (data) {
      res.json(data);
    })
    .catch(function (err) {
      res.json(err);
    });
});


router.post("/", async (req, res) => {
  try {
    const checkUser = await UserModel.findOne({username: req.body.username});
    if (checkUser) {
      res.json({ status: 400, mess: 'username existed' });
    } else {
      await UserModel.create({
        username: req.body.username, 
        password: req.body.password, 
        name: req.body.name,
        age: req.body.age,
      });
      res.json({ status: 200, mess: 'Create account success!' });
    }
  } catch (error) {
    res.json({ status: 500, mess: 'Error server!' });
  }
});

router.delete("/", async (req, res) => {  
  try {
    const checkUser = await UserModel.findOneAndDelete({username: req.body.username});
    if (checkUser) {
      res.json({ status: 200, mess: 'Delete account success!' });
    } else {
      res.json({ status: 400, mess: 'Error user!' });
    }
  } catch (error) {
    res.json({ status: 500, mess: 'Error server!' });
  }
});

router.put("/", async (req, res) => {
  try {
    const checkUser = await UserModel.findOneAndUpdate({username: req.body.username}, {username: req.body._username, password: req.body._password, name: req.body._name, age: req.body._age});
    if (checkUser) {
      res.json({ status: 200, mess: 'Update account success!' });
    } else {
      res.json({ status: 400, mess: 'Error user!' });
    }
  } catch (error) {
    res.json({ status: 500, mess: 'Error server!' });
  }
});

module.exports = router;
