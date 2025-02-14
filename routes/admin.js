const express = require("express");
const path = require("path");

const router = express.Router();
const postController = require("../controllers/posts")

router.get("/create-post", postController.renderCreatePage);
router.post("/", postController.createPost);

router.get("/edit/:postId",postController.getEditPost);

router.post("/edit-post", postController.updatePost);
router.post("/delete/:postId",postController.deletePost)


module.exports = {adminRoutes: router};
