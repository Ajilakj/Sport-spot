const router = require('express').Router();
const userRoutes = require('./user-routes');
const passportRoutes = require('./passport');


const createUserRoutes=require('./create-user');
const blogPostRoutes =require('./blogpost-routes');

router.use('/users', userRoutes);
router.use('/', passportRoutes);


router.use('/profile', createUserRoutes);

router.use('/blogs', blogPostRoutes);

module.exports = router;
