const moment = require("moment");

const formatDate = (createdAt, updatedAt) =>
  moment(createdAt, updatedAt).format("LLLL");

const helpers = {
  formatDate,
};

module.exports = helpers;
