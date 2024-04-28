// Declarar uma variável do tipo array para representar uma lista;
// Adicionar um elemento a um array com a função push;
// Utilizar um código já desenvolvido por terceiros, para realizar o embaralhamento de elementos em um array.


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

    atualizarLista();
    atualizarSorteio();
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

    if (amigos.length == []) {      // adicionando condição, caso o array esteja vazio apresentar um alert na tela
        alert('Por favor, adicione o nome do amigo.');
    }

    // fazer uma estrutura de repetição com for, mas poderia se o while ..
    for (let i = 0; i < amigos.length; i++) {

        //tenho que criar uma estrutura de decisão como if, dentro do FOR  
        if (i == amigos.length - 1) {
            listaDeSorteio.innerHTML = listaDeSorteio.innerHTML + amigos[i] + '-->' + amigos[0] + '<br>';
        } else {
            listaDeSorteio.innerHTML = listaDeSorteio.innerHTML + amigos[i] + '-->' + amigos[i + 1] + '<br>';
        }
    }
}

function excluirAmigo(paramtro) {
    amigos.splice(paramtro, 1);

    atualizarLista();
    atualizarSorteio();
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

function atualizarSorteio() {
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';
}

function atualizarLista() {
    let lista = document.getElementById('lista-amigos');
    lista.innerHTML = '';

    for (let index = 0; index < amigos.length; index++) {

        let variavelPCriadaNoFor = document.createElement('p');
        variavelPCriadaNoFor.textContent = amigos[index];

        variavelPCriadaNoFor.addEventListener('click', function () {
            excluirAmigo(index);
        });

        lista.appendChild(variavelPCriadaNoFor); //um método, adiciona um novo elemento ao DOM, portanto é uma ação sendo executada com a clara intenção de expandir o DOM criando um filho para um elemento já existente, não importa o que está adicionando, mas precisa ser um elemento válido
    }
}

function reiniciar() {
    let lista = document.getElementById('lista-amigos');
    let listaDeSorteio = document.getElementById('lista-sorteio');

    amigos = [];     // ---->   preciso voltar a zerar o array, para nao sertear os nomes antigos do array.***********
    lista.textContent = '';
    listaDeSorteio.textContent = '';
}

// trabalho 1
// Criar uma funcionalidade no Projeto Amigo Secreto que permita ao usuário clicar em um amigo na lista e removê-lo.
// Atualizar a visualização da lista após a remoção.

// trabalho 2
// Adicione os números 1,2,3 em uma variável chamada minhaLista e armazene os números 4, 5 e 6 separadamente em outra variável.
// Use o método concat() para combinar as sequências de valores em uma nova lista chamadanovaLista. Imprima novaLista no console.

// trabalho 3
// Remova o último elemento de novaLista. 
// Imprima novaLista após a remoção.

// trabalho 4
// Utilize o algoritmo de Fisher-Yates (também conhecido como Knuth Shuffle) para embaralhar os elementos em novaLista. 
// Pesquise e adapte o código para realizar o embaralhamento.

// trabalho 5
// Crie uma função chamada removerDuplicatas que aceita um array como parâmetro e retorna um novo array sem elementos duplicados. 
// Teste a função com novaLista e imprima o array resultante.


//****************************************************************
// trabalho 2
let minhaLista = [1, 2, 3];
let minhaSegundaLista = [4, 5, 6];

let novaLista = minhaLista.concat(minhaSegundaLista);
console.log(novaLista);

// trabalho 3
novaLista.pop();
console.log(novaLista);

// trabalho 4
function embaralhaDesaifoCodigoProntoCopiadoGoogle(lista) { // codigo copiado da intenert coloquei dentro de uma function aguardando paramentros

    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);

        // guarda de um índice aleatório da lista
        const elemento = lista[indice - 1];
        lista[indice - 1] = lista[indiceAleatorio];
        lista[indiceAleatorio] = elemento;
    }
}
embaralhaDesaifoCodigoProntoCopiadoGoogle(novaLista); //chamo a função para fazer o embaralhamento ..
console.log(novaLista, 'chamdndo a novo lista embaralhada na primeira vez'); // aqui chamo a variavel que embaralhei ..

embaralhaDesaifoCodigoProntoCopiadoGoogle(novaLista); //chamo a função para fazer o embaralhamento NOVAMENTE ..
console.log(novaLista, 'chamdno nova lista embaralhada'); // aqui chamo a variavel que embaralhei com novo embaralhamento..

// trabalho 5
function VerificandoDuplicatas(mandeOArrayAqui) { // codigo copiado da intenert coloquei dentro de uma function aguardando paramentros.
    const conjunto = new Set(mandeOArrayAqui);
    const listaElementosUnicos = Array.from(conjunto);
}


VerificandoDuplicatas(novaLista);// chamo a function copiada na internet e mando o parametro do meu codigo dentro da chamada.
console.log(novaLista, 'cosole fora chamdno sozinho');