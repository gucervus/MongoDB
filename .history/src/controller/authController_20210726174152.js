const express = require('express');
const User = require('../models/user');
const router = express.Router();

router.post('/register', async (req, res)=> {
  try {
    const user = await ===User.create(req.body)
    return res.send({users});

  } catch (err) {
    return res.status(400).send({ error: 'registration failed'});
  };
});

module.exports = server => server.use('/auth', router);
