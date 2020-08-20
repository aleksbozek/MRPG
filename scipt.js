
////set these to var to allow access across all functions
var rndm = 0
var info = {}

async function getPics(year, month, day, camera) {
  // const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${year}-${month}-${day}&camera=${camera}&api_key=DEMO_KEY`
  const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${year}-${month}-${day}&camera=${camera}&api_key=OY0d1uLC5e9CAOmUwsog61HM4LT5YdDYU0Ngtq73`
  try {
    removePicture()

    const res = await axios.get(url)
    const pictures = res.data.photos
    rndm = Math.floor((Math.random() * pictures.length))
    addPics(pictures, rndm)
    const picArray = { pictures, rndm }
    info = picArray
    return picArray
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

// Initial picture(s) get displayed from this function; which is invoked during the async try
const addPics = (picArray, rndm) => {
  
  // console.log(rndm)
  const rndmPhoto = picArray[rndm]
  let picture = `<img src=${rndmPhoto.img_src} alt="Photo ID #${rndmPhoto.id}" style="width: 75vw; height: auto">`
  document.querySelector('#display').insertAdjacentHTML('beforeend', picture)

  if (rndm - 1 == -1) {
    const rndmN = picArray.length - 1
    const nextPic = picArray[rndmN]
    let pictureN = `<img src=${nextPic.img_src} alt="Photo ID #${nextPic.id}" style="width: 15vw; height: auto">`
    document.querySelector('.up').innerHTML = `Cycled to last photo<br>`
    document.querySelector('.up').insertAdjacentHTML('beforeend', pictureN)
  } else {
    const nextPic = picArray[rndm -1]
    let pictureN = `<img src=${nextPic.img_src} alt="Photo ID #${nextPic.id}" style="width: 15vw; height: auto">`
    document.querySelector('.up').innerHTML = `Next Photo<br>`
    document.querySelector('.up').insertAdjacentHTML('beforeend', pictureN)
  }

  if (rndm + 1 == picArray.length) {
    const prevPic = picArray[0]
    let pictureP = `<img src=${prevPic.img_src} alt="Photo ID #${prevPic.id}" style="width: 15vw; height: auto">`
    document.querySelector('.down').innerHTML = `Cycled to first photo<br>`
    document.querySelector('.down').insertAdjacentHTML('beforeend', pictureP)
  } else {
    const prevPic = picArray[rndm + 1]
    let pictureP = `<img src=${prevPic.img_src} alt="Photo ID #${prevPic.id}" style="width: 15vw; height: auto">`
    document.querySelector('.down').innerHTML = `Previous Photo<br>`
    document.querySelector('.down').insertAdjacentHTML('beforeend', pictureP)
  }
  
  
}






//cycling through to the next and prior photos upon click
// Key difference between these two is  -=  &  +=
const next = document.querySelector('.up')
const previous = document.querySelector('.down')
//when user clicks the picture in the bottom left
next.addEventListener('click', (e) => {
  e.preventDefault()
  removePicture()
  info.rndm -= 1
 
  if (info.rndm == -1) {
    info.rndm = info.pictures.length -1
    const rndmPhoto = info.pictures[info.rndm]
    console.log(`cycle to last photo value is ${rndmPhoto}; info.pictures.length =${info.pictures.length}; info.rndm should be one less than prior # ~ ${info.rndm}`)
    let picture = `<img src=${rndmPhoto.img_src} alt="Photo ID #${rndmPhoto.id}" style="width: 75vw; height: auto">`
    document.querySelector('#display').insertAdjacentHTML('beforeend', picture)
  } else {
    const rndmPhoto = info.pictures[info.rndm]
    let picture = `<img src=${rndmPhoto.img_src} alt="Photo ID #${rndmPhoto.id}" style="width: 75vw; height: auto">`
    document.querySelector('#display').insertAdjacentHTML('beforeend', picture)
  }
  
  if (info.rndm - 1 == -1 || info.rndm -1 == -2) {
    const rndmN = info.pictures.length - 1
    const nextPic = info.pictures[rndmN]
    let pictureN = `<img src=${nextPic.img_src} alt="Photo ID #${nextPic.id}" style="width: 15vw; height: 15vh">`
    document.querySelector('.up').innerHTML = `Cycled to last photo<br>`
    document.querySelector('.up').insertAdjacentHTML('beforeend', pictureN)
  } else {
    const nextPic = info.pictures[info.rndm -1]
    let pictureN = `<img src=${nextPic.img_src} alt="Photo ID #${nextPic.id}" style="width: 15vw; height: 15vh">`
    document.querySelector('.up').innerHTML = `Next Photo<br>`
    document.querySelector('.up').insertAdjacentHTML('beforeend', pictureN)
  }

  if (info.rndm + 1 == info.pictures.length || info.rndm > info.pictures.length) {
    const prevPic = info.pictures[0]
    let pictureP = `<img src=${prevPic.img_src} alt="Photo ID #${prevPic.id}" style="width: 15vw; height: 15vh">`
    document.querySelector('.down').innerHTML = `Cycled to first photo<br>`
    document.querySelector('.down').insertAdjacentHTML('beforeend', pictureP)
  } else {
    const prevPic = info.pictures[info.rndm + 1]
    let pictureP = `<img src=${prevPic.img_src} alt="Photo ID #${prevPic.id}" style="width: 15vw; height: 15vh">`
    document.querySelector('.down').innerHTML = `Previous Photo<br>`
    document.querySelector('.down').insertAdjacentHTML('beforeend', pictureP)
  }

})
//when user clicks bottom right
previous.addEventListener('click', (e) => {
  e.preventDefault()
  removePicture()
  info.rndm += 1

  if (info.rndm >= info.pictures.length) {
    info.rndm = 0
    const rndmPhoto = info.pictures[info.rndm]
    let picture = `<img src=${rndmPhoto.img_src} alt="Photo ID #${rndmPhoto.id}" style="width: 75vw; height: auto">`
    document.querySelector('#display').insertAdjacentHTML('beforeend', picture)
  } else {
    const rndmPhoto = info.pictures[info.rndm]
    let picture = `<img src=${rndmPhoto.img_src} alt="Photo ID #${rndmPhoto.id}" style="width: 75vw; height: auto">`
    document.querySelector('#display').insertAdjacentHTML('beforeend', picture)
  }
  
  if (info.rndm - 1 == -1 || info.rndm -1 == -2) {
    const rndmN = info.pictures.length - 1
    const nextPic = info.pictures[rndmN]
    let pictureN = `<img src=${nextPic.img_src} alt="Photo ID #${nextPic.id}" style="width: 15vw; height: 15vh">`
    document.querySelector('.up').innerHTML = `Cycled to last photo<br>`
    document.querySelector('.up').insertAdjacentHTML('beforeend', pictureN)
  } else {
    const nextPic = info.pictures[info.rndm -1]
    let pictureN = `<img src=${nextPic.img_src} alt="Photo ID #${nextPic.id}" style="width: 15vw; height: 15vh">`
    document.querySelector('.up').innerHTML = `Next Photo<br>`
    document.querySelector('.up').insertAdjacentHTML('beforeend', pictureN)
  }

  if (info.rndm + 1 == info.pictures.length || info.rndm > info.pictures.length) {
    const prevPic = info.pictures[0]
    let pictureP = `<img src=${prevPic.img_src} alt="Photo ID #${prevPic.id}" style="width: 15vw; height: 15vh">`
    document.querySelector('.down').innerHTML = `Cycled to first photo<br>`
    document.querySelector('.down').insertAdjacentHTML('beforeend', pictureP)
  } else {
    const prevPic = info.pictures[info.rndm + 1]
    let pictureP = `<img src=${prevPic.img_src} alt="Photo ID #${prevPic.id}" style="width: 15vw; height: 15vh">`
    document.querySelector('.down').innerHTML = `Previous Photo<br>`
    document.querySelector('.down').insertAdjacentHTML('beforeend', pictureP)
  }

})


//Camera description changing is invoked with the next available const below this function.
const camText = () => {
  const camDes = document.querySelector('#cam-hover')
  const c = document.querySelector('#select-cam').value
  if (c == 'MAST') {//innerHTML to allow the line breaks between the two paragraphs
    camDes.innerHTML = `The Mast Camera takes color images, three-dimensional stereo images, and color video footage of the martian terrain and has a powerful zoom lens.<br> <br>

    Like the cameras on the Mars Exploration Rovers that landed on the red planet in 2004, the Mastcam design consists of two duplicate camera systems mounted on a mast extending upward from the Mars Science Laboratory rover deck. The cameras function much like human eyes, producing three-dimensional stereo images by combining two side-by-side images taken from slightly different positions.`
  } else if (c == 'CHEMCAM') {
    camDes.textContent = `ChemCam fires a laser and analyzes the elemental composition of vaporized materials from areas smaller than 1 millimeter on the surface of Martian rocks and soils. ChemCam also takes grayscale images with its remote micro-imager.`
    
  } else if (c == 'NAVCAM'){
    camDes.textContent = `Mounted on the mast (the rover "neck and head"), these black-and-white cameras use visible light to gather panoramic, three-dimensional (3D) imagery. The navigation camera unit is a stereo pair of cameras, each with a 45-degree field of view that supports ground navigation planning by scientists and engineers. They work in cooperation with the hazard avoidance cameras by providing a complementary view of the terrain.`
  }

}
//This initiates the change of camera description
const camBox = document.querySelector('#select-cam')
camBox.addEventListener('mouseout', camText)


// const globalTest = () => {

//   console.log(info)

// }

const button = document.querySelector('button')

//Executes the search!  I'm putting this on the bottom to ensure all other code is registered as being present.
button.addEventListener('click', (e) => {
  e.preventDefault()
  const y = document.querySelector('#select-year').value
  const m = document.querySelector('#select-month').value
  const d = document.querySelector('#select-day').value
  const c = document.querySelector('#select-cam').value
  console.log(`year:${y} month:${m} day:${d} cam:${c}}`)
  getPics(y, m, d, c)
  // info = getPics(y, m, d, c)
  // setTimeout(() => {
  //   console.log(info)
  //   globalTest()
  // }, 3000)
})