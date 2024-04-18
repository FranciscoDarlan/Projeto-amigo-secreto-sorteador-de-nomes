function adicionar(){
    let nome = document.getElementById('nome-amigo');
    let lista = document.getElementById('lista-amigos');

    if (lista.textContent == '') {
        lista.textContent = nome.value;
    }else{
        lista.textContent = lista.textContent + ', ' + nome.value;
    }
    nome.value = '';
}
