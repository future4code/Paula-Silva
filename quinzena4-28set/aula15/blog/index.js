function salvaPost() {
    //Pega os dados do formulário
    const post = {
        titulo: document.getElementById('titulo-post').value,
        autor: document.getElementById('autor-post').value,
        conteudo: document.getElementById('conteudo-post').value,
        imagem: document.getElementById("imagem-post").value
    }  
    // tenta ver se já tem algo salvo
    let posts = JSON.parse(localStorage.getItem('posts'));
    //se não tiver nada salvo, zera o array de posts (tira de null)
    if (posts === null) {
        posts = [];
    } 
    //adiciona o post
    posts.push(post);
    //salva o array de posts
    localStorage.setItem('posts',JSON.stringify(posts));

}

function listaPosts() {
    //pega o array de posts
    const posts = JSON.parse(localStorage.getItem('posts'))
    //pega o container dos posts
    const container = document.getElementById('container-de-posts');
    for (const p of posts) {
         container.innerHTML += `<h1>${p.titulo}</h1>
                            <em>${p.autor}</em>
                            <img src="${p.imagem}" href="${p.titulo}" />
                            <p>${p.conteudo}</p>
                            <hr>`
    }   
}

