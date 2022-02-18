const connection = require("../config/connection");
const { Blog, User } = require("../models");
const seedBlogs = require("./blogsSeeds.json");
const seedUsers = require("./usersSeeds.json");

const seedAll = async () => {
  await connection.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");

  await User.bulkCreate(seedUsers);
  console.log("\n----- USERS SEEDED -----\n");

  await Blog.bulkCreate(seedBlogs);
  console.log("\n----- BLOGS SEEDED -----\n");

  process.exit(0);
};

seedAll();
