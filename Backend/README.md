### Step 1: CREATE npm init 
this will intialise the npm and create package.json
now change the 
scripts:{
    "starts": "node index.js"
} 
in the package.json


### Step 2: npm install express
how to check weather express is installed or not check json in the dependencies there express version will show 


### Step 3: how to print hello world
check code in index.js
and the 1st line of index.js is 
"require('dotenv').config()"

this is the dotenv where we dont want to share some to information or we have to share gllobaly that everyone can use this there we use the file -> .env    
(npm install dotenv)



and the rest code is to do the call from different functions like  /login, /twitter , /youtube 
if you run this localhost:3000 on your local the callback message will respond



### Step 4: HOW TO DEPLOY

There are different platforms to deploy but they all are paid or if you see any platfrom that is unpaid it will also start paying after one month or one week
BELOw is the list of all paid platforms
1. digitalocean
2. heroku
3. railway
4. seenode
5. render
6. cyclic.sh
7. aws



### Step 5: what is gitignore
write those names of the files which we dont want to push on the github 
like node_modules , .env(specially) this contains sometimes sensitive information
