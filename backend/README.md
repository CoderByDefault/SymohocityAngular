# symphocity_eu_backend

## Steps to create Database Setup & finally start the Server
1. Install CouchDB
2. navigate to http://127.0.0.1:5984/_utils/ in your browser
3. create an account for "admin:ecue"
4. create an database called "sympholight"
5. (Optional) create a JSON User by UserSchema defined in ./src/backend/models/user.model & add "loopback__model__name": "User" & insert in that DB
5. npm start

right now you to use cURL or Postman to make an Authenticated Request with Token


