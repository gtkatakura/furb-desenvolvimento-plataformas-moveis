const fetch = require('node-fetch');

fetch('http://localhost:3000/auth', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    email: 'gt.katakura@gmail.com',
    password: '12345678',
    password_confirmation: '12345678'
  }),
}).then(el => el.json()).then(el => console.log(el)).catch(el => console.log(el))