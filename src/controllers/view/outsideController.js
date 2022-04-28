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
        attributes: ["username", "id"],
      },
    ],
  });

  const blog = blogsFromDB.get({ plain: true });

  const isMyBlog = loggedIn && user.id === blog.user.id;

  return res.render("single-blog", { loggedIn, blog, isMyBlog });
};

const renderHomePage = async (req, res) => {
  // get logged in user info from session
  const { loggedIn } = req.session;
  const blogsFromDB = await Blog.findAll({
    include: [
      {
        model: User,
        attributes: ["username"],
      },
    ],
  });
  console.log(blogsFromDB);
  const blogs = blogsFromDB.map((blog) => blog.get({ plain: true }));
  console.log(blogs);
  return res.render("home", { loggedIn, blogs });
};

const renderDashboard = async (req, res) => {
  if (req.session.loggedIn) {
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

    // const commentsFromUser = await Comment.findAll({
    //   where: {
    //     user_id: req.session.user.id,
    //   },
    //   include: [
    //     {
    //       model: User,
    //       attributes: ["username", "email"],
    //     },
    //   ],
    // });

    const blogs = blogsFromUser.map((blog) => blog.get({ plain: true }));

    // const comments = commentsFromUser.map((comment) =>
    //   comment.get({ plain: true })
    // );

    return res.render("dashboard", { loggedIn, blogs, user });
  }
  return res.redirect("/login");
};

module.exports = {
  renderSignUp,
  renderLogin,
  renderSingleBlog,
  renderHomePage,
  renderDashboard,
};
