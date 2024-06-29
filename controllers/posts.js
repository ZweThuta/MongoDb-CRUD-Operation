const posts = [];
const Post = require("../models/post");

exports.createPost = (req, res) => {
  const { title, description, photo } = req.body;
  const post = new Post(title, description, photo);

  post
    .create()
    .then((result) => {
      console.log(result);
      res.redirect("/");
    })
    .catch((err) => console.log(err));
};

exports.renderCreatePage = (req, res) => {
  res.render("createpost", { title: "Post" }); //ejs
};
exports.renderHomePage = (req, res) => {
  Post.getPosts()
    .then((posts) =>
      res.render("home", { title: "Home Page", postsArr: posts })
    )
    .catch((err) => console.log(err));
};

exports.getPost = (req, res) => {
  const postId = req.params.postId;
  Post.getPost(postId)
    .then((post) => res.render("details", { title: post.title, post }))
    .catch((err) => console.log(err));
};

exports.getEditPost = (req, res) => {
  const postId = req.params.postId;
  Post.getPost(postId)
    .then((post) => {
      if (!post) {
        return res.redirect("/");
      }
      res.render("editPost", { title: post.title, post });
    })
    .catch((err) => console.log(err));
};

exports.updatePost = (req, res) => {
  const { title, description, photo, postId } = req.body;
  const post = new Post(title, description, photo, postId);

  post
    .create()
    .then((result) => {
      console.log("Post Updated");
      res.redirect("/");
    })
    .catch((err) => console.log(err));
};

exports.deletePost =(req, res) =>{
  const {postId} = req.params;
  Post.deleteById(postId)
  .then(() => {
    console.log("Post Deleted");
    res.redirect("/");
  })
  .catch((err) => console.log(err));

}
