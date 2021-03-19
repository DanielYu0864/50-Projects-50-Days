const result = document.getElementById('result')
const filter = document.getElementById('filter')
const listItems = []

const getData = async () => {
  const res = await fetch('https://randomuser.me/api/?results=50')

  const { results } = await res.json()

  // console.log(results)

  // clear results
  result.innerHTML = ''

  results.forEach(user => {
    const li = document.createElement('li')
    const backupImg = 'https://randomuser.me/api/portraits/women/33.jpg'
    listItems.push(li)

    li.innerHTML = `
      <img src="${user.picture.medium ? user.picture.medium : backupImg }" alt="${user.name.first + ' ' + user.name.lasat}"/>

      <div class="user-info">
        <h4>${user.name.first + ' ' + user.name.last}</h4>
        <p>${user.location.city}, ${user.location.country ? user.location.country : 'N/A'}</p>
      </div>
    `

      result.appendChild(li)

  })
}

const filterData = search => {
  // console.log(search)
  listItems.forEach(item => {
    // console.log(item)
    if(item.innerText.toLowerCase().includes(search.toLowerCase())) {
      item.classList.remove('hide')
    } else {
      item.classList.add('hide')
    }
  })
}



getData()
filter.addEventListener('input', e => filterData(e.target.value))