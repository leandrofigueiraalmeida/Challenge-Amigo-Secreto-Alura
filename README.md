# Challenge-Amigo-Secreto-Alura
Challenge Amigo Secreto proposto por Alura G9 - ONE - Oracle

<img width="856" height="695" alt="image" src="https://github.com/user-attachments/assets/00cdafc9-004c-4cfc-918a-d004b02789d5" />

O desafio é criar um sistema que receberá nomes para um sorteio de Amigo Secreto.

Criado uma função para o cadastro do nome, mas foi incluido algumas regras de validação antes da inserção do nome em uma lista.

Seguindo as Regras:

1 - Verificar se a informação inserida esta vazia, se foi digitado algo. Alerta com aviso de inconsistência "Nome Inválido!  Digite um nome válido!"

2 - Antes de incluir o nome na lista, verificar se este nome ja existe na lista, para que não tenha cadastro de nomes repetidos. Alerta com aviso de inconsistência  "Este nome já foi adicionado!"

3 - A validação de nomes repetidos, também analisa se o nome foi digitado com caracteres maiusculos ou minusculos. Exemplo Paula = paula

4 - Após validação do nome, o mesmo é inserido na lista (array).

5 - Inserção realizada com sucesso, é feito limpeza do campo de inserção de nomes com a função limpaCampo().

6 - Exibido Lista de nomes inseridos

<img width="786" height="741" alt="image" src="https://github.com/user-attachments/assets/f8cb8ac3-fde5-4b07-bfb3-3392f06e3dfe" />


Ao Clicar no botão Sortear amigo, é demonstrado um nome que esta na lista de nomes.

Seguindo as Regras:

1 - Criado uma função que busca aleatóriamente o nome em uma lista (array) e inserido este nome em outra lista de nomes já sorteados.

Assim temos o controle dos nomes já sorteados e não teremos nomes sorteados 2 vezes.

2 - Quando é realizado o sorteio de todos os nomes, temos um alerta "Todos já foram sorteados! Reiniciando..." , desta forma o sorteio é reiniciado como os nomes cadastrados.

3 - Exibido Lista de nomes Sortedos


<img width="724" height="648" alt="image" src="https://github.com/user-attachments/assets/78d18835-84a8-4a9e-892e-5a1ef05cdf87" />

