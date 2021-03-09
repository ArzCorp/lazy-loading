import './style/style.css'

const API = 'https://randomfox.ca/floof/'
const app = document.querySelector('.app')
const nextBtn = document.querySelector('#nextButton')
const afterBtn = document.querySelector('#clearButton')

const random = (minNum, maxNum) =>
  Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum

const createImg = () => {
  const randomNum = random(1, 124)
  const imgContainer = document.createElement('figure')
  const img = document.createElement('img')

  imgContainer.className = 'w-1/2 m-auto p-4 my-4'
  img.className = 'w-1/2 m-auto rounded-lg'
  img.src = `https://randomfox.ca/images/${randomNum}.jpg`
  imgContainer.appendChild(img)
  return imgContainer
}

const addImg = () => {
  const img = createImg()
  app.append(img)
}

const observer = new IntersectionObserver(handler, {
  threshold: 1
})

nextBtn.addEventListener('click', addImg)
