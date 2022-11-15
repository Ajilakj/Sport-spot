const router = require("express").Router();
const userRoutes = require("./user-routes");
const passportRoutes = require("./passport");


const createUserRoutes=require("./create-user");
const blogPostRoutes =require("./blogpost-routes");
const commentRoutes = require("./comment-routes");

router.use("/users", userRoutes);
router.use("/", passportRoutes);


router.use("/profile", createUserRoutes);

router.use("/blogs", blogPostRoutes);

router.use("/comment", commentRoutes);

module.exports = router;
