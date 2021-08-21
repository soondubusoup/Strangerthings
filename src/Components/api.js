fetch('https://strangers-things.herokuapp.com/api/2105-SJS-RM-WEB-PT/', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer TOKEN_STRING_HERE'
  },
  body: JSON.stringify({ /* whatever things you need to send to the API */ })
})