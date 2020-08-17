
//

async function getPic(year, month, day, camera) {
  const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${year}-${month}-${day}&camera=${camera}&api_key=DEMO_KEY`
  try {
    removePicture()
    const res = await axios.get(url)
    return res
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}

function removePicture() {
   const photo = document.getElementById('#display')
  while (photo.lastChild) {
    photo.removeChild(photo.lastChild)
  }
}

const button = document.querySelector('button')

button.addEventListener('submit', (e) => {
  e.preventDefault()
  const y = document.getElementById('#select-year').value
  const m = document.getElementById('#select-month').value
  const d = document.getElementById('#select-day').value
  const c = document.getElementById('#select-cam').value
  console.log(`year:${y} month:${m} day:${d} cam:${c}}`)
  getPic(y, m, d, c)
})

