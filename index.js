const port = 3000;
const express = require("express");
const posts = require("./model/posts");
const app = express();


// Rota que vai chamar todas as publicações;
app.get("/all", (req, res) => {
    res.json(JSON.stringify(posts.getAll()));
});


// Rota que vai fazer novas publicações;
app.post("/new", express.json(), (req, res, next) => {

    let title = req.body.title;
    let description = req.body.description;


    if (title === "" || description === "") {
        next("Title or Description Undefined");
    } else {
        posts.newPost(title, description);
        res.send("Post Added.");
    }
});



app.delete("/del", express.json(),(req, res) => {
    let id = req.body.id;
    posts.deletePost(id);

    res.send("Post Deletado");
});

app.listen(port, (error) => {
    if (error) { throw error };

    console.log("Server Running on Port " + port);
})