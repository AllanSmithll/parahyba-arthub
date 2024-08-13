import itens from './itens_cardapio.js';

function getProjectcard({valor,imagem,nome}){
  return `<div class='item'>
        <h2>${nome}</h2>
        <h3>${valor}</h3>
          <div style="aling-items: center;>
            <label for="${nome}">Quantidade </label><input style="color:black;text-align:center;width:70px;height:50px;alight:left;border-radius:35px;" type="number" class='count' name="item" value="${nome}" id="${nome}">
          </div>
        <img src=${imagem}>
        <button>Adicionar ao carrinho</button>
        <br>
      </div>`
}

const projectContent = itens.map((f) => getProjectcard(f)).join('')
const projectConteiner = document.querySelector('.cardapio')
projectConteiner.innerHTML = projectContent