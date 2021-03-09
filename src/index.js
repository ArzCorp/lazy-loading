import './style/style.css'
import { registerImg } from './lazy'

const app = document.querySelector('.app')
const nextBtn = document.querySelector('#nextButton')
const afterBtn = document.querySelector('#clearButton')

const random = (minNum, maxNum) =>
  Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum

const createImg = () => {
  const randomNum = random(1, 124)
  const imgContainer = document.createElement('div')
  const img = document.createElement('img')

  imgContainer.className = 'w-1/2 m-auto p-4 my-4'
  img.className = 'w-1/2 m-auto rounded-lg'
  img.dataset.src = `https://randomfox.ca/images/${randomNum}.jpg`
  imgContainer.appendChild(img)
  return imgContainer
}

const addImg = () => {
  const img = createImg()
  registerImg(img)
  app.append(img)
}

nextBtn.addEventListener('click', addImg)
