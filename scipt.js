
//

async function getPic(year, month, day, camera) {
  const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${year}-${month}-${day}&camera=${camera}&api_key=DEMO_KEY`

  try {
    removePicture()
    const res = await axios.get(url)
    console.log(res)
    return res
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}

function removePicture() {
   const photo = document.querySelector('#display')
  while (photo.lastChild) {
    photo.removeChild(photo.lastChild)
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

// const monthSelected = document.getElementById('#select-month')

// monthSelected.addEventListener('change', () => {
  
// This was going to be where days was changed between 31,30,29,28

// })