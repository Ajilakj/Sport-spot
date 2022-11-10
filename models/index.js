const User = require("./User");
const Sport = require("./Sport");
const Post = require("./Post");
const Comment = require("./Comment");


User.hasMany(Post, {
    foreignKey: "user_id"
});

Post.belongsTo(User, {
    foreignKey: "user_id"
});

Post.hasOne(Sport, {
    foreignKey: "sports_id"
});

Sport.belongsToMany(Post, {
    foreignKey: "sports_id",
    through:{model:Post}
});

Post.hasMany(Comment, {
    foreignKey: "post_id"
});

Comment.belongsTo(Post, {
    foreignKey: "post_id"
});

User.hasMany(Comment, {
    foreignKey: "user_id"
});

Comment.belongsTo(User, {
    foreignKey: "user_id"
})

module.exports = { User, Sport, Post, Comment };
