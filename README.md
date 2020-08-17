# MRPG
**Mar Rover Picture Grabber**

**App Title:** Mars Picture Generator

App Description: Have you gone to NASA.gov looking for photos taken by the Curiosity rover only to be overwhelmed by the vastness of the gallery?  It's full of planets, satelites, and even selfies from the ISS!  With the Mars Picture Generator we'll grab a rover picture for you!  No more sifting through pages upon pages of NASA's vague pictures.  We'll even narrow your search based on the specific camera that holds your interest.  From this grabbed picture you'll be able to view the immediate ones taken before and after.  This'll provide you with a play-by-play of the things the rover captures.  Also, if the photo you're given doesn't pique your interest, you can always hit the generator again, or give it another day to work with!

**API:** https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?

**API Source:** https://api.nasa.gov  @ the bottom of the page w/in the tab *Mars Rover Photos*

**Code Snippet Example:** The first two results for Curiosity's chemcam June 12th, 2020 

``` JSON


https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2020-6-12&camera=chemcam&api_key=DEMO_KEY {
    "photos": [
        {
            "id": 750116,
            "sol": 2791,
            "camera": {
                "id": 23,
                "name": "CHEMCAM",
                "rover_id": 5,
                "full_name": "Chemistry and Camera Complex"
            },
            "img_src": "https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/02791/opgs/edr/ccam/CR0_645265370EDR_F0801398CCAM03790M_.JPG",
            "earth_date": "2020-06-12",
            "rover": {
                "id": 5,
                "name": "Curiosity",
                "landing_date": "2012-08-06",
                "launch_date": "2011-11-26",
                "status": "active"
            }
        },
        {
            "id": 750117,
            "sol": 2791,
            "camera": {
                "id": 23,
                "name": "CHEMCAM",
                "rover_id": 5,
                "full_name": "Chemistry and Camera Complex"
            },
            "img_src": "https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/02791/opgs/edr/ccam/CR0_645264368EDR_F0801398CCAM03790M_.JPG",
            "earth_date": "2020-06-12",
            "rover": {
                "id": 5,
                "name": "Curiosity",
                "landing_date": "2012-08-06",
                "launch_date": "2011-11-26",
                "status": "active"
            }
        }
    ]
}
```
**Wireframe:**
![Wireframe](https://hosting.photobucket.com/images/l66/aabozek/wireframe.png)
Format: ![Wireframe](url)

https://hosting.photobucket.com/images/l66/aabozek/wireframe_white_background.png


**MVP:** -Website layout is clean
-dropdown selector for the different cameras
-dropdown selectors for date, where the days of given month are accurate
-able to navigate directly forward or backward of current photo
-provide descriptions of the cameras aka their purpose
**Post-MVP:**
-dropdown selector for totally random photo from the day in question(no need to be specific with cameras)
-next & previous photo have a thumbnail preview
-leap years have Feb 29th option in dropdown selector
-dropdown selector for Opportunity & Spirit rovers
**Way-Post-MVP:**
-find an API for Mars' moons Deimos & Phobos

**Goals:**
Monday:Website skeleton; get API search variables in url working
Tuesday:Dropdown selectors as flex boxes; @media layout
Wednesday:Navigating next / previous photo; minor styling
Thursday:Clean up site w/ css; tackle any loose ends; attempt post-mvp
Friday:Profit

**Priority Matrix:**
![Priority Matrix](https://hosting.photobucket.com/images/l66/aabozek/Priority_Matrix.png)
Format:[Priority Matrix](url)

**Timeframes:**

Objective | Estimated Time | Actual Time
------------ | ------------- | -------------
Citing Credits | 30 minutes | ??
Media Query Styling | 1 hour | ??
HTML Skeleton | 1 hour | ??
API Link With Multiple Variables Functions | 1 hour | ??
Dropdown Selectors w/in Flexbox | 1.5 hours | ??
Camera Description Hovering Event Listeners | 2 hours | ??
CSS Styling | 3 hours | ??
Dropdown Selector Boxes Cooperating With API | 3 hours | ??
Next & Previous Photo | 3 hours | ??
Post Minimum Viable Product Goals | 3+ hours | ??
End : | ~19 hours | ??
