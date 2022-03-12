const port = 3000;
const express = require("express");
const app = express();
const path = require("path");
const apiRoutes = require("./routes/api");



app.use("/api", apiRoutes);
// Aqui estarei acessando o INDEX.HTML, dentro da pasta public.
app.use(express.static(path.join(__dirname, "public")));


app.listen(port, (error) => {
    if (error) { throw error };

    console.log("Server Running on Port " + port);
})