// submitted at 12/20/21
//   this is basic dom + debounce
const BASE_URL = 'https://www.algoexpert.io/api/fe/glossary-suggestions';

function debounce(fn, delay) {
	let handle = null
  let prev
  return function () {
    prev = arguments
    if (handle) clearTimeout(handle)    
    handle = setTimeout(() => {
      fn.call(this, ...prev)
    }, delay)
  }
}

function _search(s, cb) {
  const link = BASE_URL + `?text=${s}`
  return fetch(link).then(res => res.json()).then(cb)
}

let results = []
const search = debounce(_search, 500)
const setResults = res => {
  results = res
  render()
}

function init() {
  const input = document.getElementById('typeahead')
  input.addEventListener('input', e => {
    const { value } = e.target
    if (!value) {
      setResults([])
    } else {
      search(value, setResults)
    }
  })
  render()
}

function render() {
  const ul = document.getElementById('suggestions-list')
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }

  const input = document.getElementById('typeahead')
  results.forEach(s => {
    const li = document.createElement('li')
    li.textContent = s
    li.addEventListener('click', (e) => {
      const el = e.target
      input.value = el.textContent
      results = []
      render()
    })
    ul.appendChild(li)
  })
}

init()
