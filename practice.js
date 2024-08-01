const http = require('http');
const fs = require('fs')

const server = http.createServer((req, res) => {

  const url = req.url
  const method = req.method

  if (url === '/') {
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>Home</title></head>')
    res.write('<body><div>Hi welcome!</div><div><form action="/create-user" method="POST"><label for="username"> Enter your name: <input type="text" placeholder="Enter your name" name="username"/><button type="submit">Submit</button></label></form></div></body>')
    res.write('</html>')
    return res.end()

  }

  if (url === '/create-user' && method === 'POST') {

    const reqBody = []

    req.on('data', (chunk) => {
      // console.log(chunk)
      reqBody.push(chunk)
    })

    req.on('end', () => {
      const parsedData = Buffer.concat(reqBody).toString()
      console.log(parsedData)

      fs.writeFile('message.txt', parsedData, (err) => {
        res.statusCode = 302
        res.setHeader('location', '/')
        return res.end()
      })
    })
    return
  }

  res.setHeader('Content-Type', 'text/html')
  res.write('<html>')
  res.write('<head><title>1st Page</title></head>')
  res.write('<body><div><h3><h1>404</h1> Not Found</h3></div></body>')
  res.write('</html>')
  res.end()
})

server.listen(3000, ()=> {
  console.log(`server up and running on: http://localhost:3000/`)
})