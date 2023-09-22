var express = require('express');
var router = express.Router();
var User = require("../models/controllers/user/user");
router.post('/api/saveCity',User.sendDataToServer);

module.exports = router;
