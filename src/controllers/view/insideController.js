const { Blog, User, Comment } = require("../../models");

const renderCreateBlog = (req, res) => {
  return res.render("createBlog");
};

const renderDashboard = async (req, res) => {
  const { loggedIn, user } = req.session;

  const blogsFromUser = await Blog.findAll({
    where: {
      user_id: req.session.user.id,
    },
    include: [
      {
        model: User,
        attributes: ["name", "email"],
      },
    ],
  });

  const commentsFromUser = await Comment.findAll({
    where: {
      user_id: req.session.user.id,
    },
    include: [
      {
        model: User,
        attributes: ["username", "email"],
      },
    ],
  });

  const blogs = blogsFromUser.map((blog) => blog.get({ plain: true }));

  const comments = commentsFromUser.map((comment) =>
    comment.get({ plain: true })
  );

  return res.render("dashboard", { loggedIn, blogs, comments, user });
};

module.exports = {
  renderCreateBlog,
  renderDashboard,
};
