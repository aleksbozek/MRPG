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
(https://hosting.photobucket.com/images/l66/aabozek/wireframe.png)

https://hosting.photobucket.com/images/l66/aabozek/wireframe_white_background.png


**MVP:**

- Website layout is clean
- dropdown selector for the different cameras
- dropdown selectors for date, where the days of given month are accurate
- able to navigate directly forward or backward of current photo
- provide descriptions of the cameras aka their purpose

**Post-MVP:**

- dropdown selector for totally random photo from the day in question(no need to be specific with cameras)
- next & previous photo have a thumbnail preview
- leap years have Feb 29th option in dropdown selector
- dropdown selector for Opportunity & Spirit rovers

**Way-Post-MVP:**
- find an API for Mars' moons Deimos & Phobos


**Goals:**
Day | Objective | Status
------------ | ------------- | -------------
M 8/17/20 | Website skeleton; get API search variables in url working | Complete (finished Tuesday AM)
T 8/18/20 | Dropdown selectors as flex boxes; @media layout | 3/4 done~ postponing media til JS is finalized
W 8/19/20 | Navigating next / previous photo; minor styling | getting a head start Tuesday
T 8/19/20 | Clean up site w/ css; tackle any loose ends; attempt post-mvp | ??
F 8/19/20 | Profit | ??

**Priority Matrix:**
![Priority Matrix](https://hosting.photobucket.com/images/l66/aabozek/Priority_Matrix.png)

**Timeframes:**

Objective | Priority | Estimated Time | Time Invested | Actual Time
------------ | ------------- | ------------- | ------------- | -------------
Citing Credits | L |30 minutes | ?? | ??
Media Query Styling | H | 2 hours | 1hr | ??
HTML Skeleton | M | 1 hour | 1.5hrs | ??
API Link With Multiple Variables Functions | H | 3 hours | 1.5 hrs | ??
Dropdown Selectors w/in Flexbox | H | 2.5 hours | 2 hrs | ??
Camera Description Hover Event Listeners | L | 2 hours | 45min | ??
Background Styling | L | 1 hour | 10min | ??
Button Styling | M | 3 hours | 1hr | ??
Dropdown Selector Boxes Cooperating With API | H | 3 hours | 1.5hrs | ??
Next & Previous Photo | H | 3 hours | 30min | ??
Post Minimum Viable Product Goals | L | 5 hours | ?? | ??
Reviewing Tutorials | H | 5 hours | 1.5hrs | ??
End : | (H)igh (M)edium (L)ow | ~31 hours | ?? | ??
