const { Blog, User } = require("../../models");

const renderSignUp = (req, res) => {
  // render page only if user is not logged in
  if (!req.session.loggedIn) {
    return res.render("signUp");
  }

  return res.redirect("/");
};

const renderLogin = (req, res) => {
  // render page only if user is not logged in
  if (!req.session.loggedIn) {
    return res.render("login");
  }

  return res.redirect("/");
};

const renderSingleBlog = async (req, res) => {
  // get logged in user info from session
  const { loggedIn, user } = req.session;
  const { id } = req.params;
  const blogsFromDB = await Blog.findByPk(id, {
    include: [
      {
        model: User,
        attributes: ["username", "email", "id"],
      },
    ],
  });

  const blog = blogsFromDB.get({ plain: true });

  const isMyBlog = loggedIn && user.id === blog.user.id;

  return res.render("singleBlog", { loggedIn, blog, isMyBlog });
};

const renderHomePage = async (req, res) => {
  // get logged in user info from session
  const { loggedIn } = req.session;
  const blogsFromDB = await Blog.findAll({
    include: [
      {
        model: User,
        attributes: ["username", "email"],
      },
    ],
  });
  console.log(blogsFromDB);
  const blogs = blogsFromDB.map((blog) => blog.get({ plain: true }));
  console.log(blogs);
  return res.render("home", { loggedIn, blogs });
};

module.exports = {
  renderSignUp,
  renderLogin,
  renderSingleBlog,
  renderHomePage,
};
