const users = require("./users");
const blogs = require("./blogs");
const connection = require("../config/connection");
const User = require("../models/User");
const Blog = require("../models/Blog");

const seedAll = async () => {
  try {
    await connection.sync({ force: true });

    console.log("DB sync successful");

    const userPromises = users.map((user) => User.create(user));

    await Promise.all(userPromises);

    console.log("Users seeded successful");

    await Blog.bulkCreate(blogs);

    console.log("Blogs seeded successful");
  } catch (error) {
    console.log(`[ERROR]: Seed failed | ${error.message}`);
  }

  process.exit(0);
};

seedAll();
