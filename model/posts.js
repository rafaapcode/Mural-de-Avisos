module.exports = {

    posts: [
        {
            id: "jkbhbbasdjbf",
            title: "Título da Publicação",
            description: "Descrição da publi"
        }
    ],

    getAll() {
        return this.posts;
    },

    newPost(title, description) {
        return this.posts.push({ id: idGenerator(), title, description });
    },

    deletePost(id) {

        // Varrendo o Array;
        for (let i = 0; i < this.posts.length; i++){

            // Para cada ID do array vamos comparar o ID recebido;
            if(this.posts[i].id == id){

                this.posts.splice(i, 1);
            }
        }
    }

}

// Gerando um ID;
function idGenerator() {
    return Math.random().toString(36).substring(2, 9);
}