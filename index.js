const port = 3000;
const express = require("express");

const app = express();

const posts = [
    {
        id: "jkbhbbasdjbf",
        title: "Título da Publicação",
        description: "Descrição da publi"
    }
]


// Rota que vai chamar todas as publicações;
app.get("/all", (req, res) => {
    res.json(JSON.stringify(posts));
});


// Rota que vai fazer novas publicações;
app.post("/new", express.json(), (req, res, next) => {

    let id = idGenerator();
    let title = req.body.title;
    let description = req.body.description;

    if (title === "" || description === "") {
        next("Title or Description Undefined");
    } else {
        posts.push({ id, title, description });

        res.send("Post Added.");
    }
});


// Gerando um ID;
function idGenerator() {
    return Math.random().toString(36).substring(2, 9);
}


app.listen(port, (error) => {
    if (error) { throw error };

    console.log("Server Running on Port " + port);
})