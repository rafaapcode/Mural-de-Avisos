// const { json } = require("express/lib/response");

document.addEventListener("DOMContentLoaded", () => {
    updatePost();
})


function updatePost() {

    // Fazendo a Chamada para o Back-end;
    fetch("http://localhost:3000/api/all").then(res => {
        return res.json();
    }).then(json => {

        let postElements = "";

        // Transformando o JSON STRING em JSON OBJETO;
        let posts = JSON.parse(json);
        posts.forEach((post) => {
            let postElement = ` <div id=${post.id} class="card mb-5">
                <div class="card-header">
                    <h5 class="card-title">${post.title}</h5>
                    <h5 class="card-title">ID: ${post.id}</h5>
                </div>

                <div class="card-body">
                    <div class="card-text">${post.description}</div>
                </div>
        </div>`;

            postElements += postElement;
        });

        document.getElementById("posts").innerHTML = postElements;
    })


};

function newPost() {

};