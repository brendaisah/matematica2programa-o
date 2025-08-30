// Validação do formulário de contato
document.getElementById("formContato").addEventListener("submit", function(e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  if (nome && email && mensagem) {
    alert("Obrigado pelo contato, " + nome + "! Responderemos em breve.");
    this.reset();
  } else {
    alert("Por favor, preencha todos os campos.");
  }
});
