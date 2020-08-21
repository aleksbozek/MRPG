
////set these to var to allow access across all functions
var rndm = 0 //the original random number which gets generated when Search is clicked
var info = {}//used for the initial picture display
var photoNum = {
  current: 0,//displays picture # / #
  total: 0
}
var count = document.querySelector('#count')// is where # / # gets displayed

async function getPics(year, month, day, camera) {
  // const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${year}-${month}-${day}&camera=${camera}&api_key=DEMO_KEY`
  const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${year}-${month}-${day}${camera}&api_key=OY0d1uLC5e9CAOmUwsog61HM4LT5YdDYU0Ngtq73`
  try {
    const res = await axios.get(url)
    const pictures = res.data.photos
    rndm = Math.floor((Math.random() * pictures.length))
    photoNum.current = rndm + 1
    photoNum.total = pictures.length
    //checks whethers pictures were taken given search parameters
    if (pictures.length == 0) {
      let picture = `<img src='https://i.imgur.com/WXC6zDR.jpg' alt="No photos taken by the camera this day" style="width: 75vw; height: auto">`
      const photo = document.querySelector('#display')
      photo.removeChild(photo.lastChild)
      photo.insertAdjacentHTML('beforeend', picture)
    } else {
      removePicture()
    }
    count.innerHTML = `Photo # ${photoNum.current}/${photoNum.total}`
    addPics(pictures, rndm)
    const picArray = { pictures, rndm }
    info = picArray
    return picArray
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}

//utilized during cycling through next & previous photos
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
  const rndmPhoto = picArray[rndm]
  let picture = `<img src=${rndmPhoto.img_src} alt="Photo ID #${rndmPhoto.id}" style="width: 65vw; height: auto">`
  document.querySelector('#display').insertAdjacentHTML('beforeend', picture)
  newPicCamText(picArray[rndm])

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

const next = document.querySelector('.up')
const previous = document.querySelector('.down')
//cycling through to the next and prior photos upon click
// Key difference between these two is  -=  &  += for the original random number prior to contingency checks

//when user clicks the picture in the bottom left
next.addEventListener('click', (e) => {
  e.preventDefault()
  removePicture()
  info.rndm -= 1
    //this IF checks whether the displayed picture is the first index
  if (info.rndm == -1) {
    info.rndm = info.pictures.length -1
    const rndmPhoto = info.pictures[info.rndm]
    let picture = `<img src=${rndmPhoto.img_src} alt="Photo ID #${rndmPhoto.id}" style="width: 65vw; height: auto">`
    document.querySelector('#display').insertAdjacentHTML('beforeend', picture)
    photoNum.current = info.pictures.length
    newPicCamText(info.pictures[info.rndm])
  } else {
    const rndmPhoto = info.pictures[info.rndm]
    let picture = `<img src=${rndmPhoto.img_src} alt="Photo ID #${rndmPhoto.id}" style="width: 65vw; height: auto">`
    document.querySelector('#display').insertAdjacentHTML('beforeend', picture)
    photoNum.current -= 1
    newPicCamText(info.pictures[info.rndm])
  }
    //this IF checks whether the new Next is the first index
  if (info.rndm - 1 == -1 || info.rndm -1 == -2) {
    const rndmN = info.pictures.length - 1
    const nextPic = info.pictures[rndmN]
    let pictureN = `<img src=${nextPic.img_src} alt="Photo ID #${nextPic.id}" style="width: 17vw; height: auto">`
    document.querySelector('.up').innerHTML = `Cycled to last photo<br>`
    document.querySelector('.up').insertAdjacentHTML('beforeend', pictureN)
  } else {
    const nextPic = info.pictures[info.rndm -1]
    let pictureN = `<img src=${nextPic.img_src} alt="Photo ID #${nextPic.id}" style="width: 17vw; height: auto">`
    document.querySelector('.up').innerHTML = `Next Photo<br>`
    document.querySelector('.up').insertAdjacentHTML('beforeend', pictureN)
  }
    //this IF checks for going from first index to last
  if (info.rndm + 1 == info.pictures.length || info.rndm > info.pictures.length) {
    const prevPic = info.pictures[0]
    let pictureP = `<img src=${prevPic.img_src} alt="Photo ID #${prevPic.id}" style="width: 17vw; height: auto">`
    document.querySelector('.down').innerHTML = `Cycled to first photo<br>`
    document.querySelector('.down').insertAdjacentHTML('beforeend', pictureP)
  } else {
    const prevPic = info.pictures[info.rndm + 1]
    let pictureP = `<img src=${prevPic.img_src} alt="Photo ID #${prevPic.id}" style="width: 17vw; height: auto">`
    document.querySelector('.down').innerHTML = `Previous Photo<br>`
    document.querySelector('.down').insertAdjacentHTML('beforeend', pictureP)
  }
  if (photoNum.current == 0) {
    photoNum.current = photoNum.total
  }
  count.innerHTML = `Photo # ${photoNum.current}/${photoNum.total}`

})

//when user clicks bottom right
previous.addEventListener('click', (e) => {
  e.preventDefault()
  removePicture()
  info.rndm += 1
    //checks for current display whether it's the last index
  if (info.rndm >= info.pictures.length) {
    info.rndm = 0
    const rndmPhoto = info.pictures[info.rndm]
    let picture = `<img src=${rndmPhoto.img_src} alt="Photo ID #${rndmPhoto.id}" style="width: 65vw; height: auto">`
    document.querySelector('#display').insertAdjacentHTML('beforeend', picture)
    photoNum.current = 1
    newPicCamText(info.pictures[info.rndm])
  } else {
    const rndmPhoto = info.pictures[info.rndm]
    let picture = `<img src=${rndmPhoto.img_src} alt="Photo ID #${rndmPhoto.id}" style="width: 65vw; height: auto">`
    document.querySelector('#display').insertAdjacentHTML('beforeend', picture)
    photoNum.current += 1
    newPicCamText(info.pictures[info.rndm])
  }
    //checks the new next thumbnail
  if (info.rndm - 1 == -1 || info.rndm -1 == -2) {
    const rndmN = info.pictures.length - 1
    const nextPic = info.pictures[rndmN]
    let pictureN = `<img src=${nextPic.img_src} alt="Photo ID #${nextPic.id}" style="width: 17vw; height: auto">`
    document.querySelector('.up').innerHTML = `Cycled to last photo<br>`
    document.querySelector('.up').insertAdjacentHTML('beforeend', pictureN)
  } else {
    const nextPic = info.pictures[info.rndm -1]
    let pictureN = `<img src=${nextPic.img_src} alt="Photo ID #${nextPic.id}" style="width: 17vw; height: auto">`
    document.querySelector('.up').innerHTML = `Next Photo<br>`
    document.querySelector('.up').insertAdjacentHTML('beforeend', pictureN)
  }
    //checks the new previous thumbnail
  if (info.rndm + 1 == info.pictures.length || info.rndm > info.pictures.length) {
    const prevPic = info.pictures[0]
    let pictureP = `<img src=${prevPic.img_src} alt="Photo ID #${prevPic.id}" style="width: 17vw; height: auto">`
    document.querySelector('.down').innerHTML = `Cycled to first photo<br>`
    document.querySelector('.down').insertAdjacentHTML('beforeend', pictureP)
  } else {
    const prevPic = info.pictures[info.rndm + 1]
    let pictureP = `<img src=${prevPic.img_src} alt="Photo ID #${prevPic.id}" style="width: 17vw; height: auto">`
    document.querySelector('.down').innerHTML = `Previous Photo<br>`
    document.querySelector('.down').insertAdjacentHTML('beforeend', pictureP)
  }
  if (photoNum.current == 0) {
    photoNum.current = photoNum.total
  }
  count.innerHTML = `Photo # ${photoNum.current}/${photoNum.total}`

})


//Camera description changing is invoked with the next available const below this function.
const camText = () => {
  const camDes = document.querySelector('#cam-hover')
  const c = document.querySelector('#select-cam').value
  if (c == '&camera=MAST') {//innerHTML to allow the line breaks between the two paragraphs
    camDes.innerHTML = `MAST <br>The Mast Camera takes color images, three-dimensional stereo images, and color video footage of the martian terrain and has a powerful zoom lens.<br> <br>

    Like the cameras on the Mars Exploration Rovers that landed on the red planet in 2004, the Mastcam design consists of two duplicate camera systems mounted on a mast extending upward from the Mars Science Laboratory rover deck. The cameras function much like human eyes, producing three-dimensional stereo images by combining two side-by-side images taken from slightly different positions.`
  } else if (c == '&camera=CHEMCAM') {
    camDes.textContent = `ChemCam fires a laser and analyzes the elemental composition of vaporized materials from areas smaller than 1 millimeter on the surface of Martian rocks and soils. ChemCam also takes grayscale images with its remote micro-imager.`
    
  } else if (c == '&camera=NAVCAM'){
    camDes.textContent = `Mounted on the mast (the rover "neck and head"), these black-and-white cameras use visible light to gather panoramic, three-dimensional (3D) imagery. The navigation camera unit is a stereo pair of cameras, each with a 45-degree field of view that supports ground navigation planning by scientists and engineers. They work in cooperation with the hazard avoidance cameras by providing a complementary view of the terrain.`
  }

}
//This initiates the change of camera description
const camBox = document.querySelector('#select-cam')
camBox.addEventListener('mouseout', camText)


const newPicCamText = (pic) => {
  const camDes = document.querySelector('#cam-hover')
  if (pic.camera.name == 'FHAZ' || pic.camera.name == 'RHAZ') {
    camDes.innerHTML = `HAZARD CAM<br>Mounted on the lower portion of the front and rear of the rover, these black-and-white cameras use visible light to capture 3D imagery. This imagery safeguards against the rover getting lost or inadvertently crashing into unexpected obstacles, and works in tandem with software that allows the rover make its own safety choices and to "think on its own."<br><br>

    The cameras each have a wide field of view of about 120 degrees. The rover uses pairs of Hazcam images to map out the shape of the terrain as far as 3 meters (10 feet) in front of it, in a "wedge" shape that is over 4 meters wide (13 feet) at the farthest distance. The cameras need to see far to either side because unlike human eyes, the Hazcam cameras cannot move independently; they are mounted directly to the rover body.<br><br>

    Main Job |	Aid in autonomous navigation and obstacle avoidance<br>
    Location |	Mounted at the front and rear of the rover's body, pointing down toward the ground, about 27 inches (68 centimeters) above ground; front: about 6.54 inches between the center of left and right eyes; back: 3.9 inches (10 centimeters), about 31 inches (78 centimeters) above ground level<br>
    Weight |	about 9 ounces (250 grams) apiece<br>
    Grayscale	| cover red wavelengths centered at ~650 nanometers<br>
    Image Size |	1024 X 1024 pixels<br>
    Image Resolution	| 2.1 milliradians per pixel<br>
    Focal Length |	in focus about 4 inches (10 centimeters) to infinity<br>
    Focal Ratio and Field of View	| Fisheye lens with ND 124° square<br>
    Other |	Each has a one-time-removable lens cover to shield from dust kicked up at landing<br>`
  } else if (pic.camera.name == 'MAST') {
    camDes.innerHTML =`MAST <br>The Mast Camera takes color images, three-dimensional stereo images, and color video footage of the martian terrain and has a powerful zoom lens.<br> <br>

  Like the cameras on the Mars Exploration Rovers that landed on the red planet in 2004, the Mastcam design consists of two duplicate camera systems mounted on a mast extending upward from the Mars Science Laboratory rover deck. The cameras function much like human eyes, producing three-dimensional stereo images by combining two side-by-side images taken from slightly different positions.<br><br>
  
  Main Job | 	To take panoramic color images of the surface and atmospheric features and the terrain ahead of the rover.<br>
  Location |	Mounted about human-eye height, about 6.5 feet (2.0 meters), with about 10 inches (25 centimeters) between them.<br>
  Color Quality	| Similar to that of consumer digital cameras; 2 megapixels.<br>
  Image Size |	~1600 X 1200 pixels<br>
  Image Resolution : RESOLUTION| 2.9 inches (7.4 centimeters) per pixel at a distance of about six-tenths of a mile (1 kilometer) and about 0.006 inch (150 microns) per pixel at a distance of 6.6 feet (2 meters) <br>

  Left Eye | (Mastcam-34) <br>
  450 microns/pixel at ~6.5-foot (2-meter) distance 22 centimeters/pixel at ~.6 miles (1 kilometer) <br>

  Right Eye | (Mastcam-100) <br>
  ~150 microns/pixel at ~6.5-foot (2-meter) distance 7.4 centimeters/pixel scale at ~.6 miles (1 kilometer)<br>
  
  Focal Length |	In focus from about 6 feet (2.1 meters), the nearest view of the surface, to infinity <br>
  Left Eye ~34 mm <br>
  Right Eye ~100 mm<br>
  Focal Ratio and Field of View	| Left Eye f/8 and 15° to f/8.5 and 39.4°<br>
  Stereo Baseline of the Pair |	~24.5 cm<br>
  Memory	| 8 Gigabyte memory allows several hours of HD video or 5,500+ raw frames to be stored (e.g., a full-scale mosaic of 360° x 80° imaged in 3 science color filters with at least 20% overlap between images)<br>
  HD Video |	10 frames per second<br>`
    
  } else if (pic.camera.name == 'CHEMCAM') {
    camDes.innerHTML = `CHEMISTRY<br>ChemCam fires a laser and analyzes the elemental composition of vaporized materials from areas smaller than 1 millimeter on the surface of Martian rocks and soils. ChemCam also takes grayscale images with its remote micro-imager.<br><br>
    
    Main Job | To analyze the chemical composition of rocks and soil.<br> 
    Location | The laser, telescope, and camera sit on Curiosity's mast (its "forehead"), while the spectrometer is located in its "body".<br>
    Components :	Telescope | Focuses laser and camera<br>
    Remote Micro-Imager | One of Curiosity's "eyes," captures detailed images of the area illuminated by the laser beam<br>
    Laser | Vaporizes rock surfaces, creating a plasma of their component gases<br>
    Spectrometer | Three spectrographs divide the plasma light into wavelengths for chemical analysis<br>`
    
  } else if (pic.camera.name == 'MAHLI') {
    camDes.innerHTML = `The Mars Hand Lens Imager is the equivalent of a geologist's hand lens and provides close-up views of the minerals, textures and structures in martian rocks and the surface layer of rocky debris and dust. With this new device, earthbound geologists are able to see martian features smaller than the diameter of a human hair.<br><br>
    
    Main Job | Microscopic Imaging of minerals, textures and structures in rocks and soil at scales smaller than the diameter of a human hair.<br>
    Location | Mounted on the turret at the end of the robotic arm.<br>
    Color Quality | Similar to that of consumer digital cameras, with an autofocus ability.<br>
    Image Size | Up to 1600 x 1200 pixels<br>
    Image Resolution | Possibility of 13.9 microns/pixel<br>
    Focal Length | In focus from 18.3 mm at the closest working distance to 21.3 mm at infinity<br>
    Focal Ratio and Field of View | From f/9.8 and 34° to f/8.5 and 39.4°<br>
    Memory | 8 Gigabyte flash memory storage; 128 megabyte synchronous dynamic random access memory (SDRAM)<br>
    HD Video | 720p<br>
    Other | First sends back thumbnails so scientists can select best images to send back to Earth<br>`
  }else if (pic.camera.name == 'NAVCAM') {
    camDes.innerHTML = `NAVIGATION<br>Mounted on the mast (the rover "neck and head"), these black-and-white cameras use visible light to gather panoramic, three-dimensional (3D) imagery. The navigation camera unit is a stereo pair of cameras, each with a 45-degree field of view that supports ground navigation planning by scientists and engineers. They work in cooperation with the hazard avoidance cameras by providing a complementary view of the terrain.<br><br>
    Main Job	| Aid in autonomous navigation<br>
    Location |	Mounted at the front and rear of the rover's body, pointing down toward the ground; left and right "eyes" in each set are about 16.5 inches (42 centimeters) apart<br>
    Weight |	about 9 ounces (250 grams) apiece<br>
    Grayscale	| cover red wavelengths centered at ~650 nanometers<br>
    Image Size	| 1024 X 1024 pixels<br>
    Image Resolution |	0.82 milliradians per pixel<br>
    Focal Length |	in focus from 20 inches (0.5 meter) to infinity<br>
    Focal Ratio and Field of View	| fixed-aperture f/12 and 45° square; field of view is similar to a 37-mm lens on a 35-mm camera<br>`
  }

}

const button = document.querySelector('button')

//Executes the search!  I'm putting this on the bottom to ensure all other code is registered as being present.
button.addEventListener('click', (e) => {
  e.preventDefault()
  const y = document.querySelector('#select-year').value
  const m = document.querySelector('#select-month').value
  const d = document.querySelector('#select-day').value
  const c = document.querySelector('#select-cam').value
  getPics(y, m, d, c)
})