const port = 3000;
const express = require("express");

const app = express();

const posts = [
    {
        id: "jkbhbbasdjbf",
        title: "Título da Publicação",
        descrição: "Descrição da publi"
    }
]


// Rota que vai chamar todas as publicações;
app.get("/all", (req, res) => {
    res.json(JSON.stringify(posts));
});

// Rota que vai fazer novas publicações;
app.get("/new", (req, res) => { });


app.listen(port, (error) => {
    if (error) { throw error };

    console.log("Server Running on Port " + port);
})