// Função para salvar o usuário no localStorage
function salvarUsuario(event) {
	event.preventDefault(); // Evita o envio do formulário

	const nome = document.getElementById("nome").value;
	const email = document.getElementById("email").value;
	const senha = document.getElementById("senha").value;
	const status = document.getElementById("status").value;

	if (!nome || !email || !senha || !status) {
		alert("Por favor, preencha todos os campos.");
		return;
	}

	const usuario = { nome, email, senha, status };
	const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
	usuarios.push(usuario);
	localStorage.setItem("usuarios", JSON.stringify(usuarios));

	// Mostra o modal de sucesso
	const modal = document.getElementById("modalSucesso");
	modal.style.display = "block";

	// Fechar o modal e redirecionar
	document.getElementById("btnOk").onclick = function () {
		modal.style.display = "none";
		window.location.href = "index.html";
	};
}

// Associar a função ao envio do formulário
document.addEventListener("DOMContentLoaded", function () {
	document
		.getElementById("formUsuario")
		.addEventListener("submit", salvarUsuario);
});

// Função para carregar os usuários do localStorage e exibir no index.html
function carregarUsuarios() {
  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  const listaUsuarios = document.getElementById('lista-usuarios');
  listaUsuarios.innerHTML = '';

  usuarios.forEach((usuario, index) => {
    const linha = document.createElement('tr');
    linha.innerHTML = `
  <td data-label="Nome:" class="nome-usuario">${usuario.nome}</td>
  <td data-label="Email:" class="email-usuario">${usuario.email}</td>
  <td data-label="Ações:">
    <button class="botao-editar" onclick="editarUsuario(${index})"><i class="fas fa-pencil-alt"></i></button>
    <button class="botao-remover" onclick="confirmarRemocao(${index})"><i class="fas fa-trash-alt"></i></button>
  </td>
`;
    listaUsuarios.appendChild(linha);
  });
}

// Índice do usuário a ser deletado
let usuarioParaRemover = null;

// Função para abrir o modal de confirmação
function confirmarRemocao(index) {
  usuarioParaRemover = index; // Armazena o índice do usuário
  const modalConfirmacao = document.getElementById('modalConfirmacao');
  modalConfirmacao.style.display = 'block';
}

// Função para remover o usuário, se confirmado
document.getElementById('confirmarRemocao').onclick = function() {
  if (usuarioParaRemover !== null) {
    removerUsuario(usuarioParaRemover);
  }
  fecharModalConfirmacao(); // Fecha o modal após a remoção
};

// Função para cancelar a remoção
document.getElementById('cancelarRemocao').onclick = fecharModalConfirmacao;

// Função para fechar o modal
function fecharModalConfirmacao() {
  const modalConfirmacao = document.getElementById('modalConfirmacao');
  modalConfirmacao.style.display = 'none';
  usuarioParaRemover = null; // Reseta o índice
}

// Fecha o modal se o usuário clicar fora do modal
window.onclick = function(event) {
  const modalConfirmacao = document.getElementById('modalConfirmacao');
  if (event.target === modalConfirmacao) {
    fecharModalConfirmacao();
  }
}

// Atualiza a função remover para exibir o modal de confirmação
function removerUsuario(index) {
  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  usuarios.splice(index, 1); // Remove o usuário pelo índice
  localStorage.setItem('usuarios', JSON.stringify(usuarios)); // Atualiza o localStorage
  carregarUsuarios(); // Recarrega a lista de usuários
}

// Event listener para carregar os usuários quando a página de lista for carregada
window.onload = function() {
  if (document.getElementById('lista-usuarios')) {
    carregarUsuarios();
  }

  if (document.getElementById('formUsuario')) {
    document.getElementById('formUsuario').addEventListener('submit', salvarUsuario);
  }
};

// Função para editar um usuário
function editarUsuario(index) {
  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  const usuario = usuarios[index];

  // Preenche o formulário do modal com os dados do usuário
  document.getElementById('nome').value = usuario.nome;
  document.getElementById('email').value = usuario.email;
  document.getElementById('senha').value = usuario.senha;
  document.getElementById('status').value = usuario.status;

  // Armazena o índice do usuário que está sendo editado
  document.getElementById('usuarioIndex').value = index;

  // Exibe o modal de edição
  const modalEdicao = document.getElementById('modalEdicao');
  modalEdicao.style.display = 'block';

  // Função para fechar o modal ao clicar no 'X'
  const spanClose = document.getElementsByClassName('close')[0];
  spanClose.onclick = function() {
    modalEdicao.style.display = 'none';
  };

  // Fecha o modal se o usuário clicar fora dele
  window.onclick = function(event) {
    if (event.target === modalEdicao) {
      modalEdicao.style.display = 'none';
    }
  };
}

// Função para salvar as alterações feitas no modal de edição
document.getElementById('formEdicaoUsuario').addEventListener('submit', function(event) {
  event.preventDefault();

  // Obtém os dados do formulário de edição
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;
  const status = document.getElementById('status').value;

  const usuarioEditado = {
    nome,
    email,
    senha,
    status
  };

  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  const usuarioIndex = document.getElementById('usuarioIndex').value;

  // Atualiza o usuário no array
  usuarios[usuarioIndex] = usuarioEditado;

  // Salva o array atualizado no localStorage
  localStorage.setItem('usuarios', JSON.stringify(usuarios));

  // Fecha o modal e recarrega a lista de usuários
  document.getElementById('modalEdicao').style.display = 'none';
  carregarUsuarios();
});

