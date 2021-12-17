const todos = ['Hello', 'World']
let todo = ''

const render = () => {
  const add = document.getElementById('add-button')
  if (todo) {
    add.removeAttribute('disabled')
  } else {
    add.setAttribute('disabled', true)
  }

  const input = document.getElementById('todo-input')
  input.value = todo
  
  const ul = document.getElementById('todo-list')
  const lis = ul.querySelectorAll('li')
  const lisCount = lis.length
  for (let i = 0; i < todos.length; i++) {
    if (i > lisCount - 1) {
      const li = document.createElement('li')
      const h2 = document.createElement('h2')
      h2.textContent = todos[i]
      const btn = document.createElement('button')
      btn.textContent = 'X'
      btn.className = 'delete-button'
      btn.id = `${i}`
      btn.addEventListener('click', e => {
        const el = e.target
        const id = parseInt(el.id)
        todos.splice(id, 1)
        render()
      })
      li.appendChild(h2)
      li.appendChild(btn)
      ul.appendChild(li)      
    } else {
      const li = lis[i]
      const h2 = li.querySelector('h2')
      h2.textContent = todos[i]
      const btn = li.querySelector('button')
      btn.id = `${i}`
    }
  }
  for (let i = todos.length; i < lis.length; i++) {
    const li = lis[i]
    ul.removeChild(li)
  }
}

const init = () => {
  const input = document.getElementById('todo-input')
  input.addEventListener('input', e => {
    todo = e.target.value
    render()
  })
  const add = document.getElementById('add-button')
  add.addEventListener('click', e => {
    todos.push(todo)
    todo = ''
    render()
  })
}

init()
render()