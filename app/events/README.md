# Application with events UI tests included, jquery and native implementations - Tested with CatJS

For Installation CatJS installation guide visit: https://www.npmjs.com/package/catjs  

CatJS test audit: 
* **./cat-project** catjs project added
* **./cat-project/catproject.json** catjs tool project file 
* **./[jquery|native]/[elements|dnd]/index.html** import catjs library annotation added 
* **./[jquery|native]/[elements|dnd]/index.html** annotations for drag and drop tests
* **./cat-project/src/config/cat.json** The tests configuration where the scenarios and other settings exists
  
CatJS, try me:
* Installing catjs, (in short "npm install -g catjs")
* From the command-line Go to cat-project folder
* Run: (sudo) catcli -cbas
* Go to the browser and put the address: 
    + http://localhost:8080/native/elements
    + http://localhost:8080/native/dnd    
    + http://localhost:8080/jquery/elements
    + http://localhost:8080/juery/dnd
