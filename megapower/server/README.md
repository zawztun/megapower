1. yarn init 
2. yarn add json-server 
3. create db.json   
4. you have to add start your script in json file =>
"scripts": { "start": "json-server -p3005 -w db.json" },
5. yarn start on server // server will run on port 3005 


** frontend engineer have to http request from endpoint
http://localhost:3005/users 

