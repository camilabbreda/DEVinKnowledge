import { escrevePublicacao, criarPlacarComTotais, criarNovoFormularioEdicao, criarFormulario } from "./EscreverHTML.js";

var arrayLocalStorage = []

// const botaoSalvar = document.getElementById("botaoSalvar");

//FUNCÕES QUE ACIONA OS BOTOES LIMPAR E SALVAR

const form = document.querySelector("form");
form.addEventListener("submit", recebeDadosDoFormulario)

const botaoLimpar = document.getElementById("botaoLimpar");
botaoLimpar.addEventListener("click", limparFormulario)


//FUNCAO QUE LIMPA O FORMULÁRIO
function limparFormulario() {
    event.preventDefault();
    form.reset();
}


//FUNCAO RECEBE DADOS DO FORMULÁRIO
function recebeDadosDoFormulario() {
    event.preventDefault();

    //RECEBE DADOS
    let publicacao = {}
    let tituloDoFormulario = document.getElementById("titulo");
    let linguemSkillDoFormulario = document.getElementById("linguemSkill");
    let categoriDoFormulario = document.getElementById("categoria");
    let descricaoPostDoFormulario = document.getElementById("descricaoDoPost");
    let linkYoutubeDoFormulario = document.getElementById("linkYoutube");

    //CARREGA DADOS NO OBJETO    
    publicacao.titulo = tituloDoFormulario.value
    publicacao.skill = linguemSkillDoFormulario.value
    publicacao.categoria = categoriDoFormulario.options[categoriDoFormulario.selectedIndex].value
    publicacao.descricao = descricaoPostDoFormulario.value
    publicacao.youtube = linkYoutubeDoFormulario.value


    //CARREGA DADOS NO ARRAY DE OBJETOS
    arrayLocalStorage = JSON.parse(localStorage.getItem(`Publicações`));
    arrayLocalStorage.push(publicacao)

    //MANDA DADOS PARA O LOCAL STORAGE
    localStorage.setItem(`Publicações`, JSON.stringify(arrayLocalStorage))

    let painelPublicacoes = document.getElementById("publicacoes")
    painelPublicacoes.innerHTML = ""

    receberDadosDoLocalStorage()


    form.reset()

    tituloDoFormulario = document.getElementById("titulo");
    linguemSkillDoFormulario = document.getElementById("linguemSkill");
    categoriDoFormulario = document.getElementById("categoria");
    descricaoPostDoFormulario = document.getElementById("descricaoDoPost");
    linkYoutubeDoFormulario = document.getElementById("linkYoutube");


    tituloDoFormulario.value = "";
    linguemSkillDoFormulario.value = "";
    categoriDoFormulario.value = "";
    descricaoPostDoFormulario.value = "";
    linkYoutubeDoFormulario.value = "";

    window.alert("Sucesso! Dica cadastrada na barra do conhecimento!")
}

// FUNCAO RECEBE DADOS DO LOCAL STORAGE E IMPRIME NA TELA
function receberDadosDoLocalStorage() {

    let arrayPublicacoes = JSON.parse(localStorage.getItem(`Publicações`));

    if (arrayPublicacoes == null) {
        localStorage.setItem(`Publicações`, JSON.stringify([]))
    }

    else {

        const publi = arrayPublicacoes.reverse()

        escrevePublicacao(publi)
        receberTotaisDoPlacar(arrayPublicacoes)
        atribuirIndiceAoBotaoDeletarPost()
        atribuirIndiceAoBotaoEditarPost()

    }
}
receberDadosDoLocalStorage()

//CRIAR O PLACAR COM TOTAIS
function receberTotaisDoPlacar(arrayPublicacoes) {
    let totalSoft = 0; let totalBack = 0; let totalFront = 0; let totalfull = 0; let totalPlacar = 0;
    for (const arrayPublicar of arrayPublicacoes) {


        if (arrayPublicar.categoria === "SoftSkill") {
            totalSoft++;

        }
        else if (arrayPublicar.categoria === "FrontEnd") {
            totalFront++;
        }
        else if (arrayPublicar.categoria === "BackEnd") {
            totalBack++;
        }
        else if (arrayPublicar.categoria === "FullStack") {
            totalfull++;
        }
        totalPlacar++;
    }

    const resultadosDoPlacar = [totalSoft, totalFront, totalfull, totalBack, totalPlacar]

    criarPlacarComTotais(resultadosDoPlacar)
}

//FUNCAO FILTRAR TITULO
let botaoPesquisar = document.getElementById("filtrar")
botaoPesquisar.addEventListener("click", filtrarTitulo)

function filtrarTitulo() {
    let valorPesquisado = document.getElementById("inputPesquisa");
    let arrayPublicacoes = JSON.parse(localStorage.getItem(`Publicações`));

    console.log(valorPesquisado);
    const listaFiltrada = arrayPublicacoes.filter((atributo) =>
        atributo.titulo.toLowerCase().includes(valorPesquisado.value)
    )
    console.log(listaFiltrada);
    let painelPublicacoes = document.getElementById("publicacoes");
    painelPublicacoes.innerHTML = "";


    escrevePublicacao(listaFiltrada.reverse());
}

//FUNCAO LIMPAR FILTRO
const botaoLimparFiltro = document.getElementById("limpar");
botaoLimparFiltro.addEventListener("click", limparFiltro);
function limparFiltro() {
    receberDadosDoLocalStorage();
    let valorPesquisado = document.getElementById("inputPesquisa");
    valorPesquisado.value = "";
}

//FUNCAO ATRIBUI EVENT LISTENER NO BOTAO DELETAR

function atribuirIndiceAoBotaoDeletarPost() {

    let arrayDeObjetoDoLocalStorage = JSON.parse(localStorage.getItem(`Publicações`));

    arrayDeObjetoDoLocalStorage.reverse().forEach((_, index) => {
        const idBotaoDeletar = document.getElementById(`d${index}`);
        idBotaoDeletar.addEventListener("click", deletarPost);

    })

} atribuirIndiceAoBotaoDeletarPost()

//FUNCAO DELETAR PUBLICACAO

function deletarPost() {

    if (window.confirm("Você tem certeza que deseja excluir a publicação?") == true) {

        var parentDiv = this.parentNode.parentNode.parentNode;
        var id = parentDiv.getAttribute("Name");


        let arrayDeObjetoDoLocalStorage = JSON.parse(localStorage.getItem(`Publicações`));
        const arrayDeObjetoDoLocalStorageInvertido = arrayDeObjetoDoLocalStorage.reverse();


        const arraySemItemDeletado = arrayDeObjetoDoLocalStorageInvertido.filter((objeto) => objeto != arrayDeObjetoDoLocalStorage[id]);


        localStorage.setItem(`Publicações`, JSON.stringify(arraySemItemDeletado.reverse()));


        let painelPublicacoes = document.getElementById("publicacoes");
        painelPublicacoes.innerHTML = "";


        receberDadosDoLocalStorage();
        atribuirIndiceAoBotaoDeletarPost();
    }
}

//FUNCAO ATRIBUI EVENT LISTENER NO BOTAO EDITAR

function atribuirIndiceAoBotaoEditarPost() {

    let arrayDeObjetoDoLocalStorage = JSON.parse(localStorage.getItem(`Publicações`));

    arrayDeObjetoDoLocalStorage.reverse().forEach((_, index) => {
        const idBotaoDeletar = document.getElementById(`e${index}`);
        idBotaoDeletar.addEventListener("click", editarPost);


    })
} atribuirIndiceAoBotaoEditarPost()

//FUNCAO EDITAR PUBLICACAO

function editarPost() {

    var formulario = document.getElementById("formulario");

    criarNovoFormularioEdicao(formulario);

    let arrayDeObjetoDoLocalStorage = JSON.parse(localStorage.getItem(`Publicações`));
    let arrayDeObjetoDoLocalStorageInvertido = arrayDeObjetoDoLocalStorage.reverse();

    var parentDiv = this.parentNode.parentNode.parentNode;
    var id = parentDiv.getAttribute("Name");

    const arrayEditar = arrayDeObjetoDoLocalStorageInvertido.filter((objeto) => objeto == arrayDeObjetoDoLocalStorageInvertido[id])

    let tituloDoFormulario = document.getElementById("titulo");
    let linguemSkillDoFormulario = document.getElementById("linguemSkill");
    let categoriDoFormulario = document.getElementById("categoria");
    let descricaoPostDoFormulario = document.getElementById("descricaoDoPost");
    let linkYoutubeDoFormulario = document.getElementById("linkYoutube");

    tituloDoFormulario.value = arrayEditar[0].titulo;
    linguemSkillDoFormulario.value = arrayEditar[0].skill;
    categoriDoFormulario.value = arrayEditar[0].categoria;
    descricaoPostDoFormulario.value = arrayEditar[0].descricao;
    linkYoutubeDoFormulario.value = arrayEditar[0].youtube;

    let botaoAtualizar = document.getElementById("botaoAtualizar")

    let arrayEditado = {}

    botaoAtualizar.addEventListener("click", function () {

        event.preventDefault()

        arrayEditado.titulo = tituloDoFormulario.value;
        arrayEditado.skill = linguemSkillDoFormulario.value;
        arrayEditado.categoria = categoriDoFormulario.options[categoriDoFormulario.selectedIndex].value;
        arrayEditado.descricao = descricaoPostDoFormulario.value;
        arrayEditado.youtube = linkYoutubeDoFormulario.value;

        arrayDeObjetoDoLocalStorage[id] = arrayEditado;

        localStorage.setItem(`Publicações`, JSON.stringify(arrayDeObjetoDoLocalStorage));
        let painelPublicacoes = document.getElementById("publicacoes");
        painelPublicacoes.innerHTML = "";
        form.reset();

        criarFormulario(formulario);
        escrevePublicacao(arrayDeObjetoDoLocalStorage);

        const botaoSalvar = document.getElementById("botaoSalvar");
        botaoSalvar.addEventListener("click", recebeDadosDoFormulario);

    })
}



