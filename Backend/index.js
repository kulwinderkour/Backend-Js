require('dotenv').config()

const express = require('express')    //this is common JS and  import express from "express" this is the another ES6 method to write this line 
const app = express()   // to use the express we create a app variable
const port =4000  // these are virtual ports to listen server  is could be any thing  65536

app.get('/',(req,res) =>{     // "/" this is the home route
    res.send("Hii this is kulwinder kour")
})
//here app did a get request from the home route to listen and if any request came then do a callback 
//   req - request and res -  response for callback and this will return ("Hii this is kulwinder kour")


app.get('/twitter',(req,res) =>{
    res.send('kulwinder_kourr')
})


app.get('/login', (req,res) =>{
    res.send("<h1> Hiii follow kulwinder kour <h1> ")
})


app.get('/youtube',(req,res) =>{
    res.send("<h2>this is my new youtube channel<h2>")
})



const gitubdata={
  "login": "kulwinderkour",
  "id": 177603723,
  "node_id": "U_kgDOCpYEiw",
  "avatar_url": "https://avatars.githubusercontent.com/u/177603723?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/kulwinderkour",
  "html_url": "https://github.com/kulwinderkour",
  "followers_url": "https://api.github.com/users/kulwinderkour/followers",
  "following_url": "https://api.github.com/users/kulwinderkour/following{/other_user}",
  "gists_url": "https://api.github.com/users/kulwinderkour/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/kulwinderkour/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/kulwinderkour/subscriptions",
  "organizations_url": "https://api.github.com/users/kulwinderkour/orgs",
  "repos_url": "https://api.github.com/users/kulwinderkour/repos",
  "events_url": "https://api.github.com/users/kulwinderkour/events{/privacy}",
  "received_events_url": "https://api.github.com/users/kulwinderkour/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Kulwinder Kour",
  "company": null,
  "blog": "",
  "location": "Jammu, J&K",
  "email": null,
  "hireable": null,
  "bio": "I am a first-year Computer Science student with a deep passion for coding. I have gained proficiency in Python, C, C++, and web development.",
  "twitter_username": null,
  "public_repos": 13,
  "public_gists": 0,
  "followers": 1,
  "following": 1,
  "created_at": "2024-08-06T05:30:49Z",
  "updated_at": "2025-11-10T15:32:05Z"
}

app.get('/gitub',(req,res) =>{
    res.json(gitubdata)
})

app.listen(process.env.PORT,() =>{
    console.log(`Port is listening to ${port}`)
})  

// listen is variable 
