const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./home-routes");
const sportPostRoutes=require("./sport-post");
const postDetailsRoutes =require("./post-details");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/sport", sportPostRoutes);
router.use("/post", postDetailsRoutes);


module.exports = router;
