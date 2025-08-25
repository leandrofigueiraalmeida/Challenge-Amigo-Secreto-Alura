//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Autor: Leandro Figueira de Almeida
// Data: 24/08/2025

let listaNomes = [];
let nomesSorteados = [];


// Adiciona nome na lista - sem repetir nomes
function adicionarAmigo()
  {
    let nome = document.querySelector('input').value;

    // Validando string digitada
    if (nome.trim() === "") 
        {
          alert("Nome Inválido!  Digite um nome válido!");
          return;
        }
    
    // Validando se o nome já foi inserido na lista ou se o nome ja foi sorteado 
    // validando se o mesmo nome foi digitado em maiusculo ou minusculo  
    if (listaNomes.includes(nome.toLowerCase()) || nomesSorteados.includes(nome.toLowerCase()))
        {
          alert("Este nome já foi adicionado!");
          limparCampo();
          return;
        }    
    // imprimido nome digitado no console
    console.log(nome);
    // inserindo nome na lista
    listaNomes.push(nome);
    // imprimido lista de nome no console
    console.log(listaNomes);

    // limpando campo após finalizar inserção
    limparCampo() ;
    atualizarLista(); // mostra no HTML

    let elementoResultado = document.getElementById("resultado");
    elementoResultado.textContent = "Nomes Adicionados: ";
  }



// Limpa o campo de input
function limparCampo() 
  {
    nome = document.querySelector('input');
    nome.value = '';
  }




// Sorteia um nome aleatório da lista, sem repetir nome já sorteado 
function sortearAmigo()
  {
    // Se não houver mais nomes disponíveis, reinicia
    if (listaNomes.length === 0) 
      {
        alert("Todos já foram sorteados! Reiniciando...");
        listaNomes = [...nomesSorteados]; // volta todos os nomes
        nomesSorteados = []; // zera os já sorteados
        console.log("Reiniciando Lista"); // imprimindo no console
      }

    let indiceAleatorio = Math.floor(Math.random() * listaNomes.length);
    let nomeSorteado = listaNomes[indiceAleatorio];

    // Remove da lista principal e adiciona nos sorteados
    listaNomes.splice(indiceAleatorio, 1);
    nomesSorteados.push(nomeSorteado);


    console.log("Nome sorteado:", nomeSorteado);  // imprimindo no console
    console.log("Restantes:", listaNomes);        // imprimindo no console
    console.log("Já sorteados:", nomesSorteados); // imprimindo no console
    
    // exibe nome sorteado no HTML
    exibirNomeSorteado(nomeSorteado); 
    //atualizarLista(); // mostra no HTML
    let ul = document.getElementById("listaNomes");
    ul.innerHTML = "";

    atualizarListaSorteados() 

  }


// Funão que Exibe o nome sorteado no HTML
function exibirNomeSorteado(nome) 
  {
    let elementoResultado = document.getElementById("resultado");
    elementoResultado.textContent = "O Amigo Secreto sorteado é: " + nome;
  }

// Função Atualiza a lista de nomes no HTML
function atualizarLista() 
  {
    let ul = document.getElementById("listaNomes");
    ul.innerHTML = "";

    listaNomes.forEach(nome => 
      {
        let li = document.createElement("li");
        li.textContent = nome;
        ul.appendChild(li);
      }
    );
  }

// Atualiza a lista de nomes já sorteados no HTML
function atualizarListaSorteados() 
  {
    let ul = document.getElementById("nomesSorteados");
    ul.innerHTML = "";

    nomesSorteados.forEach(nome => 
      {
        let li = document.createElement("li");
        li.textContent = nome;
        ul.appendChild(li);
      }
    );
  }
