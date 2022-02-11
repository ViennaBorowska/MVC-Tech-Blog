const moment = require("moment");

const formatDate = (createdAt, updatedAt) =>
  moment(createdAt, updatedAt).format("M/D/YYYY HH:mm");

const helpers = {
  formatDate,
};

module.exports = helpers;
