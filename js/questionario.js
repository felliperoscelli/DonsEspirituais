document.addEventListener('DOMContentLoaded', () => {
  const perguntas = [
  "Gostaria de falar com as pessoas e apresentar-lhes a vontade de Deus para elas?",
  "Gosta quando lhe pedem para fazer trabalhos manuais especiais em sua igreja?",
  "Compreende em detalhes as doutrinas bíblicas da igreja?",
  "Sente-se capaz de consolar a alguém que está perplexo ou sofrendo?",
  "Administra bem o seu dinheiro de modo que pode dar liberalmente à causa de Deus?",
  "Gosta de estar entre as pessoas e participar de suas atividades?",
  "Sente compaixão e trata de ajudar a viciados, sozinhos, etc.?",
  "Descobre facilmente novas verdades por si mesmo?",
  "É fácil para você escolher entre as diferentes alternativas bíblicas para problemas complicados?",
  "Crê firmemente nas promessas divinas?",
  "Sente compaixão pelos que sofrem enfermidades?",
  "Deus responde suas orações de maneira sobrenatural?",
  "Percebe claramente a diferença entre a verdade e o erro?",
  "Tem orado secretamente em algum idioma desconhecido para você?",
  "Tem declarado em seu próprio idioma alguma mensagem que foi dada em um idioma desconhecido para você?",
  "Sente-se chamado por Deus para ser responsável pelo cuidado e liderança do povo de Deus?",
  "Gosta de ajudar os dirigentes para que eles possam dedicar mais tempo a assuntos essenciais?",
  "Gosta de solucionar problemas complicados da igreja?",
  "Gosta de compartilhar com outros a Palavra de Deus?",
  "Gosta da ideia de visitar os irmãos regularmente?",
  "Agrada-lhe a ideia de ficar sem casar para dedicar todo o seu tempo à igreja?",
  "Interessa-se em procurar e descobrir pessoas que não tem comida ou casa?",
  "Adapta-se facilmente a outras culturas?",
  "Perde a noção do tempo quando ora?",
  "Sente que sua fé é suficientemente forte para poder expulsar o diabo de algum possesso?",
  "Sente que pode fortalecer e animar os desanimados?",
  "Gosta de participar da ordem e limpeza de sua igreja?",
  "Gosta de ler comentários bíblicos e estudar a fundo passagens difíceis da Bíblia?",
  "As pessoas o procuram para se aconselhar a respeito de seus problemas?",
  "Dá com muita liberalidade objetos ou dinheiro para a igreja?",
  "Gosta de planejar atividades para a igreja e realizá-las?",
  "É sensível às necessidades dos idosos e deficientes e procura ajudá-los de alguma maneira?",
  "Gosta de procurar soluções para problemas complicados?",
  "Estuda e lê bastante para aprender verdades bíblicas?",
  "Sente-se seguro em conhecer a vontade específica de Deus para o futuro de Sua obra, mesmo quando outros hesitam?",
  "Sente-se inclinado a orar pelos enfermos?",
  "Crê que no nome de Deus, mediante a fé e a oração você é capaz de alterar a ordem natural das coisas?",
  "Pode discernir os motivos que movem as pessoas?",
  "Sente a necessidade de dar alguma mensagem à igreja em um idioma não conhecido por você?",
  "Já experimentou alguma vez entender algum idioma não conhecido por você?",
  "É capaz de iniciar uma nova obra ou consolidar alguma já existente?",
  "Gosta de ajudar no escritório do pastor?",
  "Pode predizer com exatidão o resultado de suas decisões?",
  "Sente-se à vontade ao pedir a alguém que aceite a Jesus?",
  "Acha que gostaria de visitar os interessados da igreja e estudar a Bíblia com eles?",
  "É fácil para você controlar as inclinações diante do sexo oposto?",
  "Alegra-se quando alguém o visita e pede para ficar alguns dias em sua casa?",
  "Sente-se à vontade entre as pessoas de outra raça ou nacionalidade?",
  "Toma os pedidos de oração com muita seriedade e ora por eles em seu lar?",
  "Não tem medo da ideia de estar frente a frente com um endemoninhado?",
  "Tem costume de admoestar outros, produzindo correção e arrependimento?",
  "Sente satisfação ao realizar trabalhos domésticos na casa do Senhor?",
  "Gosta de partilhar com outros suas descobertas ou seu entendimento da Palavra de Deus?",
  "Acha fácil aplicar os princípios bíblicos aos problemas?",
  "Gosta de animar a outros para que deem com liberalidade?",
  "Sente-se à vontade ao delegar responsabilidade a outros?",
  "Gostaria de pertencer ao grupo 'Ministério dos Encarcerados'?",
  "É fácil para você entender as verdades bíblicas que são difíceis para outros?",
  "Sente-se seguro de conhecer a vontade de Deus para o progresso da obra?",
  "Confia plenamente no poder de Deus durante situações difíceis?",
  "Em nome de Deus, você se sente capaz de curar enfermos?",
  "Sua vida está em tal relacionamento com Deus que Ele pode usá-lo para realizar atos sobrenaturais?",
  "Sabe quando uma pessoa é influenciada por Deus ou pelo diabo?",
  "Já falou em algum idioma desconhecido por você?",
  "Tem desejo de poder interpretar alguma mensagem apresentada em algum idioma desconhecido por você?",
  "Você é consultado por outros irmãos a respeito de problemas eclesiásticos ou doutrinários?",
  "Preocupa-se com os necessitados e procura satisfazer suas necessidades?",
  "Sente-se capaz de desenvolver planos e levá-los a bom termo?",
  "Prefere dedicar seu tempo livre a pregar o evangelho?",
  "Gostaria de ocupar o púlpito todas as semanas?",
  "Acredita que não perderia uma bênção se ficasse sem casar?",
  "'Minha casa é sua casa'. Este é o seu lema prático?",
  "Aprecia a vida em um país estrangeiro?",
  "Gosta de orar pela igreja e o faz constantemente?",
  "Gostaria de enfrentar o demônio cara a cara e dominá-lo em nome de Jesus?",
  "Tem se sentido impressionado com mensagens especiais as quais você transmite sem se importar com as consequências?",
  "Está pronto para obedecer ordens, em vez de dá-las?",
  "Sente-se capaz de explicar a outros claramente os ensinos bíblicos?",
  "Anima aos inconstantes e desanimados?",
  "Sente-se comovido a procura fazer algo quando a igreja necessita de ajuda financeira?",
  "Sente que sua influência afeta a outros para trabalhar pelo Senhor?",
  "É impossível para você passar por alto algum esmoler?",
  "Você acha fácil apresentar alternativas sem tomar posições?",
  "Domina completamente as verdades bíblicas?",
  "Geralmente não se desanima quando as coisas não vão bem?",
  "Você ora de tal maneira que os doentes se sentem melhor?",
  "Você já realizou algum milagre pelo poder de Deus?",
  "Pode reconhecer os dons espirituais nos demais?",
  "A ideia de poder falar em línguas o atrai?",
  "Acredita que os dons de línguas e interpretação são realmente necessários nestes dias para a proclamação do evangelho?",
  "São suas opiniões tomadas a sério e seguidas pelo resto dos irmãos?",
  "Gosta de distribuir literatura, revistas, folhetos, etc.?",
  "Prefere presidir reuniões e apresentar alvos em vez de ser só um participante?",
  "Sente o desejo de falar com incrédulos a finalidade de ganhá-los?",
  "Fica emocionado com a ideia de poder ser o pastor da igreja?",
  "Acha que se você se casasse, sua família seria um estorvo em seu ministério em vez de uma bênção?",
  "Gosta de cumprimentar os visitantes da igreja e convidá-los a comer e/ou dormir em sua casa, se for necessário?",
  "Sente a necessidade de ser um pregador em outros países?",
  "É a oração seu exercício espiritual favorito?",
  "Já utilizou o poder de Deus para expulsar o demônio de alguma pessoa?",
  "É o progresso geral da obra e a satisfação das necessidades dos irmãos a grande obsessão de sua vida?",
  "Sente alegria e satisfação quando pode servir a alguém?",
  "Prefere ensinar que ser ajudante, e seus alunos praticam seus ensinos?",
  "Sente o desejo de chamar a atenção dos que estão procedendo mal?",
  "Você é capaz de ganhar muito dinheiro para a causa de Deus?",
  "Sente-se capaz de recrutar cristãos e pô-los para trabalhar?",
  "Percorre facilmente a segunda milha e/ou oferece a outra face?",
  "Os dirigentes e líderes geralmente buscam seus conselhos, você lhes mostra os planos que devem seguir, os quais regularmente dão certo?",
  "Você é procurado pelos demais irmãos para responder suas perguntas?",
  "Entre as graças cristãs, a fé é a sua favorita?",
  "Preocupa-se com a saúde física de seus semelhantes?",
  "Alguma vez já sentiu o desejo ou a inclinação de pedir a Deus que efetue algum ato sobrenatural para proveito de outro, crendo que Deus atenderá seu pedido?",
  "Percebe a presença do mal antes que seja evidente?",
  "O dom de línguas é atualmente necessário para a edificação do corpo de Cristo?",
  "Acha que é necessário ou benéfico para a igreja apresentar mensagens em idiomas desconhecidos e interpretá-los?",
  "Sente que é seu dever chamar a atenção de algum administrador que não está agindo bem?",
  "Prefere ser ajudante e não o professor de uma classe bíblica?",
  "Sente-se capacitado para presidir ou supervisionar os irmãos?",
  "Entende claramente os passos que levam uma pessoa à salvação?",
  "Gostaria de organizar, planejar e supervisionar todas as atividades da igreja?",
  "Considera-se capaz de ficar sem casar sem passar por tentações?",
  "Tem, de maneira regular, hóspedes em sua mesa, principalmente aos sábados?",
  "Temporariamente ou para sempre, gostaria de pregar o evangelho em outros países?",
  "Deus responde suas orações frequentemente de maneira tangível?",
  "Sente-se atraído a situações onde há endemoninhados e é procurado para expulsar o demônio pelo uso que você faz do poder de Deus?"
];

const perguntaContainer = document.getElementById('pergunta-container');
  const progressoBarra = document.querySelector('.progresso-barra');
  const anteriorBtn = document.getElementById('anterior');
  const proximoBtn = document.getElementById('proximo');
  const verResultadosBtn = document.getElementById('ver-resultados');

  let indiceAtual = 0;
  const respostas = new Array(perguntas.length).fill(null);

  const atualizarPergunta = () => {
    perguntaContainer.innerHTML = `
      <p>${perguntas[indiceAtual]}</p>
      <div class="opcoes">
        ${["Discordo completamente", "Discordo parcialmente", "Depende da situação", "Concordo parcialmente", "Concordo completamente"]
          .map((texto, valor) => `
            <label>
              <input type="radio" name="resposta" value="${valor}" ${respostas[indiceAtual] === valor ? 'checked' : ''}>
              ${texto}
            </label>
          `).join('')}
      </div>
    `;

    progressoBarra.style.width = `${((indiceAtual + 1) / perguntas.length) * 100}%`;
    anteriorBtn.disabled = indiceAtual === 0;
    proximoBtn.style.display = indiceAtual < perguntas.length - 1 ? 'inline-block' : 'none';
    verResultadosBtn.style.display = indiceAtual === perguntas.length - 1 ? 'inline-block' : 'none';
  };

  anteriorBtn.addEventListener('click', () => {
    indiceAtual -= 1;
    atualizarPergunta();
  });

  proximoBtn.addEventListener('click', () => {
    const respostaSelecionada = document.querySelector('input[name="resposta"]:checked');
    if (!respostaSelecionada) {
      alert("Por favor, selecione uma resposta.");
      return;
    }
    respostas[indiceAtual] = parseInt(respostaSelecionada.value, 10);
    indiceAtual += 1;
    atualizarPergunta();
  });

  verResultadosBtn.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.setItem('respostas', JSON.stringify(respostas));
    window.location.href = 'resultado.html';
  });

  atualizarPergunta();
});