const formatDate = (createdAt) => {
  return `${new Date(createdAt).getDate()}/${
    new Date(createdAt).getMonth() + 1
  }/${new Date(createdAt).getFullYear()}`;
};

const helpers = {
  formatDate,
};

module.exports = helpers;
