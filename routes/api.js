const express = require('express');
const router = express.Router();


// Get message
router.get('/message', function(req, res, next) {
	res.send('Rea-Js')
});

module.exports = router;