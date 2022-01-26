# UH - CIS4439 - Class Project
## Hightlights
The group has selected to work with Bread of Life (Option B) for the class project. This project consists of a full-stack web app using Node, Express, Vue, and MongoDB. 

## Members: 
- Thomas Peters 
- Noah Hendricks
- Muhib Maknojia


Package.JSON
{
  "name": "backend",
  "version": "0.0.0",
  "author": "CIS 43339 Group 16",
  "description": "Thomas Peters, Noah Hendricks,Muhib Maknojia",
  "license": "MIT",
  "main": "app.js",
  "scripts": {
    "startdev": "nodemon .bin/www",
    "start": "node .bin/www"
  },
  "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^10.0.0",
    "express": "^4.17.1",
    "mongoose": "^6.0.8",
    "morgan": "^1.10.0"
  }
}



Run Full Stack Project
1. cd backend
2. npm install dependencies
3. npm start

mongoshell
1. use Bread_of_Life
2. var collectionList = ["Additional_Support_Services", "Applicant_Information", "Events", "External_Resources", "History"];
   collectionList.forEach(function(collectionName) {db.createCollection(collectionName)})
