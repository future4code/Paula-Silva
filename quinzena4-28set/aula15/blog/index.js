posts = []

function criarPost() {
    const post = {
        titulo: document.getElementById('titulo-post').value,
        autor: document.getElementById('autor-post').value,
        conteudo: document.getElementById('conteudo-post').value
    }
    posts.push(post);

    document.getElementById('titulo-post').value = "";
    document.getElementById('autor-post').value = "";
    document.getElementById('conteudo-post').value = "";

    exibePost(post);
}

function exibePost(post) {
    const container = document.getElementById('container-de-posts');
    container.innerHTML += `<h1>${post.titulo}</h1><em>${post.autor}</em><p>${post.conteudo}</p>`
}