document.addEventListener('DOMContentLoaded', () => {

const dons = [
  "Profecia", "Serviço", "Ensino", "Exortação", "Dádivas", "Liderança", "Misericórdia",
  "Sabedoria", "Conhecimento", "Fé", "Curas", "Milagres", "Discernimento",
  "Línguas", "Interpretação", "Apostolado", "Ajudas", "Administração", "Evangelismo",
  "Pastorado", "Celibato", "Hospitalidade", "Missionário", "Intercessão", "Exorcismo"
];

const resumosDons = {
  "Profecia": {
    resumo: "Capacidade de falar a verdade de Deus com clareza e poder, prevendo acontecimentos futuros.",
    exemploBiblico: "Elias em 1 Reis 18:36-39."
  },
  "Serviço": {
    resumo: "Habilidade de ajudar e servir aos outros com alegria e humildade.",
    exemploBiblico: "Marta em Lucas 10:38-42."
  },
  "Ensino": {
    resumo: "Capacidade de explicar a Palavra de Deus de maneira compreensível e aplicável.",
    exemploBiblico: "Paulo em Atos 18:11."
  },
  "Exortação": {
    resumo: "Habilidade de encorajar e consolar os outros, ajudando-os a viver de acordo com os princípios bíblicos.",
    exemploBiblico: "Barnabé em Atos 4:36."
  },
  "Dádivas": {
    resumo: "Capacidade de contribuir generosamente e com alegria para a obra de Deus.",
    exemploBiblico: "Os Macedônios em 2 Coríntios 8:1-5."
  },
  "Liderança": {
    resumo: "Habilidade de liderar e organizar pessoas para realizar a obra de Deus.",
    exemploBiblico: "Moisés em Êxodo 18:13-26."
  },
  "Misericórdia": {
    resumo: "Capacidade de mostrar compaixão e cuidado para com os necessitados e sofredores.",
    exemploBiblico: "O Bom Samaritano em Lucas 10:30-37."
  },
  "Sabedoria": {
    resumo: "Habilidade de aplicar o conhecimento de Deus de maneira prática e justa.",
    exemploBiblico: "Salomão em 1 Reis 3:16-28."
  },
  "Conhecimento": {
    resumo: "Capacidade de entender profundamente as verdades bíblicas e comunicá-las.",
    exemploBiblico: "Daniel em Daniel 1:17."
  },
  "Fé": {
    resumo: "Habilidade de confiar plenamente em Deus em todas as circunstâncias.",
    exemploBiblico: "Abraão em Hebreus 11:8-10."
  },
  "Curas": {
    resumo: "Capacidade de Deus operar curas físicas através de você.",
    exemploBiblico: "Pedro em Atos 3:1-10."
  },
  "Milagres": {
    resumo: "Habilidade de Deus operar milagres através de você.",
    exemploBiblico: "Eliseu em 2 Reis 4."
  },
  "Discernimento": {
    resumo: "Capacidade de discernir a verdade do erro, especialmente em questões espirituais.",
    exemploBiblico: "Paulo em Atos 16:16-18."
  },
  "Línguas": {
    resumo: "Capacidade de falar em línguas desconhecidas para edificação espiritual.",
    exemploBiblico: "Os discípulos em Atos 2:4."
  },
  "Interpretação": {
    resumo: "Habilidade de interpretar mensagens faladas em línguas desconhecidas.",
    exemploBiblico: "Paulo em 1 Coríntios 14:13."
  },
  "Apostolado": {
    resumo: "Capacidade de iniciar novas igrejas e ministérios.",
    exemploBiblico: "Paulo em Romanos 1:1."
  },
  "Ajudas": {
    resumo: "Habilidade de ajudar outros membros do corpo de Cristo de maneira prática.",
    exemploBiblico: "Tabita (Dorcas) em Atos 9:36."
  },
  "Administração": {
    resumo: "Capacidade de organizar e gerenciar tarefas e pessoas de maneira eficiente.",
    exemploBiblico: "José em Gênesis 41:39-41."
  },
  "Evangelismo": {
    resumo: "Habilidade de proclamar o evangelho de maneira eficaz a não-crentes.",
    exemploBiblico: "Filipe em Atos 8:26-40."
  },
  "Pastorado": {
    resumo: "Capacidade de cuidar e liderar espiritualmente uma congregação.",
    exemploBiblico: "Pedro em João 21:15-17."
  },
  "Celibato": {
    resumo: "Habilidade de viver uma vida solteira para servir melhor a Deus.",
    exemploBiblico: "Paulo em 1 Coríntios 7:7-8."
  },
  "Hospitalidade": {
    resumo: "Capacidade de receber e cuidar de visitantes com alegria e generosidade.",
    exemploBiblico: "Lídia em Atos 16:14-15."
  },
  "Missionário": {
    resumo: "Habilidade de ir a outros lugares para proclamar o evangelho.",
    exemploBiblico: "Paulo em Atos 13:2-3."
  },
  "Intercessão": {
    resumo: "Capacidade de orar intensamente pelos outros.",
    exemploBiblico: "Epafras em Colossenses 4:12."
  },
  "Exorcismo": {
    resumo: "Habilidade de expulsar demônios em nome de Jesus.",
    exemploBiblico: "Jesus em Marcos 1:23-27."
  }
};

  const respostas = JSON.parse(localStorage.getItem('respostas')) || [];
  const resultadoLista = document.getElementById('resultado-lista');

  const calcularPontuacoes = () => {
    const pontuacoes = Array(dons.length).fill(0);
    respostas.forEach((resposta, index) => {
      const domIndex = index % dons.length;
      pontuacoes[domIndex] += resposta;
    });
    return pontuacoes;
  };

  const exibirResultados = () => {
    const pontuacoes = calcularPontuacoes();
    const resultados = dons.map((dom, index) => ({ dom, pontuacao: pontuacoes[index] }));
    resultados.sort((a, b) => b.pontuacao - a.pontuacao);

    resultados.forEach((resultado) => {
      const li = document.createElement('li');
      li.innerHTML = `
        <strong>${resultado.dom}:</strong> ${resultado.pontuacao}
        <p>${resumosDons[resultado.dom]?.resumo || "Resumo não disponível."}</p>
        <p><em>Exemplo Bíblico:</em> ${resumosDons[resultado.dom]?.exemploBiblico || "Exemplo não disponível."}</p>
      `;
      resultadoLista.appendChild(li);
    });
  };

document.getElementById('salvar-pdf').addEventListener('click', () => {
  if (typeof window.jspdf !== "undefined") {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Selecionar o conteúdo da página
    const elemento = document.querySelector('.resultado-container');

    // Renderizar o conteúdo no PDF com escala ajustada
    doc.html(elemento, {
      callback: function (doc) {
        doc.save("resultados_dons_espirituais.pdf");
      },
      x: 10,
      y: 10,
      width: 190, // Ajusta o conteúdo à largura da página
      html2canvas: {
        scale: 0.7 // Reduz a escala do conteúdo para ajustar o tamanho da fonte
      }
    });
  } else {
    alert("Erro: Biblioteca jsPDF não carregada. Verifique sua conexão com a internet.");
  }
});



  exibirResultados();
});