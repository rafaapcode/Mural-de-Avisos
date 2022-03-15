
document.addEventListener("DOMContentLoaded", () => {
    // Executando esta função somente depois de carregar a Página HTML;
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
    let t = document.getElementById("title").value;
    let d = document.getElementById("description").value;

    let post = { title: t, description: d };

    const options = {
        method: "POST",
        headers: new Headers({ "content-type": "application/json" }),
        body: JSON.stringify(post)
    };


    fetch("http://localhost:3000/api/new", options).then(res => {
        console.log(res);
        updatePost();
        document.getElementById("title").value = "";
        document.getElementById("description").value = "";
    })
};