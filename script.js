/*function escolherHorario() {
  let horarioValido = false;
  let horario;

  while (!horarioValido) {
    horario = prompt("Digite a hora preferêncial! (ex:14:30)");

    //Expressão regular para validar o formato HH:MM
    const regex = /^([1]\d|2[0-3]):([0-5]\d)$/;

    if (regex.test(horario)) {
      horarioValido = true;
      console.log(`Você escolheu o horário: ${horario}`);
    } else {
      console.log("Formato de horário inválido. Tente novamente.");
    }
  }

  return horario;
}
*/
/*function escolherEncontro() {
  const opcoesEncontro = {
    Restaurante: [
      "Algum restaurante que tu escolher",
      "Japa(não sou muito chegado)",
      "Algum bar",
    ],
    Cinema: ["Coringa 2(Quando lançar)", "Ou algum outro que tu escolher"],
    Netflix: [
      "Maratonar filmes da marvel",
      "Ver um animezinho",
      "Ou alguma outra coisa",
    ],
  };

  let escolhaPrincipal = prompt(
    "Escolha uma opção de rolezinho: Restaurante, Cinema, Netflix"
  );

  // Agora, baseado na escolha principal, mostra as sub-opções
  let subOpcoes = opcoesEncontro[escolhaPrincipal];
  let escolhaSecundaria = prompt(
    `Você escolheu ${escolhaPrincipal}. Escolha uma opção: ${subOpcoes.join(
      ", "
    )}`
  );

  while (!subOpcoes.includes(escolhaSecundaria)) {
    escolhaSecundaria = prompt(
      `Opção inválida. Escolha entre: ${subOpcoes.join(", ")}`
    );
  }

  console.log(`Você escolheu ${escolhaPrincipal} - ${escolhaSecundaria}!`);

  return { atividade: escolhaPrincipal, detalhe: escolhaSecundaria };
}
*/
function atualizarOpcoesEspecificas() {
  const tipoEncontro = document.getElementById("tipoEncontro").value;
  const opcaoEspecifica = document.getElementById("opcaoEspecifica");

  const opcoesEncontro = {
    Role: ["Restaurante", "Festa", "Algum bar"],
    Cinema: ["Coringa 2(Quando lançar).", "Ou algum outro que tu escolher."],
    Netflix: [
      "Maratonar filmes da marvel",
      "Ver um animezinho",
      "Ou alguma outra coisa",
    ],
  };

  // Limpa as opções anteriores
  opcaoEspecifica.innerHTML = '<option value="">Selecione</option>';

  if (tipoEncontro && opcoesEncontro[tipoEncontro]) {
    opcoesEncontro[tipoEncontro].forEach((opcao) => {
      const optionElement = document.createElement("option");
      optionElement.value = opcao;
      optionElement.textContent = opcao;
      opcaoEspecifica.appendChild(optionElement);
    });
  }
}

function resetarPlanejamento() {
  // Limpa as seleções
  document.getElementById("tipoEncontro").value = "";
  document.getElementById("opcaoEspecifica").innerHTML =
    '<option value="">Selecione</option>';
  document.getElementById("opcaoEspecifica").value = "";
  document.getElementById("horario").value = "";

  // Limpa a mensagem de erro e o resultado
  mostrarMensagemErro("");
  document.getElementById("resultado").innerHTML = "";
}

function mostrarMensagemErro(mensagem) {
  const mensagemErro = document.getElementById("mensagemErro");
  mensagemErro.textContent = mensagem;
}

//Função principal para planejar o encontro
function planejamentoEncontro() {
  const tipoEncontro = document.getElementById("tipoEncontro").value;
  const opcaoEspecifica = document.getElementById("opcaoEspecifica").value;
  const horario = document.getElementById("horario").value;
  //valida o horario
  const regex = /^([1]\d|2[0-3]):([0-5]\d)$/;

  if (!regex.test(horario)) {
    alert("Formato de horário inválido. Tente novamente.");
    return;
  }
  //valia as escolhas
  if (!tipoEncontro || !opcaoEspecifica) {
    alert("Por favor, Selecione todas as opções.");
    return;
  }

  //exibe os resultados na pagina
  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerHTML = `Fechou então,vamos para ${tipoEncontro} ${opcaoEspecifica} às ${horario}.`;
}

//Adiciona os eventos de mudança de clique
document.addEventListener("DOMContentLoaded", function () {
  const tipoEncontro = document.getElementById("tipoEncontro");
  const botao = document.getElementById("iniciarPlanejamento");
  const botaoResetar = document.getElementById("resetarPlanejamento");

  if (tipoEncontro) {
    tipoEncontro.addEventListener("change", atualizarOpcoesEspecificas);
  }
  if (botao) {
    botao.addEventListener("click", planejamentoEncontro);
  }
  if (botaoResetar) {
    botaoResetar.addEventListener("click", resetarPlanejamento);
  }
});
