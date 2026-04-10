// Data de lançamento
var dataLancamento = new Date('2026-06-01T00:00:00');

// Função que atualiza a contagem regressiva
function atualizarContagem() {
  var agora = new Date();
  var diferenca = dataLancamento - agora; // diferença em milissegundos

  // Calcula dias, horas, minutos e segundos
  var dias    = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  var horas   = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
  var segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

  // Atualiza os elementos <time> no HTML
  document.getElementById('dias').textContent    = dias;
  document.getElementById('horas').textContent   = horas;
  document.getElementById('minutos').textContent = minutos;
  document.getElementById('segundos').textContent = segundos;
}

// Executa a cada 1 segundo (1000 milissegundos)
setInterval(atualizarContagem, 1000);

// Executa uma vez já ao carregar a página
atualizarContagem();


// Formulário de pré-venda
var formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(event) {
  event.preventDefault(); // impede o envio real

  var nome  = document.getElementById('nome').value;
  var email = document.getElementById('email').value;
  var plano = document.getElementById('plano').value;

  if (nome === '' || email === '' || plano === '') {
    alert('Por favor, preencha todos os campos!');
    return;
  }

  document.getElementById('mensagem').textContent = 'Cadastro realizado com sucesso!';
  formulario.reset();
});
