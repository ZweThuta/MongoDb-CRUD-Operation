const express = require("express");
const path = require("path");

const router = express.Router();
const postController = require("../controllers/posts")

router.get("/", postController.renderHomePage );
router.get("/post/:postId", postController.getPost)

module.exports = router;
