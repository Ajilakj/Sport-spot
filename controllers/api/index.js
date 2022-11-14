const router = require('express').Router();
const userRoutes = require('./user-routes');
const passportRoutes = require('./passport');


const createUserRoutes=require('./create-user');
const sportPostRoutes=require('./sport-post');
const postDetailsRoutes =require('./post-details');
const blogPostRoutes =require('./blogpost-routes');

router.use('/users', userRoutes);
router.use('/', passportRoutes);

// router.use('/blogs', blogRoutes);

router.use('/profile', createUserRoutes);

router.use('/sport', sportPostRoutes);

router.use('/post', postDetailsRoutes);

router.use('/blogs', blogPostRoutes);

module.exports = router;
