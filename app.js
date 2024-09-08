function pesquisar() {
    let section = document.getElementById("resultados-pesquisa")    
    console.log(section);
    
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    //console.log(campoPesquisa)--retorna resultado na console
    
    //se o campo pesquisa for em branco
    if (campoPesquisa == ""){
        section.innerHTML = "<p>Não há resultados para a busca. Você precisa digitar o nome ou a descrição do(a) atleta</p>"
        return
    }

    campoPesquisa= campoPesquisa.toLowerCase()

    let resultados = ""; //melhores práticas

    let titulo = ""; 
    let descricao = ""; 
    let tags = "";
    
    // para cada dado dentro da lista de dados
    for (let dado of dados){
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        // se titulo includes CampoPesquisa
        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)|| tags.includes(campoPesquisa)) {
            // cria um novo elemento
            resultados += //Melhores práticas
            `
            <div class="item-resultado">
                                <h2>
                                    <a href="https://olympics.com/en/athletes/rayssa-leal" target="_blank">${dado.titulo}</a>
                                </h2>                
                                <p class="descricao-meta">${dado.descricao}.</p>
                                <a href="${dado.link}" target="_blank">Mais informações</a>
                            </div>
            `   
            ;         
        }
            // então faça...
        //console.log(dado.titulo.includes(campoPesquisa)) --Exemplo de busca na console, se verdadeiro ou falso
        // section.innerHTML +=
     
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }
    
    section.innerHTML = resultados;
}

// console.log(dados);




// exemplo:

// <div class="item-resultado">
//                     <h2>
//                         <a href="https://olympics.com/en/athletes/rayssa-leal" target="_blank">${dados[0].titulo}</a>
//                     </h2>                
//                     <p class="descricao-meta">Carinhosamente conhecida como Fadinha, é uma das maiores revelações do skate mundial. A brasileira conquistou o coração de milhões com seu talento precoce e sua personalidade contagiante.</p>
//                     <a href="https://en.wikipedia.org/wiki/Rayssa_Leal" target="_blank">Mais informações</a>
//                 </div>

// <div class="item-resultado">
//                     <h2>
//                         <a href="https://olympics.com/en/athletes/rayssa-leal" target="_blank">Raissa Leal</a>
//                     </h2>                
//                     <p class="descricao-meta">Carinhosamente conhecida como Fadinha, é uma das maiores revelações do skate mundial. A brasileira conquistou o coração de milhões com seu talento precoce e sua personalidade contagiante.</p>
//                     <a href="https://en.wikipedia.org/wiki/Rayssa_Leal" target="_blank">Mais informações</a>
//                 </div>
// `        