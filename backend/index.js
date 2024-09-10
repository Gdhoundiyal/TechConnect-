// const express = require('express')
import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req, res) => {
    res.send([
      {
        "id": 1,
        "name": "Why don’t scientists trust atoms?",
        "description": "Because they make up everything!"
      },
      {
        "id": 2,
        "name": "Why did the scarecrow win an award?",
        "description": "Because he was outstanding in his field!"
      },
      {
        "id": 3,
        "name": "Why don’t skeletons fight each other?",
        "description": "They don’t have the guts."
      },
      {
        "id": 4,
        "name": "What do you call fake spaghetti?",
        "description": "An impasta!"
      },
      {
        "id": 5,
        "name": "Why was the math book sad?",
        "description": "Because it had too many problems."
      },
      {
        "id": 6,
        "name": "What’s orange and sounds like a parrot?",
        "description": "A carrot!"
      },
      {
        "id": 7,
        "name": "Why did the bicycle fall over?",
        "description": "Because it was two-tired!"
      },
      {
        "id": 8,
        "name": "Why do cows wear bells?",
        "description": "Because their horns don’t work."
      },
      {
        "id": 9,
        "name": "What do you call a dinosaur with an extensive vocabulary?",
        "description": "A thesaurus!"
      },
      {
        "id": 10,
        "name": "Why don’t some couples go to the gym?",
        "description": "Because some relationships don’t work out."
      }
    ]
    )
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})