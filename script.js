const submitSignup = (e) => {
  e.preventDefault()
  let successNode = e.target.querySelector('.js-form-success')
  let errorNode = e.target.querySelector('.js-form-error')
  let inputNode = e.target.querySelector('input')
  let buttonNode = e.target.querySelector('button')
  let email = e.target.firstElementChild.value
  let data = {
    "listId": '1193995',
    "subscribers": [
      {
        "email": email,
        "mergeNestedObjects": true
      }
    ]
  }

  fetch(`https://api.iterable.com/api/lists/subscribe?api_key=`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(r => r.json())
    .then(r => {
      console.log(r)
      console.log(errorNode)
      inputNode.classList.add('is-hidden')
      buttonNode.classList.add('is-hidden')
      errorNode.classList.add('is-active')
    })
    .catch(e => {
      console.log(errorNode)
    })
}

const newsletterSignup = () => {
  const newsletterForm = [...document.querySelectorAll('.js-newsletter')]
  newsletterForm.forEach(form => {
    form.addEventListener('submit', submitSignup)
  })
}

const submitSearch = (e) => {
  e.preventDefault()
  let term = e.target.firstElementChild.value
  window.location = `https://www.flickr.com/search/?w=commons&q=${term}`
}

const commonsSearch = () => {
  const searchForm = [...document.querySelectorAll('.js-search')]
  searchForm.forEach(form => {
    form.addEventListener('submit', submitSearch)
  })
}

newsletterSignup()
commonsSearch()
