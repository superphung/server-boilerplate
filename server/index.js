import app from './app'

app.get('/', async (req, res) => {
  res.send('Hello world')
})

app.listen(3000)
