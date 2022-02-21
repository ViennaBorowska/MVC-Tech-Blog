const { Blog } = require("../../models");
const { getPayloadWithValidFieldsOnly } = require("../../utils");

const createBlog = async (req, res) => {
  try {
    // get the payload
    const payload = getPayloadWithValidFieldsOnly(
      ["title", "contents", "username"],
      req.body
    );

    // verify payload
    if (Object.keys(payload).length !== 3) {
      // return status 400
      console.log(`[ERROR]: Failed to create blog | Invalid fields`);
      return res.status(400).json({ error: "Failed to create Blog" });
    }
    // if ok create project
    await Blog.create({
      ...payload,
      user_id: req.session.user.id,
    });

    return res.json({ message: "Successfully created blog" });
  } catch (error) {
    // catch error and return status 500
    console.log(`[ERROR]: Failed to create blog | ${error.message}`);
    return res.status(500).json({ error: "Failed to create blog" });
  }
};

const updateBlog = async (req, res) => {
  try {
    console.log(req.body);
    const [updatedRows] = await Blog.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (updatedRows > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.sendStatus(500).send(err);
  }
};

const deleteBlog = async (req, res) => {
  try {
    // delete project
    await Blog.destroy({
      where: {
        id: req.params.id,
      },
    });

    return res.json({ message: "Successfully deleted blog" });
  } catch (error) {
    // catch error and return status 500
    console.log(`[ERROR]: Failed to delete blog | ${error.message}`);
    return res.status(500).json({ error: "Failed to delete blog" });
  }
};

module.exports = {
  createBlog,
  updateBlog,
  deleteBlog,
};
