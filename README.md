# Desafio - Cadastro de Usuários

Este projeto foi desenvolvido como parte de um desafio técnico para uma vaga de estágio. O foco é implementar uma funcionalidade de cadastro de usuários usando **HTML**, **CSS** e **JavaScript**, com **LocalStorage** para armazenar os dados. O projeto inclui uma lista de usuários com opções para adicionar, editar e excluir, além de validações no frontend.

## Funcionalidades

1. **Lista de Usuários:**
   - Exibe os usuários cadastrados com as seguintes informações:
     - Nome
     - E-mail
   - Cada usuário tem as opções de:
     - **Editar:** Permite modificar os dados do usuário.
     - **Excluir:** Remove o usuário da lista.

2. **Cadastro de Usuários:**
   - Um formulário para adicionar novos usuários.
   - Campos:
     - Nome (até 150 caracteres)
     - E-mail (até 20 caracteres)
     - Senha (8 caracteres)
     - Status (Ativo ou Excluído)

3. **Armazenamento Local:**
   - Os dados dos usuários são armazenados no `LocalStorage`, garantindo que persistam após o fechamento do navegador.

## Tecnologias Utilizadas

- **HTML:** Estruturação das páginas e componentes.
- **CSS:** Estilização da interface de usuário.
- **JavaScript:** Lógica para validação de dados e manipulação do `LocalStorage`.
- **LocalStorage:** Armazenamento local dos dados dos usuários.

## Validação dos Dados

- **Nome:** Verifica se o campo foi preenchido e se o número de caracteres não excede o limite de 150.
- **E-mail:** Valida se o formato do e-mail está correto e se não excede o limite de 20 caracteres.
- **Senha:** Verifica se a senha possui exatamente 8 caracteres.
- **Status:** Seleção entre "Ativo" ou "Excluído" por meio de uma combobox.

## Como Executar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/eligado/Desafio-Tecnico-IBBI.git
   ```
2. Abra o arquivo `index.html` em seu navegador ou acesse o deploy do site no link abaixo:
   - [Deploy do site](https://eligado.github.io/Desafio-Tecnico-IBBI/)

## Dificuldades Enfrentadas

Durante o desenvolvimento, encontrei dificuldades na validação de alguns campos e no gerenciamento de múltiplos usuários ao usar o `LocalStorage`. Também tive dificuldades para tornar o layout responsivo para dispositivos móveis.

## Autor

- **Lucas Araujo Amorim**
- [GitHub](https://github.com/eligado)
- [Linkedin](https://www.linkedin.com/in/lucasaraujoamorim/)
