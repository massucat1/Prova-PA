document.addEventListener('DOMContentLoaded', function () {
    const imagens = document.querySelectorAll('.gallery img');
    const descricoes = document.querySelectorAll('.desc');

    // Array de objetos contendo as informações de cada bioma
    const biomas = [
        { nome: 'Floresta com Araucárias', caracteristicas: 'Este é um dos biomas mais característicos do Paraná, marcado pela presença da araucária, uma árvore icônica da região. A floresta com araucárias abriga uma grande biodiversidade, incluindo uma variedade de espécies vegetais e animais.', localizacao: 'Principalmente no Planalto Serrano e na região sul do estado.', biodiversidade: 'A floresta com araucárias é lar de uma variedade de espécies, incluindo mamíferos como o lobo-guará e o bugio, aves como o papagaio-de-peito-roxo e a gralha-azul, além de uma grande diversidade de plantas.' },
        { nome: 'Mata Atlântica', caracteristicas: 'A Mata Atlântica é um bioma extremamente diversificado, caracterizado por sua rica biodiversidade de plantas e animais. No Paraná, a Mata Atlântica está presente em áreas costeiras e de encosta da Serra do Mar, abrigando uma variedade de espécies únicas e ameaçadas de extinção.', localizacao: 'Ao longo da costa e nas encostas da Serra do Mar, especialmente no litoral paranaense.', biodiversidade: 'A Mata Atlântica paranaense abriga uma grande diversidade de espécies, incluindo animais como o sagui-da-serra-escuro e a anta, além de uma variedade de plantas como a palmeira-juçara e o pinheiro-do-paraná.' },
        { nome: 'Campos Naturais', caracteristicas: 'Os campos naturais, também conhecidos como campos do Paraná, são encontrados em áreas de relevo mais plano e abrigam uma vegetação característica de gramíneas e arbustos. Esses campos são importantes para a conservação de espécies adaptadas a ambientes abertos, como aves campestres e insetos.', localizacao: 'Principalmente nas regiões centro-oeste e sudoeste do estado.', biodiversidade: 'Os campos naturais são habitat de uma variedade de animais, incluindo aves como o quero-quero e o tico-tico, além de espécies de insetos e pequenos mamíferos. A vegetação inclui gramíneas como a grama-seda e o capim-barba-de-bode.' },
        { nome: 'Áreas Úmidas', caracteristicas: 'O Paraná também possui diversas áreas úmidas, como manguezais, banhados e várzeas, que desempenham um papel crucial na regulação do ciclo hidrológico, na manutenção da biodiversidade e na provisão de serviços ecossistêmicos essenciais.', localizacao: 'Ao longo das margens de rios e lagos, especialmente nas regiões litorâneas e de planície aluvial.', biodiversidade: 'As áreas úmidas abrigam uma grande variedade de espécies adaptadas a esses ambientes, incluindo aves aquáticas como o socó-boi e o mergulhão-pequeno, além de plantas aquáticas como a aguapé e o capim-navalha.' },
        { nome: 'Floresta Ombrófila Mista', caracteristicas: 'A Floresta Ombrófila Mista é um bioma de transição entre a Mata Atlântica e a Floresta com Araucárias, caracterizado pela presença de ambas as espécies de árvores. Ela abriga uma grande diversidade de fauna e flora, adaptada a um clima mais úmido e temperado.', localizacao: 'Principalmente na região centro-sul do estado, em áreas de transição entre a Mata Atlântica e a Floresta com Araucárias.', biodiversidade: 'A Floresta Ombrófila Mista é habitat de uma variedade de animais, incluindo aves como o gavião-pega-macaco e o tucano-de-bico-verde, além de mamíferos como o quati e o veado-mateiro. A vegetação inclui espécies de araucárias, pinheiros e imbuias.' },
        { nome: 'Campos de Altitude', caracteristicas: 'Os campos de altitude são encontrados em áreas montanhosas do Paraná, caracterizados por uma vegetação rasteira adaptada a condições climáticas mais frias e ventosas. Esses campos são importantes para a conservação de espécies endêmicas e ameaçadas de extinção.', localizacao: 'Principalmente nas regiões de serra e planalto do estado, em altitudes superiores a 1.000 metros.', biodiversidade: 'Os campos de altitude abrigam uma variedade de espécies adaptadas a condições climáticas extremas, incluindo aves como o tico-tico-da-serra e o choquinha-de-coleira, além de plantas como a bracatinga e o capim-limão.' },
        { nome: 'Floresta Ombrófila Densa', caracteristicas: 'A Floresta Ombrófila Densa é um bioma de clima úmido e quente, caracterizado pela presença de uma grande diversidade de árvores de grande porte e densa vegetação. Ela abriga uma rica biodiversidade de flora e fauna.', localizacao: 'Principalmente na região norte e noroeste do estado, em áreas de baixada e planície aluvial.', biodiversidade: 'A Floresta Ombrófila Densa é habitat de uma grande variedade de animais, incluindo aves como a araponga e o pavó, além de mamíferos como a anta e o macaco-prego. A vegetação inclui espécies de árvores como o jatobá, o cedro e a figueira.' },
        // Adicione os outros biomas conforme necessário
    ];

    imagens.forEach(function (imagem, index) {
        imagem.addEventListener('mouseover', function () {
            descricoes[index].innerHTML = '<strong>' + biomas[index].nome + '</strong><br>' +
                '<strong>Características:</strong> ' + biomas[index].caracteristicas + '<br>' +
                '<strong>Localização:</strong> ' + biomas[index].localizacao + '<br>' +
                '<strong>Biodiversidade:</strong> ' + biomas[index].biodiversidade; // Define o texto da descrição com base no índice da imagem
            descricoes[index].style.display = 'block'; // Exibe a descrição quando o mouse passa sobre a imagem
        });

        imagem.addEventListener('mouseleave', function () {
            descricoes[index].style.display = 'none'; // Oculta a descrição quando o mouse sai da imagem
        });
    });
});
