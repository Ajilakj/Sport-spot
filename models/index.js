const User = require("./User");
const Sport = require("./Sport");
const Post = require("./Post");

User.hasMany(Sport, {
    foreignKey: ""
});

Sport.belongsToMany(User, {
    foreignKey: ""
});

User.hasMany(Post, {
    foreignKey: "user_id"
});

Post.belongsToOne(User, {
    foreignKey: "user_id"
});

Post.hasOne(Sport, {
    foreignKey: ""
});

Sport.belongsToMany(Post, {
    foreignKey: ""
});

module.exports = { User, Sport, Post };