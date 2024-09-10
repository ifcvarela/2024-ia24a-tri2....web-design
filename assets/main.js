const domBtsToggleNav = document.querySelectorAll('button.toggle-nav')
const domNav = document.querySelector('nav')

domBtsToggleNav.forEach(function (bt) {
  bt.addEventListener('click', function () {
    domNav.classList.toggle('open')
  })
})

// ---------------------

async function listarPersonagens() {
  const template = document.querySelector('#modelo-personagem')
  const request = await fetch('personagens.json')
  const dados = await request.json()

  dados.forEach(personagem => {
    const novoDomPersonagem = template.content.cloneNode(true)
    novoDomPersonagem.querySelector('h2').textContent = personagem.nome
    novoDomPersonagem.querySelector('p').textContent = personagem.classe
    template.parentNode.appendChild(novoDomPersonagem)
  })
}

listarPersonagens()

// https://rickandmortyapi.com/api/character