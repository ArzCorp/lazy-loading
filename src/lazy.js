const isIntersecting = (entry) => entry.isIntersecting

const action = (entry) => {
  const node = entry.target
  const img = node.firstChild
  const url = img.dataset.src
  img.src = url
  observer.unobserve(node)
}

const observer = new IntersectionObserver((entries) => {
  entries.filter(isIntersecting).forEach(action)
})

export const registerImg = (image) => {
  observer.observe(image)
}
