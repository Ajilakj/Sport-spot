const User = require("./User");
const Sport = require("./Sport");
const Post = require("./Post");
const Comment = require("./Comment");

User.hasMany(Sport, {
    foreignKey: "user_id"
});

Sport.belongsToMany(User, {
    //foreignKey: "sports_played"
    through:{model:User}
});

User.hasMany(Post, {
    foreignKey: "user_id"
});

Post.belongsTo(User, {
    foreignKey: "user_id"
});

Post.hasOne(Sport, {
    foreignKey: "sport_id"
});

Sport.belongsToMany(Post, {
//     foreignKey: "sport_name"
    through:{model:Post}
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