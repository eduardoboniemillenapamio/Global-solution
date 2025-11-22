const formContato = document.getElementById("form-contato");
const mensagemConfirmacao = document.getElementById("mensagem-confirmacao");

if (formContato) {
  formContato.addEventListener("submit", (e) => {
    e.preventDefault(); // Impede o envio do formulário até a validação

    // Verifica se o formulário é válido
    if (formContato.checkValidity()) {
      // Exibe a mensagem de confirmação após validação
      mensagemConfirmacao.classList.add("mostrar");

      // Limpa o formulário após confirmação
      formContato.reset();

      // Remove a mensagem de confirmação após 4 segundos
      setTimeout(() => {
        mensagemConfirmacao.classList.remove("mostrar");
      }, 4000);
    } else {
      // Exibe as mensagens de erro de validação para o usuário
      formContato.reportValidity();
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById('courseModal'); // Seleciona o modal
    const closeModal = document.getElementById('closeModal'); // Seleciona o botão de fechar
    const courseCards = document.querySelectorAll('.course-card'); // Seleciona todos os cards de curso
    const modalTitle = document.getElementById('modalTitle'); // Seleciona o título do modal
    const modalDescription = document.getElementById('modalDescription'); // Seleciona a descrição do modal

    // Dados dos cursos com a descrição completa
    const courseDetails = {
        1: {
            title: "IA no Mercado de Trabalho: Desafios e Oportunidades",
            description: "Neste curso, explore como a Inteligência Artificial está impactando o mercado de trabalho, criando novas oportunidades e desafios. Aprenda sobre as áreas que estão sendo transformadas pela IA, as competências requeridas no mercado e como os profissionais podem se adaptar a essas mudanças."
        },
        2: {
            title: "Desafios e Avanços da Tecnologia no Século XXI",
            description: "Este curso aborda os avanços tecnológicos do século XXI, com foco nas novas tecnologias como IA, 5G, blockchain, e a internet das coisas. Discutimos também os desafios que surgem com a aceleração da inovação, incluindo as questões éticas e sociais que precisam ser debatidas."
        },
        3: {
            title: "Curso Rápido de Inteligência Artificial",
            description: "Aprenda os fundamentos da Inteligência Artificial de forma rápida e eficaz. Este curso abordará desde os conceitos básicos, como algoritmos e redes neurais, até as suas aplicações práticas no mercado de trabalho."
        },
        4: {
            title: "Como se Reinventar no Cenário das Inovações",
            description: "Neste curso, você aprenderá como se adaptar e inovar em um cenário de rápidas mudanças tecnológicas. Descubra as estratégias para se reinventar profissionalmente e como se manter competitivo em um mundo altamente inovador."
        }
    };

    // Evento de clique nos cards para abrir o modal
    courseCards.forEach(card => {
        card.addEventListener('click', () => {
            const courseId = card.getAttribute('data-course-id'); // Pega o ID do curso clicado

            // Atualiza o conteúdo do modal com base no ID do curso
            const course = courseDetails[courseId];
            modalTitle.textContent = course.title;
            modalDescription.textContent = course.description;

            // Exibe o modal
            modal.style.display = 'flex';
        });
    });

    // Fecha o modal quando o botão "Fechar" é clicado
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none'; // Esconde o modal
    });

    // Fecha o modal se o usuário clicar fora do conteúdo do modal
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none'; // Esconde o modal
        }
    });
});
