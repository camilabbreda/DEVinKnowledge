
function escrevePublicacao(arrayDeObjetoDoLocalStorage) {


    var str = "";
    let painelPubliccoes = document.getElementById("publicacoes")

    arrayDeObjetoDoLocalStorage.forEach((atributo, index) => {
        if (atributo == [] | atributo == undefined | atributo == null | Object.keys(atributo).length == 0) {

        }
        else {

            let src2 = ""


            if (Object.keys(atributo.youtube).length === 0) {

                src2 = ""

            }
            else {
                src2 = `<button class="botaoPesquisar" id="v${index}">
                <a href="${atributo.youtube}" target="_blank"><img src="./Imagens/playPost" style="width: 22px;" alt=""></a>
                </button>
                `
            }

            str += `<li class="publicacoes" id="publicacoes2" name="${index}">
          <div style="margin-left: 30px;">
              <div id="tituloPublicado">                                        
                  <p> ${atributo.titulo}</p>
              </div>
              <div class="caixaDeTextoPublicacao" >
                  <p class="publicado">Linguagem/Skill:</p>
                  <p id="inserirLiguagemSkill">${atributo.skill}</p>
              </div>    
              <div class="caixaDeTextoPublicacao">
                  <p class="publicado">Categoria: </p>
                  <p id="irerirCategoria"> ${atributo.categoria} </p>
              </div>
              <div  class="caixaDeTextoPublicacao">
                  <p class="publicado">Descrição:</p>
                  <p id="inserirDescrição"> ${atributo.descricao} </p>
              </div>
              <div class="botoesExcluirEditarPlay">
                 <button class="botaoPesquisar" id="d${index}">
                      <img src="./Imagens/apagarPost.png" style="width: 22px;" alt="">
                 </button>
                 <button class="botaoPesquisar" id="e${index}" >
                      <img src="./Imagens/editarPost.png" style="width: 22px;" alt="">
                 </button>
                 <div id="botaoYoutube">${src2}</div>
    
              </div>                                    
              
          </div>
          
        </li>`
        }
    })

    painelPubliccoes.innerHTML = str
}

function criarPlacarComTotais(resultadosDoPlacar) {

    let divPlacar = document.getElementById("placar")

    const resultadosArray = ["SoftSkill", "FrontEnd", "FullStack", "BackEnd", "Total"]

    const resultados = resultadosDoPlacar.map((resultado, index) => {
        return {
            titulo: resultadosArray[index],
            resultado
        }
    })

    divPlacar.innerHTML = "";

    resultados.map((posicao) =>
        divPlacar.innerHTML += `<div >
    <div class="divCustomizacaoPlacar">
        <p style="padding-top: 10px;"> ${posicao.titulo} </p>
        <p style="font-size: 22px;margin-bottom: 25px; vertical-align: top;height:25px ;"> ${posicao.resultado} </p>
    </div>
</div>`
    )
}

function criarFormulario(idformulario) {
    idformulario.innerHTML = `<div class="logo">
    <div>
      <img
        src="./Imagens/LivroLogo.png"
        style="height: 100px; width: auto"
        alt="imagem de um livro"
      />
    </div>
    <div class="textoDaLogo">
      <div
        style="margin-top: 10%; font-size: 25px; color: rgb(90, 86, 86)"
      >
        DEVinKnowledge
      </div>
      <div style="color: rgb(90, 86, 86); font-size: 18px">
        Learn, Code and Save
      </div>
    </div>
  </div>
  <form class="formularioPrincipal">
    <div id="inputs">
      <p class="tituloForm">Título*</p>
      <input
        type="text"
        name="titulo"
        id="titulo"
        class="inserirValores"
        minlength="8"
        required
        maxlength="64"
        required
        placeholder="Digite um título"
      />
      <p class="tituloForm">Linguagem/Skill*</p>
      <input
        type="text"
        name="linguagem/skill"
        id="linguemSkill"
        class="inserirValores"
        minlength="4"
        required
        maxlength="16"
        placeholder="Digite uma Linguagem ou Skill"
      />
      <p class="tituloForm">Categoria*</p>
      <select
        required
        name="categoria"
        id="categoria"
        class="inserirValoresSeleciona"
      >
        <option value="">Selecione uma Categoria</option>
        <!-- CATEGORIAS DO POST -->
        <option value="SoftSkill">SoftSkill</option>
        <option value="FrontEnd">FrontEnd</option>
        <option value="FullStack">FullStack</option>
        <option value="BackEnd">BackEnd</option>
        <!-- --------------------- -->
      </select>
      <p class="tituloForm">Descrição*</p>
      <textarea
        name="post"
        class="descricaoPost"
        id="descricaoDoPost"
        cols="30"
        rows="10"
        minlength="32"
        required
        maxlength="512"
        required
        placeholder="Ecreva aqui o detalhamento da sua dica"
      ></textarea>
      <p class="tituloForm">Vídeo do Youtube</p>
      <input
        type="text"
        name="linkYoutube"
        id="linkYoutube"
        class="inserirValores"
        placeholder="ttps//suaurl.com"
      />
    </div>
    <div>
      <div class="botoesLimparSalvar">
        <button id="botaoLimpar" class="botaoLimpar">Limpar</button>
        <button id="botaoSalvar" class="botaoSalvar">Salvar</button>
      </div>
    </div>
  </form>`

}


function criarNovoFormularioEdicao(idformulario) {

    idformulario.innerHTML = `<div class="logo">
        <div>
          <img
            src="./Imagens/LivroLogo.png"
            style="height: 100px; width: auto"
            alt="imagem de um livro"
          />
        </div>
        <div class="textoDaLogo">
          <div
            style="margin-top: 10%; font-size: 25px; color: rgb(90, 86, 86)"
          >
            DEVinKnowledge
          </div>
          <div style="color: rgb(90, 86, 86); font-size: 18px">
            Learn, Code and Save
          </div>
        </div>
      </div>
      <form class="formularioPrincipal">
        <div id="inputs">
          <p class="tituloForm">Título*</p>
          <input
            type="text"
            name="titulo"
            id="titulo"
            class="inserirValores"
            minlength="8"
            required
            maxlength="64"
            required
            placeholder="Digite um título"
          />
          <p class="tituloForm">Liguagem/Skill*</p>
          <input
            type="text"
            name="linguagem/skill"
            id="linguemSkill"
            class="inserirValores"
            minlength="4"
            required
            maxlength="16"
            placeholder="Digite uma Linguagem ou Skill"
          />
          <p class="tituloForm">Categoria*</p>
          <select
            required
            name="categoria"
            id="categoria"
            class="inserirValoresSeleciona"
          >
            <option value="">Selecione uma Categoria</option>
            <!-- CATEGORIAS DO POST -->
            <option value="SoftSkill">SoftSkill</option>
            <option value="FrontEnd">FrontEnd</option>
            <option value="FullStack">FullStack</option>
            <option value="BackEnd">BackEnd</option>
            <!-- --------------------- -->
          </select>
          <p class="tituloForm">Descrição*</p>
          <textarea
            name="post"
            class="descricaoPost"
            id="descricaoDoPost"
            cols="30"
            rows="10"
            minlength="32"
            required
            maxlength="512"
            required
            placeholder="Ecreva aqui o detalhamento da sua dica"
          ></textarea>
          <p class="tituloForm">Vídeo do Youtube</p>
          <input
            type="text"
            name="linkYoutube"
            id="linkYoutube"
            class="inserirValores"
            placeholder="ttps//suaurl.com"
          />
        </div>
        <div>
          <div class="botoesLimparSalvar">
            <button id="botaoLimpar" class="botaoLimpar">Limpar</button>
            <button id="botaoAtualizar" class="botaoSalvar">Atualizar</button>
          </div>
        </div>
      </form>`
}

export { escrevePublicacao, criarPlacarComTotais, criarNovoFormularioEdicao, criarFormulario }