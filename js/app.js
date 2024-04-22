let amigos = [];

function adicionar() {
    let nome = document.getElementById('nome-amigo');
    let lista = document.getElementById('lista-amigos');
    amigos.push(nome.value);

    if (lista.textContent == '') {
        lista.textContent = nome.value;
    } else {
        lista.textContent = lista.textContent + ', ' + nome.value;
    }
    nome.value = '';
}


// AQUI TENTEI FAZER SOZINHO, MAS EXISTE UMA FUNÇÃO QUA JA FAZ O EMBARALHAMENTRO DOS ELEMENTOS DO ARRAY
// ENTÃO NÃO PRECISARIA EU REIVENTAR A RODA, .length com Math.floor irá fazer isso ...
// function sortear() {
//     let lista = document.getElementById('lista-amigos');
//     let listaDeSorteio = document.getElementById('lista-sorteio');

//     if (lista == '') {
//         alert('Por favor, Digite os nomes!')
//     } else {
//         listaDeSorteio.innerHTML = lista.textContent;
//     }
//     // embaralhar os nomes lista de sorteio
//     // 1 - pegou - fulano
//     // 2 - pegou - cicrano
//     //imprimir na tela quem sorteaou quem 
// }

function sortear() {
    embaralharArray(amigos);
    let listaDeSorteio = document.getElementById('lista-sorteio');
    listaDeSorteio.textContent = amigos;
}

function embaralharArray(parametrosRecebidoComQualquerNome) {
    for (let indice = parametrosRecebidoComQualquerNome.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // guarda de um índice aleatório da lista
        const elemento = parametrosRecebidoComQualquerNome[indice - 1];
        parametrosRecebidoComQualquerNome[indice - 1] = parametrosRecebidoComQualquerNome[indiceAleatorio];
        parametrosRecebidoComQualquerNome[indiceAleatorio] = elemento;

        //   [lista[indice - 1], lista[indiceAleatorio]] =
        //      [lista[indiceAleatorio], lista[indice - 1]];
    }
}


function reiniciar() {
    let lista = document.getElementById('lista-amigos');
    let listaDeSorteio = document.getElementById('lista-sorteio');

    lista.textContent = '';
    listaDeSorteio.textContent = '';
}