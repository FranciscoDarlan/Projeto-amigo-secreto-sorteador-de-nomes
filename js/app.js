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

    // fazer uma estrutura de repetição com for, mas poderia se o while ..
    for (let i = 0; i < amigos.length; i++) {

        //tenho que criar uma estrutura de decisão como if
        if (i == amigos.length - 1) {
            listaDeSorteio.innerHTML = listaDeSorteio.innerHTML + amigos[i] + '-->' + amigos[0] + '<br>';
            alert('caindo no if for ultima passagem')
        } else {
            listaDeSorteio.innerHTML = listaDeSorteio.innerHTML + amigos[i] + '-->' + amigos[i + 1] + '<br>';
            alert('caindo no else passagem até terminar')
        }
    }
}

function embaralharArray(parametrosRecebidoComQualquerNome) {
    for (let i = parametrosRecebidoComQualquerNome.length; i; i--) {
        const indiceAleatorio = Math.floor(Math.random() * i);

        // guarda de um índice aleatório da lista
        [parametrosRecebidoComQualquerNome[i - 1],
        parametrosRecebidoComQualquerNome[indiceAleatorio]] = [parametrosRecebidoComQualquerNome[indiceAleatorio],
        parametrosRecebidoComQualquerNome[i - 1]];
    }
}

function reiniciar() {
    let lista = document.getElementById('lista-amigos');
    let listaDeSorteio = document.getElementById('lista-sorteio');

    lista.textContent = '';
    listaDeSorteio.textContent = '';
}