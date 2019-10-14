const express = require("express");
const router = express.Router();
const Todo = require("../../models/TodoList");

router.post("/add/todo", (req, res, next) => {
  console.log("ADD todo", req.body);
  const todo = req.body;
  newTodo = new Todo(todo);
  newTodo
    .save()
    .then(todo => res.json(todo))
    // .then(data => console.log("responseeee", data))
    .catch(err => console.log(err));
});
router.get("/get/todos", (req, res, next) => {
  Todo.find()
    .then(todo => {
      console.log("GET_TODOS", todo);
      res.json(todo);
    })
    .catch(err => console.log(`Unable to find Todos ${err}`));
});
router.put("/update/:id", (req, res, next) => {
  let id = req.params.id;
  Todo.findById(id)
    .then(post => {
      (post.title = req.body.title),
        (post.firstName = req.body.firstName),
        (post.complete = req.body.complete),
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
router.delete("/delete/:id", (req, res, next) => {
  let id = req.params.id;
  // Post.deleteOne({_id: id}).then(9) => res.end
  Todo.findById(id)
    .then(post => {
      post
        .delete()
        .then(post => {
          res.send({
            message: "Deleted Successfuly!!!",
            status: "success",
            post
          });
        })
        .catch(err => console.log("DELETE ERROR", err));
    })
    .catch(err => console.log("CANT FIND ITEM TO DELETE", err));
});
module.exports = router;
