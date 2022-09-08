const btnHabilidades = document.querySelector("#btnHabilidades");
const btnProjetos = document.querySelector("#btnProjetos");
const btnEstudo = document.querySelector("#btnEstudo");

const divConteudo = document.querySelector(".spoilerConteudo");
const textoHabilidades = `
<h3>Tecnologias</h3>
<ul>
<li>MongoDB</li>
<li>Express</li>
<li>React</li>
<li>Node</li>
</ul>
<br>
<h3>Linguagens e ferramentas</h3>
<p>HTML, CSS, JavaScript, PowerApps, PowerAutomate, SharePoint.</p>`;
const textoProjetos = `
<h3>FinForms</h3>
<p>Projeto desenvolvido dentro da PowerPlataform de MSF para lidar com solicitações 
financeiras, a solução inclui uma aplicação feita em Microsoft Power FX e uma sequencia 
de fluxos (PowerAutomate) que manipulam e registram informações para serem guardadas no banco de dados do 
SharePoint.</p>`;
const textoEstudo = `
<h3>F2F Locals</h3>
<p>Desenvolvida com Express e MongoDB durante o bootcamp "The Web Developer Bootcamp 2021". Feita com intenção de ajudar organizações que possuam captação Face to Face em São Paulo. </p>
<p class="subdescricao">Saiba mais aqui: <a href="https://github.com/felipeiagocruz/The-Web-Developer-Bootcamp-2021-F2FLocals">Github</a> <a href="https://f2flocals.herokuapp.com/">Aplicação</a></p>
<hr>`;

function corSelecao(aba) {
  btnHabilidades.classList.remove("selected");
  btnProjetos.classList.remove("selected");
  btnEstudo.classList.remove("selected");
  aba.classList.add("selected");
}

function alterarTexto(e) {
  switch (e.target.innerHTML) {
    case "Habilidades":
      corSelecao(e.target);
      divConteudo.innerHTML = textoHabilidades;
      break;
    case "Projetos":
      corSelecao(e.target);
      divConteudo.innerHTML = textoProjetos;
      break;
    case "Estudo":
      corSelecao(e.target);
      divConteudo.innerHTML = textoEstudo;
      break;
  }
}

btnHabilidades.addEventListener("click", alterarTexto);
btnProjetos.addEventListener("click", alterarTexto);
btnEstudo.addEventListener("click", alterarTexto);

divConteudo.innerHTML = textoHabilidades;
