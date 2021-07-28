const express = require('express');
const User = require('../models/user');
const bcrypt = require('bcryptjs');

const router = express.Router();

router.post('/register', async (req, res)=> {
  const { email } = req.body;

  try {

    if (await User.findOne({ email })) {
      res.status(400).send({ error: 'User alredy exists' });
    };
    
    const user = await User.create(req.body);

    user.password = undefined;

    return res.send({ user });

  } catch  {
    return res.status(400).send({ error: 'Registration failed'});
  };
});

router.post('/authenticate', async(req,res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return res.status(400).send({ error: "user not found" });
  };

  if (!await bcrypt.compare(password, user.password)) {
    return res.status(400).send({ error: "Invalid Password" });
  };

  !user || user.email || user.password
  user.password = undefined;

  res.send({ user });

});

module.exports = server => server.use('/auth', router);
