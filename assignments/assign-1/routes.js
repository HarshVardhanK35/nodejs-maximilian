const http = require('http')

const reqHandler = (req, res) => {

  const url = req.url
  const method = req.method

  if (url === '/') {
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>Home</title></head>')
    res.write('<body><div>Welcome!</div><div><form action="/create-user" method="POST"><label for="username">Enter your name: <input type="text" placeholder="Enter your name" name="username"/><button type="submit">Submit</button></label></form></div></body>')
    res.write('</html>')
    return res.end()
  }

  if (url === '/users') {
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>Users</title></head>')
    res.write('<body><ul><li>User 1</li></ul></body>')
    res.write('</html>')
    return res.end()
  }

  if (url === '/create-user' && method === 'POST') {

    const reqBody = []

    req.on('data', (chunk) => {
      reqBody.push(chunk)
    })

    req.on('end', () => {
      const parsedData = Buffer.concat(reqBody).toString()
      const userName = parsedData.split('=')[1]
      console.log(userName)

    })
    res.statusCode = 302
    res.setHeader('Location', '/')
    res.end()

    return
  }
  res.setHeader('Content-Type', 'text/html')
  res.write('<html>')
  res.write('<head><title>Error Page</title></head>')
  res.write('<body><h3><h1>404</h1> Not Found</h3></body>')
  res.write('</html>')
  res.end()
}

module.exports = { reqHandler }