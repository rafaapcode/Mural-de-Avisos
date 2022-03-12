const express = require("express");
const posts = require("../model/posts");
const router = express.Router();


// Rota que vai chamar todas as publicações;
router.get("/all", (req, res) => {
    res.json(JSON.stringify(posts.getAll()));
});


// Rota que vai fazer novas publicações;
router.post("/new", express.json(), (req, res, next) => {

    let title = req.body.title;
    let description = req.body.description;


    if (title === "" || description === "") {
        next("Title or Description Undefined");
    } else {
        posts.newPost(title, description);
        res.send("Post Added.");
    }
});


router.delete("/del", express.json(),(req, res) => {
    let id = req.body.id;
    posts.deletePost(id);

    res.send("Post Deletado");
});

module.exports = router;