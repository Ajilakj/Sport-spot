const router = require('express').Router();

const userRoutes = require('./user-routes');
const passportRoutes = require('./passport');

router.use('/users', userRoutes);
router.use('/', passportRoutes);

module.exports = router;
