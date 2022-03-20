module.exports = {

    posts: [
        {
            id: "",
            title: "",
            description: ""
        }
    ],

    getAll() {
        return this.posts;
    },

    newPost(title, description) {
        return this.posts.push({ id: idGenerator(), title, description });
    },


}

// Gerando um ID;
function idGenerator() {
    return Math.random().toString(36).substring(2, 9);
}