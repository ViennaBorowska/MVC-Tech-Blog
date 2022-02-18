const Blog = require("./Blog");
//const Comment = require("./Comment");
const User = require("./User");

Blog.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

User.hasMany(Blog, {
  foreignKey: "user_id",
});

// User.hasMany(Comment, {
//   foreignKey: "user_id",
//   onDelete: "CASCADE",
// });

// Comment.belongsTo(Blog, {
//   foreignKey: "blog_id",
// });

module.exports = { Blog, User };
