const Post = require("../models/postModel");

exports.createPost = async (req, res) => {
  try {
    const { title, body } = req.body;
    const post = new Post({ title, body });
    const savedPost = await post.save();

    res.status(200).json({
      status: "success",
      data: {
        savedPost,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.getAppPost = async (req, res) => {
  try {
    const allPost = await Post.find()
      .populate("likes")
      .populate("comments")
      .exec();
    res.status(200).json({
      status: "success",
      result: allPost.length,
      data: {
        allPost,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};
