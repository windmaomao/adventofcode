// 5/27/24
const API_BASE_URL =
  "https://api.frontendexpert.io/api/fe/testimonials"
const limit = 5
let after = 0
let container = document.getElementById(
  "testimonial-container"
)
let loading = false

function addTestimonials({ id, message }) {
  let item = document.createDocumentFragment()
  let p = document.createElement("p")
  p.setAttribute("class", "testimonial")
  let msg = document.createTextNode(message)
  p.appendChild(msg)
  item.appendChild(p)
  container.appendChild(item)
}

function fetchData(cleanup) {
  if (loading) return

  let url = API_BASE_URL + `?limit=${limit}`
  if (after) url += `&after=${after}`

  loading = true
  fetch(url)
    .then((res) => res.json())
    .then(({ hasNext, testimonials }) => {
      loading = false

      if (testimonials.length) {
        testimonials.forEach(addTestimonials)
        after = testimonials.at(-1).id
      }

      if (!hasNext) cleanup()
    })
}

function init() {
  const load = () => {
    fetchData(() => {
      container.removeEventListener("scroll", onScroll)
    })
  }
  const onScroll = () => {
    const { scrollHeight, clientHeight, scrollTop } =
      container
    if (scrollTop + clientHeight > scrollHeight - 5) load()
  }

  container.addEventListener("scroll", onScroll)
  load()
}

init()

// 7/1/25  prototype in DOM
function debounce(fn, delay) {
  let handle

  return function () {
    if (handle) clearTimeout(handle)

    handle = setTimeout(() => {
      fn.apply(this, arguments)
    }, delay)
  }
}

function loadMore() {
  console.log("load...")
}

function init() {
  let div = document.createElement("div")
  div.innerHTML =
    "Hello World!</br>Hello World!</br>Hello World!</br>Hello World!</br>Hello World!</br>Hello World!</br>Hello World!</br>Hello World!</br>Hello World!</br>Hello World!</br>Hello World!</br>"
  div.style.cssText = `
border: 1px solid gray;
height: 100px;
overflow-y: scroll;
`
  div.addEventListener(
    "scroll",
    debounce((e) => {
      const { scrollTop, clientHeight, scrollHeight } =
        e.target
      if (scrollTop + clientHeight > scrollHeight - 5) {
        loadMore()
      }
    }, 500)
  )

  document.body.appendChild(div)
}

init()
