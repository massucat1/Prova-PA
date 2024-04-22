document.addEventListener("DOMContentLoaded", function () {
    const especies = {
        "Gralha-azul (Cyanocorax caeruleus)": {
            bioma: "Floresta com Araucárias",
            descricao: "A gralha-azul (Cyanocorax caeruleus) é uma ave da família dos corvídeos...",
            ameacas: "A principal ameaça à gralha-azul é a perda de habitat devido ao desmatamento...",
            medidasConservacao: "Para proteger a gralha-azul, são necessárias medidas como...",
            extinta: false
        },
        "Bugio (Alouatta guariba)": {
            bioma: "Floresta com Araucárias",
            descricao: "O bugio (Alouatta guariba) é um macaco da família Atelidae...",
            ameacas: "As principais ameaças ao bugio incluem a caça ilegal, o tráfico de animais...",
            medidasConservacao: "Para proteger o bugio, são necessárias medidas como...",
            extinta: false
        },
        "Papagaio-charão (Amazona pretrei)": {
            bioma: "Floresta com Araucárias",
            descricao: "O papagaio-charão (Amazona pretrei) é uma espécie de papagaio...",
            ameacas: "As principais ameaças ao papagaio-charão incluem o tráfico de animais...",
            medidasConservacao: "Para proteger o papagaio-charão, são necessárias medidas como...",
            extinta: false
        },
        "Cutia (Dasyprocta azarae)": {
            bioma: "Floresta com Araucárias",
            descricao: "A cutia (Dasyprocta azarae) é um roedor encontrado...",
            ameacas: "As principais ameaças à cutia incluem a caça ilegal...",
            medidasConservacao: "Para proteger a cutia, são necessárias medidas como...",
            extinta: false
        },
        "Quati (Nasua nasua)": {
            bioma: "Floresta com Araucárias",
            descricao: "O quati (Nasua nasua) é um mamífero da família Procyonidae...",
            ameacas: "As principais ameaças ao quati incluem a perda de habitat...",
            medidasConservacao: "Para proteger o quati, são necessárias medidas como...",
            extinta: false
        },
        "Cachorro-do-mato (Cerdocyon thous)": {
            bioma: "Campos Naturais",
            descricao: "O cachorro-do-mato (Cerdocyon thous) é um canídeo...",
            ameacas: "As principais ameaças ao cachorro-do-mato incluem...",
            medidasConservacao: "Para proteger o cachorro-do-mato, são necessárias medidas como...",
            extinta: false
        },
        "Graxaim-do-campo (Lycalopex gymnocercus)": {
            bioma: "Campos Naturais",
            descricao: "O graxaim-do-campo (Lycalopex gymnocercus) é um canídeo...",
            ameacas: "As principais ameaças ao graxaim-do-campo incluem...",
            medidasConservacao: "Para proteger o graxaim-do-campo, são necessárias medidas como...",
            extinta: false
        },
        "Codorna-do-campo (Nothura maculosa)": {
            bioma: "Campos Naturais",
            descricao: "A codorna-do-campo (Nothura maculosa) é uma ave...",
            ameacas: "As principais ameaças à codorna-do-campo incluem...",
            medidasConservacao: "Para proteger a codorna-do-campo, são necessárias medidas como...",
            extinta: false
        },
        "Tatu-bola (Tolypeutes tricinctus)": {
            bioma: "Campos Naturais",
            descricao: "O tatu-bola (Tolypeutes tricinctus) é um tatu...",
            ameacas: "As principais ameaças ao tatu-bola incluem...",
            medidasConservacao: "Para proteger o tatu-bola, são necessárias medidas como...",
            extinta: true
        },
        "Veado-campeiro (Ozotoceros bezoarticus)": {
            bioma: "Campos Naturais",
            descricao: "O veado-campeiro (Ozotoceros bezoarticus) é um veado...",
            ameacas: "As principais ameaças ao veado-campeiro incluem...",
            medidasConservacao: "Para proteger o veado-campeiro, são necessárias medidas como...",
            extinta: false
        },
        "Mico-leão-dourado (Leontopithecus rosalia)": {
            bioma: "Mata Atlântica",
            descricao: "O mico-leão-dourado (Leontopithecus rosalia) é um primata endêmico...",
            ameacas: "As principais ameaças ao mico-leão-dourado incluem...",
            medidasConservacao: "Para proteger o mico-leão-dourado, são necessárias medidas como...",
            extinta: false
        },
        "Onça-pintada (Panthera onca)": {
            bioma: "Mata Atlântica",
            descricao: "A onça-pintada (Panthera onca) é um felino...",
            ameacas: "As principais ameaças à onça-pintada incluem...",
            medidasConservacao: "Para proteger a onça-pintada, são necessárias medidas como...",
            extinta: false
        },
        "Gavião-real (Harpia harpyja)": {
            bioma: "Mata Atlântica",
            descricao: "O gavião-real (Harpia harpyja) é uma ave de rapina...",
            ameacas: "As principais ameaças ao gavião-real incluem...",
            medidasConservacao: "Para proteger o gavião-real, são necessárias medidas como...",
            extinta: false
        },
        "Anta (Tapirus terrestris)": {
            bioma: "Mata Atlântica",
            descricao: "A anta (Tapirus terrestris) é um mamífero...",
            ameacas: "As principais ameaças à anta incluem...",
            medidasConservacao: "Para proteger a anta, são necessárias medidas como...",
            extinta: false
        },
        "Sagui-de-tufos-brancos (Callithrix jacchus)": {
            bioma: "Mata Atlântica",
            descricao: "O sagui-de-tufos-brancos (Callithrix jacchus) é um pequeno primata...",
            ameacas: "As principais ameaças ao sagui-de-tufos-brancos incluem...",
            medidasConservacao: "Para proteger o sagui-de-tufos-brancos, são necessárias medidas como...",
            extinta: false
        },
        "Jacaré-do-papo-amarelo (Caiman latirostris)": {
            bioma: "Áreas Úmidas",
            descricao: "O jacaré-do-papo-amarelo (Caiman latirostris) é um réptil da família Alligatoridae...",
            ameacas: "As principais ameaças ao jacaré-do-papo-amarelo incluem...",
            medidasConservacao: "Para proteger o jacaré-do-papo-amarelo, são necessárias medidas como...",
            extinta: false
        },
        "Tuiuiú (Jabiru mycteria)": {
            bioma: "Áreas Úmidas",
            descricao: "O tuiuiú (Jabiru mycteria) é uma ave da família Ciconiidae...",
            ameacas: "As principais ameaças ao tuiuiú incluem...",
            medidasConservacao: "Para proteger o tuiuiú, são necessárias medidas como...",
            extinta: false
        },
        "Arara-azul-de-lear (Anodorhynchus leari)": {
            bioma: "Áreas Úmidas",
            descricao: "A arara-azul-de-lear (Anodorhynchus leari) é uma espécie de arara...",
            ameacas: "As principais ameaças à arara-azul-de-lear incluem...",
            medidasConservacao: "Para proteger a arara-azul-de-lear, são necessárias medidas como...",
            extinta: true
        },
        "Capivara (Hydrochoerus hydrochaeris)": {
            bioma: "Áreas Úmidas",
            descricao: "A capivara (Hydrochoerus hydrochaeris) é o maior roedor do mundo...",
            ameacas: "As principais ameaças à capivara incluem...",
            medidasConservacao: "Para proteger a capivara, são necessárias medidas como...",
            extinta: false
        },
        "Socó-boi (Tigrisoma lineatum)": {
            bioma: "Áreas Úmidas",
            descricao: "O socó-boi (Tigrisoma lineatum) é uma ave aquática...",
            ameacas: "As principais ameaças ao socó-boi incluem...",
            medidasConservacao: "Para proteger o socó-boi, são necessárias medidas como...",
            extinta: false
        },
        "Pássaro-preto (Gnorimopsar chopi)": {
            bioma: "Campos de Altitudes",
            descricao: "O pássaro-preto (Gnorimopsar chopi) é uma ave da família Icteridae...",
            ameacas: "As principais ameaças ao pássaro-preto incluem...",
            medidasConservacao: "Para proteger o pássaro-preto, são necessárias medidas como...",
            extinta: false
        },
        "Graxaim (Pseudalopex gymnocercus)": {
            bioma: "Campos de Altitudes",
            descricao: "O graxaim (Pseudalopex gymnocercus) é um mamífero da família Canidae...",
            ameacas: "As principais ameaças ao graxaim incluem...",
            medidasConservacao: "Para proteger o graxaim, são necessárias medidas como...",
            extinta: false
        },
        "Pica-pau-anão-barrado (Veniliornis cassini)": {
            bioma: "Campos de Altitudes",
            descricao: "O pica-pau-anão-barrado (Veniliornis cassini) é uma ave da família Picidae...",
            ameacas: "As principais ameaças ao pica-pau-anão-barrado incluem...",
            medidasConservacao: "Para proteger o pica-pau-anão-barrado, são necessárias medidas como...",
            extinta: false
        },
        "Tico-tico (Zonotrichia capensis)": {
            bioma: "Campos de Altitudes",
            descricao: "O tico-tico (Zonotrichia capensis) é uma ave da família Emberizidae...",
            ameacas: "As principais ameaças ao tico-tico incluem...",
            medidasConservacao: "Para proteger o tico-tico, são necessárias medidas como...",
            extinta: false
        },
        "Anambé-branco (Snowornis cryptolophus)": {
            bioma: "Campos de Altitudes",
            descricao: "O anambé-branco (Snowornis cryptolophus) é uma ave da família Thamnophilidae...",
            ameacas: "As principais ameaças ao anambé-branco incluem...",
            medidasConservacao: "Para proteger o anambé-branco, são necessárias medidas como...",
            extinta: true
        },
        "Pica-pau-de-cabeça-amarela (Celeus flavescens)": {
            bioma: "Floresta Ombrófila Mista",
            descricao: "O pica-pau-de-cabeça-amarela (Celeus flavescens) é uma ave da família Picidae...",
            ameacas: "As principais ameaças ao pica-pau-de-cabeça-amarela incluem...",
            medidasConservacao: "Para proteger o pica-pau-de-cabeça-amarela, são necessárias medidas como...",
            extinta: false
        },
        "Tatu (Dasypus novemcinctus)": {
            bioma: "Floresta Ombrófila Mista",
            descricao: "O tatu (Dasypus novemcinctus) é um mamífero da família Dasypodidae...",
            ameacas: "As principais ameaças ao tatu incluem...",
            medidasConservacao: "Para proteger o tatu, são necessárias medidas como...",
            extinta: false
        },
        "Macuco (Tinamus solitarius)": {
            bioma: "Floresta Ombrófila Mista",
            descricao: "O macuco (Tinamus solitarius) é uma ave da família Tinamidae...",
            ameacas: "As principais ameaças ao macuco incluem...",
            medidasConservacao: "Para proteger o macuco, são necessárias medidas como...",
            extinta: false
        },
        "Tucano-de-bico-preto (Ramphastos vitellinus)": {
            bioma: "Floresta Ombrófila Mista",
            descricao: "O tucano-de-bico-preto (Ramphastos vitellinus) é uma ave da família Ramphastidae...",
            ameacas: "As principais ameaças ao tucano-de-bico-preto incluem...",
            medidasConservacao: "Para proteger o tucano-de-bico-preto, são necessárias medidas como...",
            extinta: false
        },
        "Morcego (Artibeus lituratus)": {
            bioma: "Floresta Ombrófila Mista",
            descricao: "O morcego (Artibeus lituratus) é um mamífero da ordem Chiroptera...",
            ameacas: "As principais ameaças ao morcego incluem...",
            medidasConservacao: "Para proteger o morcego, são necessárias medidas como...",
            extinta: false
        },
        "Lobo-guará (Chrysocyon brachyurus)": {
            bioma: "Vegetação de Campos Gerais",
            descricao: "O lobo-guará (Chrysocyon brachyurus) é um mamífero carnívoro da família Canidae...",
            ameacas: "As principais ameaças ao lobo-guará incluem...",
            medidasConservacao: "Para proteger o lobo-guará, são necessárias medidas como...",
            extinta: false
        },
        "Anta (Tapirus terrestris)": {
            bioma: "Vegetação de Campos Gerais",
            descricao: "A anta (Tapirus terrestris) é um mamífero da família Tapiridae...",
            ameacas: "As principais ameaças à anta incluem...",
            medidasConservacao: "Para proteger a anta, são necessárias medidas como...",
            extinta: false
        },
        "Gavião-real (Harpia harpyja)": {
            bioma: "Vegetação de Campos Gerais",
            descricao: "O gavião-real (Harpia harpyja) é uma ave de rapina da família Accipitridae...",
            ameacas: "As principais ameaças ao gavião-real incluem...",
            medidasConservacao: "Para proteger o gavião-real, são necessárias medidas como...",
            extinta: false
        },
        "Tucano (Ramphastos toco)": {
            bioma: "Vegetação de Campos Gerais",
            descricao: "O tucano (Ramphastos toco) é uma ave da família Ramphastidae...",
            ameacas: "As principais ameaças ao tucano incluem...",
            medidasConservacao: "Para proteger o tucano, são necessárias medidas como...",
            extinta: false
        },
        "Veado-catingueiro (Mazama gouazoubira)": {
            bioma: "Vegetação de Campos Gerais",
            descricao: "O veado-catingueiro (Mazama gouazoubira) é um cervídeo...",
            ameacas: "As principais ameaças ao veado-catingueiro incluem...",
            medidasConservacao: "Para proteger o veado-catingueiro, são necessárias medidas como...",
            extinta: false
        },
    };

    const buscarButton = document.getElementById("buscar");
    const resultadoDiv = document.getElementById("resultado");

    buscarButton.addEventListener("click", function () {
        const estadoExtincaoSelecionado = document.getElementById("extincao").value;
        const biomaSelecionado = document.getElementById("bioma").value;

        let especiesFiltradas = "";

        for (const especie in especies) {
            if (especies.hasOwnProperty(especie)) {
                const especieInfo = especies[especie];

                if (especieInfo.bioma === biomaSelecionado) {
                    if ((estadoExtincaoSelecionado === "extintas" && especieInfo.extinta) ||
                        (estadoExtincaoSelecionado === "nao_extintas" && !especieInfo.extinta)) {
                        especiesFiltradas += `<h3>${especie}</h3>`;
                        especiesFiltradas += `<p>Descrição: ${especieInfo.descricao}</p>`;
                        especiesFiltradas += `<p>Ameaças: ${especieInfo.ameacas}</p>`;
                        especiesFiltradas += `<p>Medidas de Conservação: ${especieInfo.medidasConservacao}</p>`;
                    }
                }
            }
        }

        if (especiesFiltradas === "") {
            especiesFiltradas = "<p>Nenhuma espécie encontrada para os critérios selecionados.</p>";
        }

        resultadoDiv.innerHTML = especiesFiltradas;
    });
});

var locations = [
    
    { name: "Campos Naturais", coordinates: [-24.0, -53.0] },
    { name: "Floresta com Araucárias (Paraná)", coordinates: [-25.5, -50.5] },
    { name: "Mata Atlântica", coordinates: [-25.5, -48.0] },
    { name: "Vegetação de Campos Gerais", coordinates: [-20.0, -45.0] },
    { name: "Floresta Ombrófila Mista", coordinates: [-25.0, -50.0] },
    { name: "Campos de Altitudes", coordinates: [-28.0, -52.0] },
    { name: "Áreas Úmidas", coordinates: [-22.0, -52.0] }
];

// Função para obter os dados meteorológicos para uma localização específica
function getWeatherData(location) {
    var apiKey = 'qDFabZXPpBBndO6JeimNsGi16G6V6ZeT';
    var url = 'https://api.tomorrow.io/v4/timelines?location=' + location.coordinates[0] + ',' + location.coordinates[1] + '&fields=temperature,weatherCode,windSpeed,precipitationIntensity&units=metric&timesteps=current&apikey=' + apiKey;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao obter dados meteorológicos: ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            if (data && data.data && data.data.timelines && data.data.timelines.length > 0 && data.data.timelines[0].intervals && data.data.timelines[0].intervals.length > 0) {
                var weatherData = {
                    temperature: data.data.timelines[0].intervals[0].values.temperature,
                    weatherCode: data.data.timelines[0].intervals[0].values.weatherCode,
                    windSpeed: data.data.timelines[0].intervals[0].values.windSpeed,
                    precipitationIntensity: data.data.timelines[0].intervals[0].values.precipitationIntensity
                }
                // Faça algo com os dados do clima, como passá-los para outra função ou exibi-los
                console.log(weatherData);
            }
        })
        .catch(error => {
            console.error('Houve um problema ao obter os dados meteorológicos:', error);
        });
}


                // Inicializando o mapa
document.addEventListener("DOMContentLoaded", function () {
    const especies = {
        "Gralha-azul (Cyanocorax caeruleus)": {
            bioma: "Floresta com Araucárias",
            descricao: "A gralha-azul (Cyanocorax caeruleus) é uma ave da família dos corvídeos...",
            ameacas: "A principal ameaça à gralha-azul é a perda de habitat devido ao desmatamento...",
            medidasConservacao: "Para proteger a gralha-azul, são necessárias medidas como...",
            extinta: false
        },
        "Bugio (Alouatta guariba)": {
            bioma: "Floresta com Araucárias",
            descricao: "O bugio (Alouatta guariba) é um macaco da família Atelidae...",
            ameacas: "As principais ameaças ao bugio incluem a caça ilegal, o tráfico de animais...",
            medidasConservacao: "Para proteger o bugio, são necessárias medidas como...",
            extinta: false
        },
        "Papagaio-charão (Amazona pretrei)": {
            bioma: "Floresta com Araucárias",
            descricao: "O papagaio-charão (Amazona pretrei) é uma espécie de papagaio...",
            ameacas: "As principais ameaças ao papagaio-charão incluem o tráfico de animais...",
            medidasConservacao: "Para proteger o papagaio-charão, são necessárias medidas como...",
            extinta: false
        },
        "Cutia (Dasyprocta azarae)": {
            bioma: "Floresta com Araucárias",
            descricao: "A cutia (Dasyprocta azarae) é um roedor encontrado...",
            ameacas: "As principais ameaças à cutia incluem a caça ilegal...",
            medidasConservacao: "Para proteger a cutia, são necessárias medidas como...",
            extinta: false
        },
        "Quati (Nasua nasua)": {
            bioma: "Floresta com Araucárias",
            descricao: "O quati (Nasua nasua) é um mamífero da família Procyonidae...",
            ameacas: "As principais ameaças ao quati incluem a perda de habitat...",
            medidasConservacao: "Para proteger o quati, são necessárias medidas como...",
            extinta: false
        },
        "Cachorro-do-mato (Cerdocyon thous)": {
            bioma: "Campos Naturais",
            descricao: "O cachorro-do-mato (Cerdocyon thous) é um canídeo...",
            ameacas: "As principais ameaças ao cachorro-do-mato incluem...",
            medidasConservacao: "Para proteger o cachorro-do-mato, são necessárias medidas como...",
            extinta: false
        },
        "Graxaim-do-campo (Lycalopex gymnocercus)": {
            bioma: "Campos Naturais",
            descricao: "O graxaim-do-campo (Lycalopex gymnocercus) é um canídeo...",
            ameacas: "As principais ameaças ao graxaim-do-campo incluem...",
            medidasConservacao: "Para proteger o graxaim-do-campo, são necessárias medidas como...",
            extinta: false
        },
        "Codorna-do-campo (Nothura maculosa)": {
            bioma: "Campos Naturais",
            descricao: "A codorna-do-campo (Nothura maculosa) é uma ave...",
            ameacas: "As principais ameaças à codorna-do-campo incluem...",
            medidasConservacao: "Para proteger a codorna-do-campo, são necessárias medidas como...",
            extinta: false
        },
        "Tatu-bola (Tolypeutes tricinctus)": {
            bioma: "Campos Naturais",
            descricao: "O tatu-bola (Tolypeutes tricinctus) é um tatu...",
            ameacas: "As principais ameaças ao tatu-bola incluem...",
            medidasConservacao: "Para proteger o tatu-bola, são necessárias medidas como...",
            extinta: true
        },
        "Veado-campeiro (Ozotoceros bezoarticus)": {
            bioma: "Campos Naturais",
            descricao: "O veado-campeiro (Ozotoceros bezoarticus) é um veado...",
            ameacas: "As principais ameaças ao veado-campeiro incluem...",
            medidasConservacao: "Para proteger o veado-campeiro, são necessárias medidas como...",
            extinta: false
        },
        "Mico-leão-dourado (Leontopithecus rosalia)": {
            bioma: "Mata Atlântica",
            descricao: "O mico-leão-dourado (Leontopithecus rosalia) é um primata endêmico...",
            ameacas: "As principais ameaças ao mico-leão-dourado incluem...",
            medidasConservacao: "Para proteger o mico-leão-dourado, são necessárias medidas como...",
            extinta: false
        },
        "Onça-pintada (Panthera onca)": {
            bioma: "Mata Atlântica",
            descricao: "A onça-pintada (Panthera onca) é um felino...",
            ameacas: "As principais ameaças à onça-pintada incluem...",
            medidasConservacao: "Para proteger a onça-pintada, são necessárias medidas como...",
            extinta: false
        },
        "Gavião-real (Harpia harpyja)": {
            bioma: "Mata Atlântica",
            descricao: "O gavião-real (Harpia harpyja) é uma ave de rapina...",
            ameacas: "As principais ameaças ao gavião-real incluem...",
            medidasConservacao: "Para proteger o gavião-real, são necessárias medidas como...",
            extinta: false
        },
        "Anta (Tapirus terrestris)": {
            bioma: "Mata Atlântica",
            descricao: "A anta (Tapirus terrestris) é um mamífero...",
            ameacas: "As principais ameaças à anta incluem...",
            medidasConservacao: "Para proteger a anta, são necessárias medidas como...",
            extinta: false
        },
        "Sagui-de-tufos-brancos (Callithrix jacchus)": {
            bioma: "Mata Atlântica",
            descricao: "O sagui-de-tufos-brancos (Callithrix jacchus) é um pequeno primata...",
            ameacas: "As principais ameaças ao sagui-de-tufos-brancos incluem...",
            medidasConservacao: "Para proteger o sagui-de-tufos-brancos, são necessárias medidas como...",
            extinta: false
        },
        "Jacaré-do-papo-amarelo (Caiman latirostris)": {
            bioma: "Áreas Úmidas",
            descricao: "O jacaré-do-papo-amarelo (Caiman latirostris) é um réptil da família Alligatoridae...",
            ameacas: "As principais ameaças ao jacaré-do-papo-amarelo incluem...",
            medidasConservacao: "Para proteger o jacaré-do-papo-amarelo, são necessárias medidas como...",
            extinta: false
        },
        "Tuiuiú (Jabiru mycteria)": {
            bioma: "Áreas Úmidas",
            descricao: "O tuiuiú (Jabiru mycteria) é uma ave da família Ciconiidae...",
            ameacas: "As principais ameaças ao tuiuiú incluem...",
            medidasConservacao: "Para proteger o tuiuiú, são necessárias medidas como...",
            extinta: false
        },
        "Arara-azul-de-lear (Anodorhynchus leari)": {
            bioma: "Áreas Úmidas",
            descricao: "A arara-azul-de-lear (Anodorhynchus leari) é uma espécie de arara...",
            ameacas: "As principais ameaças à arara-azul-de-lear incluem...",
            medidasConservacao: "Para proteger a arara-azul-de-lear, são necessárias medidas como...",
            extinta: true
        },
        "Capivara (Hydrochoerus hydrochaeris)": {
            bioma: "Áreas Úmidas",
            descricao: "A capivara (Hydrochoerus hydrochaeris) é o maior roedor do mundo...",
            ameacas: "As principais ameaças à capivara incluem...",
            medidasConservacao: "Para proteger a capivara, são necessárias medidas como...",
            extinta: false
        },
        "Socó-boi (Tigrisoma lineatum)": {
            bioma: "Áreas Úmidas",
            descricao: "O socó-boi (Tigrisoma lineatum) é uma ave aquática...",
            ameacas: "As principais ameaças ao socó-boi incluem...",
            medidasConservacao: "Para proteger o socó-boi, são necessárias medidas como...",
            extinta: false
        },
        "Pássaro-preto (Gnorimopsar chopi)": {
            bioma: "Campos de Altitudes",
            descricao: "O pássaro-preto (Gnorimopsar chopi) é uma ave da família Icteridae...",
            ameacas: "As principais ameaças ao pássaro-preto incluem...",
            medidasConservacao: "Para proteger o pássaro-preto, são necessárias medidas como...",
            extinta: false
        },
        "Graxaim (Pseudalopex gymnocercus)": {
            bioma: "Campos de Altitudes",
            descricao: "O graxaim (Pseudalopex gymnocercus) é um mamífero da família Canidae...",
            ameacas: "As principais ameaças ao graxaim incluem...",
            medidasConservacao: "Para proteger o graxaim, são necessárias medidas como...",
            extinta: false
        },
        "Pica-pau-anão-barrado (Veniliornis cassini)": {
            bioma: "Campos de Altitudes",
            descricao: "O pica-pau-anão-barrado (Veniliornis cassini) é uma ave da família Picidae...",
            ameacas: "As principais ameaças ao pica-pau-anão-barrado incluem...",
            medidasConservacao: "Para proteger o pica-pau-anão-barrado, são necessárias medidas como...",
            extinta: false
        },
        "Tico-tico (Zonotrichia capensis)": {
            bioma: "Campos de Altitudes",
            descricao: "O tico-tico (Zonotrichia capensis) é uma ave da família Emberizidae...",
            ameacas: "As principais ameaças ao tico-tico incluem...",
            medidasConservacao: "Para proteger o tico-tico, são necessárias medidas como...",
            extinta: false
        },
        "Anambé-branco (Snowornis cryptolophus)": {
            bioma: "Campos de Altitudes",
            descricao: "O anambé-branco (Snowornis cryptolophus) é uma ave da família Thamnophilidae...",
            ameacas: "As principais ameaças ao anambé-branco incluem...",
            medidasConservacao: "Para proteger o anambé-branco, são necessárias medidas como...",
            extinta: true
        },
        "Pica-pau-de-cabeça-amarela (Celeus flavescens)": {
            bioma: "Floresta Ombrófila Mista",
            descricao: "O pica-pau-de-cabeça-amarela (Celeus flavescens) é uma ave da família Picidae...",
            ameacas: "As principais ameaças ao pica-pau-de-cabeça-amarela incluem...",
            medidasConservacao: "Para proteger o pica-pau-de-cabeça-amarela, são necessárias medidas como...",
            extinta: false
        },
        "Tatu (Dasypus novemcinctus)": {
            bioma: "Floresta Ombrófila Mista",
            descricao: "O tatu (Dasypus novemcinctus) é um mamífero da família Dasypodidae...",
            ameacas: "As principais ameaças ao tatu incluem...",
            medidasConservacao: "Para proteger o tatu, são necessárias medidas como...",
            extinta: false
        },
        "Macuco (Tinamus solitarius)": {
            bioma: "Floresta Ombrófila Mista",
            descricao: "O macuco (Tinamus solitarius) é uma ave da família Tinamidae...",
            ameacas: "As principais ameaças ao macuco incluem...",
            medidasConservacao: "Para proteger o macuco, são necessárias medidas como...",
            extinta: false
        },
        "Tucano-de-bico-preto (Ramphastos vitellinus)": {
            bioma: "Floresta Ombrófila Mista",
            descricao: "O tucano-de-bico-preto (Ramphastos vitellinus) é uma ave da família Ramphastidae...",
            ameacas: "As principais ameaças ao tucano-de-bico-preto incluem...",
            medidasConservacao: "Para proteger o tucano-de-bico-preto, são necessárias medidas como...",
            extinta: false
        },
        "Morcego (Artibeus lituratus)": {
            bioma: "Floresta Ombrófila Mista",
            descricao: "O morcego (Artibeus lituratus) é um mamífero da ordem Chiroptera...",
            ameacas: "As principais ameaças ao morcego incluem...",
            medidasConservacao: "Para proteger o morcego, são necessárias medidas como...",
            extinta: false
        },
        "Lobo-guará (Chrysocyon brachyurus)": {
            bioma: "Vegetação de Campos Gerais",
            descricao: "O lobo-guará (Chrysocyon brachyurus) é um mamífero carnívoro da família Canidae...",
            ameacas: "As principais ameaças ao lobo-guará incluem...",
            medidasConservacao: "Para proteger o lobo-guará, são necessárias medidas como...",
            extinta: false
        },
        "Anta (Tapirus terrestris)": {
            bioma: "Vegetação de Campos Gerais",
            descricao: "A anta (Tapirus terrestris) é um mamífero da família Tapiridae...",
            ameacas: "As principais ameaças à anta incluem...",
            medidasConservacao: "Para proteger a anta, são necessárias medidas como...",
            extinta: false
        },
        "Gavião-real (Harpia harpyja)": {
            bioma: "Vegetação de Campos Gerais",
            descricao: "O gavião-real (Harpia harpyja) é uma ave de rapina da família Accipitridae...",
            ameacas: "As principais ameaças ao gavião-real incluem...",
            medidasConservacao: "Para proteger o gavião-real, são necessárias medidas como...",
            extinta: false
        },
        "Tucano (Ramphastos toco)": {
            bioma: "Vegetação de Campos Gerais",
            descricao: "O tucano (Ramphastos toco) é uma ave da família Ramphastidae...",
            ameacas: "As principais ameaças ao tucano incluem...",
            medidasConservacao: "Para proteger o tucano, são necessárias medidas como...",
            extinta: false
        },
        "Veado-catingueiro (Mazama gouazoubira)": {
            bioma: "Vegetação de Campos Gerais",
            descricao: "O veado-catingueiro (Mazama gouazoubira) é um cervídeo...",
            ameacas: "As principais ameaças ao veado-catingueiro incluem...",
            medidasConservacao: "Para proteger o veado-catingueiro, são necessárias medidas como...",
            extinta: false
        },
    };

    const buscarButton = document.getElementById("buscar");
    const resultadoDiv = document.getElementById("resultado");

    buscarButton.addEventListener("click", function () {
        const estadoExtincaoSelecionado = document.getElementById("extincao").value;
        const biomaSelecionado = document.getElementById("bioma").value;

        let especiesFiltradas = "";

        for (const especie in especies) {
            if (especies.hasOwnProperty(especie)) {
                const especieInfo = especies[especie];

                if (especieInfo.bioma === biomaSelecionado) {
                    if ((estadoExtincaoSelecionado === "extintas" && especieInfo.extinta) ||
                        (estadoExtincaoSelecionado === "nao_extintas" && !especieInfo.extinta)) {
                        especiesFiltradas += `<h3>${especie}</h3>`;
                        especiesFiltradas += `<p>Descrição: ${especieInfo.descricao}</p>`;
                        especiesFiltradas += `<p>Ameaças: ${especieInfo.ameacas}</p>`;
                        especiesFiltradas += `<p>Medidas de Conservação: ${especieInfo.medidasConservacao}</p>`;
                    }
                }
            }
        }

        if (especiesFiltradas === "") {
            especiesFiltradas = "<p>Nenhuma espécie encontrada para os critérios selecionados.</p>";
        }

        resultadoDiv.innerHTML = especiesFiltradas;
    });
});


var locations = [    
    { name: "Campos Naturais", coordinates: [-24.0, -53.0], city: "Curitiba" },
    { name: "Floresta com Araucárias (Paraná)", coordinates: [-25.5, -50.5], city: "Lages" },
    { name: "Mata Atlântica", coordinates: [-25.5, -48.0], city: "Joinville" },
    { name: "Vegetação de Campos Gerais", coordinates: [-20.0, -45.0], city: "Ponta Grossa" },
    { name: "Floresta Ombrófila Mista", coordinates: [-25.0, -50.0], city: "Curitiba" },
    { name: "Campos de Altitudes", coordinates: [-28.0, -52.0], city: "Campos do Jordão" },
    { name: "Áreas Úmidas", coordinates: [-22.0, -52.0], city: "Cuiabá" },
];

var mapa = L.map('mapa').setView([-25.5, -50.5], 6);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mapa);

function addMarkersToMap(locations, cities) {
    locations.forEach(function(location, index) {
        var latLng = L.latLng(location.coordinates[0], location.coordinates[1]);
        var marker = L.marker(latLng).addTo(mapa)
            .bindPopup('<b>Localização:</b> ' + location.name + '<br>' +
                    '<b>Cidade Principal:</b> ' + cities[index]);
    });
}

function getWeatherData(location) {
    var apiKey = 'qDFabZXPpBBndO6JeimNsGi16G6V6ZeT';
    var url = 'https://api.tomorrow.io/v4/timelines?location=' + location.coordinates[0] + ',' + location.coordinates[1] + '&fields=temperature,weatherCode,windSpeed,precipitationIntensity&units=metric&timesteps=current&apikey=' + apiKey;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao obter dados meteorológicos: ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            if (data && data.data && data.data.timelines && data.data.timelines.length > 0 && data.data.timelines[0].intervals && data.data.timelines[0].intervals.length > 0) {
                var weatherData = {
                    temperature: data.data.timelines[0].intervals[0].values.temperature,
                    weatherCode: data.data.timelines[0].intervals[0].values.weatherCode,
                    windSpeed: data.data.timelines[0].intervals[0].values.windSpeed,
                    precipitationIntensity: data.data.timelines[0].intervals[0].values.precipitationIntensity
                };

                addMarkersToMap(location, [location.city]); // Corrigido para passar o argumento correto
            }
        })
        .catch(error => {
            console.error('Houve um problema ao obter os dados meteorológicos:', error);
        });
}


function getWeatherForLocationsWithDelay(locations, delay) {
    var currentDelay = 0;
    var index = 0;

    function next() {
        if (index < locations.length) {
            setTimeout(function() {
                getWeatherData(locations[index]);
                index++;
                next();
            }, currentDelay);
            currentDelay += delay;
        }
    }

    next();
}

getWeatherForLocationsWithDelay(locations, 50); // 5 minuto = 50000 milissegundos
