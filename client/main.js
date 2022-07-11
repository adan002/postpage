const viewsContainer = document.querySelector('#views-container')
const form = document.querySelector('form')

const baseURL = `http://localhost:4004/api/views`

const viewsCallback = ({ data: views }) => displayViews(views)
const errCallback = err => console.log(err.response.data)

const getAllViews = () => axios.get(baseURL).then(viewsCallback).catch(errCallback)
const createViews = body => axios.post(baseURL, body).then(viewsCallback).catch(errCallback)
// const deleteViews = id => axios.delete(`${baseURL}/${id}`).then(viewsCallback).catch(errCallback)
// const updateViews = (id, type) => axios.put(`${baseURL}/${id}`, {type}).then(viewsCallback).catch(errCallback)

function submitHandler(e) {
    e.preventDefault()

    let title = document.querySelector('#title')
    let imageURL = document.querySelector('#img')
    let description = document.querySelector('#description')
    let bodyObj = {
        title: title.value,
        imageURL: imageURL.value,
        description: description.value 
    }
    createViews(bodyObj)
    title.value = ''
    imageURL.value = ''
    description.value = ''
}

function createViewsCard(views) {
    const viewsCard = document.createElement('section')
    viewsCard.classList.add('views-card')
    viewsCard.innerHTML = `<img alt='views-cover'src=${views.imageURL}class="views-image"/>
    <p class="title">${views.title}</p>
    <p class="description">${views.description}`
    viewsContainer.appendChild(viewsCard)
}

function displayViews(arr) {
    viewsContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createViewsCard(arr[i])
    }
}

form.addEventListener('submit', submitHandler)

getAllViews()



// {/* <div class="btns-container">
// <button onclick="updateview(${view.id}, 'minus')">-</button>
// <p class="view-rating">${view.rating} stars</p>
// <button onclick="updateview(${view.id}, 'plus')">+</button>
// </div> */}
// {/* <button onclick="deleteview(${view.id})">delete</button> */}