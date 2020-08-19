
//

async function getPic(year, month, day, camera) {
  // const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${year}-${month}-${day}&camera=${camera}&api_key=DEMO_KEY`
  const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${year}-${month}-${day}&camera=${camera}&api_key=OY0d1uLC5e9CAOmUwsog61HM4LT5YdDYU0Ngtq73`
  try {
    removePicture()
    const res = await axios.get(url)
    console.log(res)
    var pictures = res.data.photos
    console.log(pictures)
    addPics(pictures)
    // pictures.push(rndm)
    console.log(pictures)
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


const addPics = (picArray) => {
  var rndm = Math.floor((Math.random() * picArray.length))
  console.log(rndm)
  const rndmPhoto = picArray[rndm]
  let picture = `<img src=${rndmPhoto.img_src} alt="Photo ID #${rndmPhoto.id}" style="width: 75vw; height: auto">`
  document.querySelector('#display').insertAdjacentHTML('beforeend', picture)
  // console.log(`rndm # = ${rndm}`)

  if (rndm - 1 == -1) {
    const rndmN = picArray.length - 1
    const nextPic = picArray[rndmN]
    let pictureN = `<img src=${nextPic.img_src} alt="Photo ID #${nextPic.id}" style="width: 15vw; height: 15vh">`
    document.querySelector('.up').innerHTML = `Cycled to last photo<br>`
    document.querySelector('.up').insertAdjacentHTML('beforeend', pictureN)
  } else {
    const nextPic = picArray[rndm -1]
    let pictureN = `<img src=${nextPic.img_src} alt="Photo ID #${nextPic.id}" style="width: 15vw; height: 15vh">`
    document.querySelector('.up').innerHTML = `Next Photo<br>`
    document.querySelector('.up').insertAdjacentHTML('beforeend', pictureN)
  }

  if (rndm + 1 == picArray.length) {
    const prevPic = picArray[0]
    let pictureP = `<img src=${prevPic.img_src} alt="Photo ID #${prevPic.id}" style="width: 15vw; height: 15vh">`
    document.querySelector('.down').innerHTML = `Cycled to first photo<br>`
    document.querySelector('.down').insertAdjacentHTML('beforeend', pictureP)
  } else {
    const prevPic = picArray[rndm + 1]
    let pictureP = `<img src=${prevPic.img_src} alt="Photo ID #${prevPic.id}" style="width: 15vw; height: 15vh">`
    document.querySelector('.down').innerHTML = `Previous Photo<br>`
    document.querySelector('.down').insertAdjacentHTML('beforeend', pictureP)
  }
  
  
}




const button = document.querySelector('button')

//executes the search!
button.addEventListener('click', (e) => {
  e.preventDefault()
  const y = document.querySelector('#select-year').value
  const m = document.querySelector('#select-month').value
  const d = document.querySelector('#select-day').value
  const c = document.querySelector('#select-cam').value
  console.log(`year:${y} month:${m} day:${d} cam:${c}}`)
  getPic(y, m, d, c)
})

//cycling through to the next and prior photos w/in the array
//this is why I set the pictures array & rndm# as var; to gain access to them on the global scale
const next = document.querySelector('.up')
const previous = document.querySelector('.down')

// next.addEventListener('click', (e) => {
//   e.preventDefault()
//   removePicture()
//   rndm -= 1
//   const rndmPhoto = pictures[rndm]
//   let picture = `<img src=${rndmPhoto.img_src} alt="Photo ID #${rndmPhoto.id}" style="width: 75vw; height: auto">`
//   document.querySelector('#display').insertAdjacentHTML('beforeend', picture)
//   console.log(`rndm # = ${rndm}`)
//     if (rndm - 1 == -1) {
//       document.querySelector('.up').innerHTML = `Above is the last photo taken<br>by the camera this day.`
//     } else {
//       const nextPic = picArray[rndm -1]
//       let pictureN = `<img src=${nextPic.img_src} alt="Photo ID #${nextPic.id}" style="width: 15vw; height: 15vh">`
//       document.querySelector('.up').innerHTML = `Next Photo<br>`
//       document.querySelector('.up').insertAdjacentHTML('beforeend', pictureN)
//     }

//     if (rndm + 1 > picArray.lenght) {
//       document.querySelector('.down').innerHTML = `There are no prior pictures taken<br>by the camera this day.`
//     } else {
//       const prevPic = picArray[rndm + 1]
//       let pictureP = `<img src=${prevPic.img_src} alt="Photo ID #${prevPic.id}" style="width: 15vw; height: 15vh">`
//       document.querySelector('.down').innerHTML = `Previous Photo<br>`
//       document.querySelector('.down').insertAdjacentHTML('beforeend', pictureP)
//     }

// })

// previous.addEventListener('click', (e) => {
//   e.preventDefault()
//   removePicture()
//   rndm += 1
//   const rndmPhoto = pictures[rndm]
//   let picture = `<img src=${rndmPhoto.img_src} alt="Photo ID #${rndmPhoto.id}" style="width: 75vw; height: auto">`
//   document.querySelector('#display').insertAdjacentHTML('beforeend', picture)
//   console.log(`rndm # = ${rndm}`)
//     if (rndm - 1 == -1) {
//       document.querySelector('.up').innerHTML = `Above is the last photo taken<br>by the camera this day.`
//     } else {
//       const nextPic = picArray[rndm -1]
//       let pictureN = `<img src=${nextPic.img_src} alt="Photo ID #${nextPic.id}" style="width: 15vw; height: 15vh">`
//       document.querySelector('.up').innerHTML = `Next Photo<br>`
//       document.querySelector('.up').insertAdjacentHTML('beforeend', pictureN)
//     }

//     if (rndm + 1 > picArray.lenght) {
//       document.querySelector('.down').innerHTML = `There are no prior pictures taken<br>by the camera this day.`
//     } else {
//       const prevPic = picArray[rndm + 1]
//       let pictureP = `<img src=${prevPic.img_src} alt="Photo ID #${prevPic.id}" style="width: 15vw; height: 15vh">`
//       document.querySelector('.down').innerHTML = `Previous Photo<br>`
//       document.querySelector('.down').insertAdjacentHTML('beforeend', pictureP)
//     }

// })


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


// const monthSelected = document.getElementById('#select-month')

// monthSelected.addEventListener('change', () => {
// This was going to be where days dropdown options changed based on month

// })