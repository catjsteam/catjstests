# Basic application with couple of thumbnails cubes that has notification display on mouse click - Tested with CatJS
The test is going over the test-data, fetching the elements ids to be clicked on. The test is waiting for the elements to be ready and then it clicks on them.

**Note:** this project is working with the latest canary build (catjs.canary 0.4.88)

For Installation CatJS installation guide visit: https://www.npmjs.com/package/catjs  

CatJS test audit: 
* **./cat-project** catjs project added
* **./cat-project/catproject.json** catjs tool project file 
* **./index.html** import catjs library annotation added 
* **./index.html** annotations for drag and drop tests
* **./cat-project/src/config/cat.json** The tests configuration where the scenarios and other settings exists
  
CatJS, try me:
* Installing catjs, (in short "npm install -g catjs")
* From the command-line Go to cat-project folder
* Run: (sudo) catcli -cbas
* Go to the browser and put the address: http://localhost:8080
