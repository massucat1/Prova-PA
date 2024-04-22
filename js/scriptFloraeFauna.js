document.addEventListener('DOMContentLoaded', function () {
    const imagens = document.querySelectorAll('.gallery img');
    const descricoes = document.querySelectorAll('.desc');

    // Array de objetos contendo as informações de cada espécie
    const especies = [
        { nome: 'Onça-pintada (Panthera onca)', habitat: 'Florestas tropicais e savanas', tamanho: 'Até 2,7 metros de comprimento', descricao: 'A onça-pintada é o maior felino das Américas e um símbolo da fauna brasileira. Ela é encontrada em várias regiões do Paraná, principalmente em áreas de mata densa e próximas a corpos d\'água.' },
        { nome: 'Gralha-azul (Cyanocorax caeruleus)', habitat: 'Florestas de araucárias e campos', tamanho: 'Aproximadamente 40 centímetros', descricao: 'A gralha-azul é uma ave endêmica da região sul do Brasil, incluindo o Paraná. Ela é conhecida por sua plumagem azul brilhante e sua vocalização característica.' },
        { nome: 'Mico-leão (Leontopithecus chrysomelas)', habitat: 'Florestas tropicais e áreas de Mata Atlântica', tamanho: 'Cerca de 30 centímetros de comprimento', descricao: 'O mico-leão é um primata pequeno e ameaçado de extinção, encontrado em algumas áreas remanescentes de Mata Atlântica no Paraná. Ele é conhecido por sua pelagem dourada e sua juba ao redor da cabeça.' },
        { nome: 'Tamanduá-bandeira (Myrmecophaga tridactyla)', habitat: 'Florestas tropicais e cerrado', tamanho: 'Até 2 metros de comprimento, incluindo a cauda', descricao: 'O tamanduá-bandeira é o maior tamanduá do mundo e pode ser encontrado em vários habitats do Paraná. Ele se alimenta principalmente de formigas e cupins, usando sua língua longa e pegajosa.' },
        { nome: 'Araucária (Araucaria angustifolia)', habitat: 'Florestas de araucárias e campos', tamanho:'Variável, pode atingir alturas de até 50 metros',descricao:'A Araucária, também conhecida como pinheiro-do-paraná, é uma árvore nativa da região sul do Brasil. É reconhecida por sua forma distinta, com uma copa piramidal e galhos horizontais. As sementes da Araucária, conhecidas como pinhões, são um alimento importante para diversas espécies de animais e também são consumidas pelos seres humanos.' },
        { nome: 'Ipês (Tabebuia spp.)', habitat: 'Diversos, desde florestas tropicais até cerrados', tamanho: 'Variável, algumas espécies podem atingir até 30 metros de altura', descricao: 'Os Ipês são árvores conhecidas por sua espetacular floração, produzindo flores em tons de amarelo, rosa, roxo e branco, dependendo da espécie. São bastante valorizados em paisagismo devido à sua beleza e resistência. Podem ser encontrados em várias regiões do Brasil.' },
        { nome: 'Bambu (Gênero Bambusa)', habitat: 'Principalmente em regiões de clima tropical e subtropical', tamanho: 'Variável, algumas espécies podem atingir até 30 metros de altura', descricao: 'O Bambu é uma planta gramínea conhecida por sua rápida taxa de crescimento e versatilidade. Possui uma ampla gama de usos, desde materiais de construção até decoração e alimentos. O Bambu desempenha um papel importante na cultura e economia de muitos países, especialmente na Ásia.' },
        { nome: 'Orquídeas (Família Orchidaceae)', habitat: 'Diversos, desde florestas tropicais até desertos', tamanho: 'Variável, algumas espécies são microscópicas, enquanto outras podem ter flores de até 20 centímetros de diâmetro', descricao: 'As Orquídeas são uma das maiores famílias de plantas com flores, conhecidas por sua grande diversidade de formas e cores. São apreciadas em todo o mundo por sua beleza ornamental e algumas espécies são altamente valorizadas no comércio de plantas. As Orquídeas podem ser epífitas, terrestres ou saprófitas, e são encontradas em uma ampla variedade de habitats ao redor do globo.' },
    ];

    imagens.forEach(function (imagem, index) {
        imagem.addEventListener('mouseover', function () {
            descricoes[index].innerHTML = '<strong>' + especies[index].nome + '</strong><br>' +
                '<strong>Habitat:</strong> ' + especies[index].habitat + '<br>' +
                '<strong>Tamanho:</strong> ' + especies[index].tamanho + '<br>' +
                '<strong>Descrição:</strong> ' + especies[index].descricao; // Define o texto da descrição com base no índice da imagem
            descricoes[index].style.display = 'block'; // Exibe a descrição quando o mouse passa sobre a imagem
        });

        imagem.addEventListener('mouseleave', function () {
            descricoes[index].style.display = 'none'; // Oculta a descrição quando o mouse sai da imagem
        });
    });
});
