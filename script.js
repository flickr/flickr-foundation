function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const submitSignup = (e) => {
  e.preventDefault()
  let successNode = e.target.querySelector('.js-form-success')
  let errorNode = e.target.querySelector('.js-form-error')
  let invalidNode = document.querySelector('.js-form-invalid')
  let inputNode = e.target.querySelector('input')
  let buttonNode = e.target.querySelector('button')
  let email = e.target.firstElementChild.value

  if (validateEmail(email)) {
    fetch(`https://www.smugmug.com/newsletter/flickr-foundation?email=${email}`, {
      method: 'GET',
      mode: 'cors',
    })
      .then(r => r.json())
      .then(r => {
        inputNode.classList.add('is-hidden')
        buttonNode.classList.add('is-hidden')
        successNode.classList.add('is-active')
        invalidNode.classList.remove('is-active')
      })
      .catch(e => {
        inputNode.classList.add('is-hidden')
        buttonNode.classList.add('is-hidden')
        successNode.classList.add('is-active')
        invalidNode.classList.remove('is-active')
      })
  } else {
    invalidNode.classList.add('is-active')
  }
}

const newsletterSignup = () => {
  const newsletterForm = [...document.querySelectorAll('.js-newsletter')]
  newsletterForm.forEach(form => {
    form.addEventListener('submit', submitSignup)
  })
}

const submitSearch = (e) => {
  e.preventDefault()
  let term = e.target[0].value
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
