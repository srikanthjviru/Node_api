const express = require("express");
const router = express.Router();
const Post = require("../../models/Product");

router.get("/get", (req, res, next) => {
  Post.find()
    .then(posts => {
      console.log("GETTING POSTS", posts);
      res.json(posts);
    })
    .catch(err => console.log(err));
});

router.post("/add", (req, res, next) => {
  // const title = req.body.title;
  // const body = req.body.body;
  // const array = req.body.array;
  console.log("REQQQ", req);
  const product = req.body;
  console.log("PPPPPP", product);
  newPost = new Post(product);
  // console.log(newPost, "SAVING_POST");
  newPost
    .save()
    .then(post => {
      res.json(post);
    })
    .catch(err => console.log(`WE GOT A PROBLEM ${err}`));
});

router.put("/update/:id", (req, res, next) => {
  let id = req.params.id;
  Post.findById(id)
    .then(post => {
      product = req.body;
      post.title = product.title;
      post
        .save()
        .then(post => {
          res.send({
            message: "Post updated successfully",
            status: "success",
            post: post
          });
        })
        .catch(err => console.log("Caught error", err));
    })
    .catch(err => console.log("ERROR", err));
});

router.get("/getting/:id", (req, res, next) => {
  let id = req.params.id;
  console.log("IDIDIDIDIDIDI", id);
  Post.findById(id)
    .then(post => {
      res.send({
        message: `Found the post with id ${id}`,
        status: "success",
        post: post
      });
      console.log("FOUND_BY_ID", id, post);
    })
    .catch(err => console.log(`Cant find the post with id ${id}`, err));
});

router.delete("/:id", (req, res, next) => {
  let id = req.params.id;
  // Post.deleteOne({_id: id}).then(9) => res.end
  Post.findById(id)
    .then(post => {
      post
        .delete()
        .then(post => {
          res.send({
            message: "Deleted Successfuly!!!",
            status: "success"
          });
        })
        .catch(err => console.log("DELETE ERROR", err));
    })
    .catch(err => console.log("CANT FIND ITEM TO DELETE", err));
});
module.exports = router;
