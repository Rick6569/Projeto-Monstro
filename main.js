const monstros = [
  {
    id: 1,
    nome: 'Diablo',
    altura: 2,
    habilidades: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis molestiae sunt magnam ea odio hic aperiam facere sint tempore beatae vero ex dolorem, incidunt cum. Dolore quos, eveniet voluptatibus repellendus.',
    foto: 'https://robohash.org/Diablo'
  },
  {
    id: 2,
    nome: 'MegaMente',
    altura: 1.6,
    habilidades: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis molestiae sunt magnam ea odio hic aperiam facere sint tempore beatae vero ex dolorem, incidunt cum. Dolore quos, eveniet voluptatibus repellendus.',
    foto: 'https://robohash.org/MegaMente'
    },
  {
    id: 3,
    nome: 'Dionisio',
    altura: 1.8,
    habilidades: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis molestiae sunt magnam ea odio hic aperiam facere sint tempore beatae vero ex dolorem, incidunt cum. Dolore quos, eveniet voluptatibus repellendus.',
    foto: 'https://robohash.org/Dionisio'
     },
  {
    id: 4,
    nome: 'Ultron',
    altura: 1.9,
    habilidades: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis molestiae sunt magnam ea odio hic aperiam facere sint tempore beatae vero ex dolorem, incidunt cum. Dolore quos, eveniet voluptatibus repellendus.',
    foto: 'https://robohash.org/Abacate'
      }
  ]

const secao = document.querySelector('.monstros')
const botao = document.querySelector('.btn')

botao.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark')
})

const todosOsMonstros = monstros.map(monstro => {
  return `<div>
  <p>Nome: ${monstro.nome}</p>
  <p>Altura: ${monstro.altura}</p>
  <img src="${monstro.foto}">
  <p class="habilidades">Habilidades: ${monstro.habilidades}</p>
  </div>`
})

secao.innerHTML = todosOsMonstros