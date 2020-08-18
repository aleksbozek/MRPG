
//

async function getPic(year, month, day, camera) {
  // const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${year}-${month}-${day}&camera=${camera}&api_key=DEMO_KEY`
  const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${year}-${month}-${day}&camera=${camera}&api_key=OY0d1uLC5e9CAOmUwsog61HM4LT5YdDYU0Ngtq73`
  try {
    removePicture()
    const res = await axios.get(url)
    console.log(res)
    let pictures = res.data.photos
    console.log(pictures)
    const rndm = Math.floor((Math.random() * pictures.length))
    console.log(rndm)
    const rndmPhoto = pictures[rndm]
    let picture = `<img src=${rndmPhoto.img_src} alt="Photo ID #${rndmPhoto.id}" style="width: 85vw; height: auto">`
    document.querySelector('#display').insertAdjacentHTML('beforeend', picture)
    const nextPic = pictures[rndm - 1]
    const prevPic = pictures[rndm + 1]
    let pictureN = `<img src=${nextPic.img_src} alt="Photo ID #${nextPic.id}" style="width: 15vw; height: 15vh">`
    document.querySelector('.up').insertAdjacentHTML('beforeend', pictureN)
    let pictureP = `<img src=${prevPic.img_src} alt="Photo ID #${prevPic.id}" style="width: 15vw; height: 15vh">`
    document.querySelector('.down').insertAdjacentHTML('beforeend', pictureP)

    return pictures
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}

function removePicture() {
  const photo = document.querySelector('#display')
  const photo2 = document.querySelector('.up')
  const photo3 = document.querySelector('.down')
  while (photo.lastChild) {
    photo.removeChild(photo.lastChild)
    photo2.removeChild(photo2.lastChild)
    photo3.removeChild(photo3.lastChild)
  }
}

const button = document.querySelector('button')


button.addEventListener('click', (e) => {
  e.preventDefault()
  const y = document.querySelector('#select-year').value
  const m = document.querySelector('#select-month').value
  const d = document.querySelector('#select-day').value
  const c = document.querySelector('#select-cam').value
  console.log(`year:${y} month:${m} day:${d} cam:${c}}`)
  getPic(y, m, d, c)
})


// const next = document.querySelector('up')
// const previous = document.querySelector('down')
// next.addEventListener('click', (e) => {
//   e.preventDefault()

// })


// const monthSelected = document.getElementById('#select-month')

// monthSelected.addEventListener('change', () => {
// This was going to be where days dropdown options changed based on month

// })