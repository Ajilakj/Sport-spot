const User = require("./User");
const Sport = require("./Sport");
const Post = require("./Post");
const Comment = require("./Comment");

User.hasMany(Sport, {
    foreignKey: "sports_played"
});

Sport.belongsToMany(User, {
    foreignKey: "sports_played"
});

User.hasMany(Post, {
    foreignKey: "user_id"
});

Post.belongsToOne(User, {
    foreignKey: "user_id"
});

Post.hasOne(Sport, {
    foreignKey: "sport_name"
});

Sport.belongsToMany(Post, {
    foreignKey: "sport_name"
});

Post.hasMany(Comment, {
    foreignKey: "post_id"
});

Comment.belongsToOne(Post, {
    foreignKey: "post_id"
});

User.hasMany(Comment, {
    foreignKey: "user_id"
});

Comment.belongsToOne(User, {
    foreignKey: "user_id"
})

module.exports = { User, Sport, Post };