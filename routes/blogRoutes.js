const express = require("express");
const router = express.Router();
const { createComment } = require("../controllers/commentController");
const { createPost, getAppPost } = require("../controllers/postController");
const { likePost, unlikePost } = require("../controllers/likeController");

router.post("/comments/create", createComment);

router.post("/posts/create", createPost);
router.get("/posts", getAppPost);

router.post("/likes/like", likePost);
router.post("/likes/unlike", unlikePost);

module.exports = router;
