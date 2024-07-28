const fs = require('fs')

const reqHandler = (req, res) => {
  const url = req.url
  const method = req.method
  if (url === '/') {
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>Response</title></head>')
    res.write('<body><form action="/message" method="POST"><label for="message">Enter a message: <input type="text" name="message"><button type="submit">submit</button></label></form></body>')
    res.write('</html>')
    return res.end()
  }
  if (url === '/message' && method === 'POST') {
    const reqBody = []
    req.on('data', (chunk) => {
      // console.log(chunk)
      reqBody.push(chunk)
    })
    req.on('end', () => {
      const parsedBody = Buffer.concat(reqBody).toString()
      const message = parsedBody.split('=')[1]
      fs.writeFile('message.txt', message, (err) => {
        res.statusCode = 302
        res.setHeader('Location', '/')
        return res.end()
      })
    })
    return;
  }
  res.setHeader('Content-Type', 'text/html')
  res.write('<html>')
  res.write('<head><title>1st Page</title></head>')
  res.write('<body><h1>Error: 404 not found</h1></body>')
  res.write('</html>')
  res.end()
}

module.exports = reqHandler