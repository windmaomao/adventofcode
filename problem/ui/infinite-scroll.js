const API_BASE_URL = 'https://www.algoexpert.io/api/testimonials'

const container = document.getElementById('testimonial-container')

function addTestimonial(id, message) {
  const item = document.createElement('p')
  item.id = `testimonial-${id}`
  item.className = 'testimonial'
  const text = document.createTextNode(message)
  item.appendChild(text)
  container.appendChild(item)
}

let lastTestimonialId = null
let hasNextTestimonials = true
let testimonialLoading = false

function fetchTestimonials(limit = 5) {
  if (!hasNextTestimonials || testimonialLoading) return
  let url = API_BASE_URL + `?limit=${limit}`
  if (lastTestimonialId) {
    url += `&after=${lastTestimonialId}`
  }
  testimonialLoading = true
  return fetch(url).then(res => res.json()).then(res => {
    testimonialLoading = false
    // console.log(res.hasNext, res.testimonials)
    // update pagination
    const { hasNext, testimonials: items } = res
    hasNextTestimonials = hasNext
    if (items.length) {
      lastTestimonialId = items[items.length - 1].id 
    }
    // render the list
    items.forEach(({ id, message }) => { 
      addTestimonial(id, message)
    })
  }).catch(() => {
    testimonialLoading = false
  })
}

// addTestimonial(0, 'AlgoExpert was my go-to course to ace those coding interviews. I really liked the depth of explanation in the video tutorials and the user-friendly interface. I guess AlgoExpert and a lot of hard work makes everything possible (journey from pre-sales to development)!')
// addTestimonial(1, 'I would just like to point out that AlgoExpert helped me a lot to get an offer from Amazon - UK office (I accepted it). I think that AlgoExpert has everything you need in one place. It covers all important topics. I especially like the possibility to see hints in order to get an idea for the solution or to check the whole video explanation if necessary (which is very well explained!). You can literally prepare the whole coding part of the interview without changing the web browser tab.')

fetchTestimonials()
container.addEventListener('scroll', () => {
  const { scrollHeight, scrollTop, clientHeight } = container
  if (scrollTop + clientHeight < scrollHeight) return
  fetchTestimonials()
})
