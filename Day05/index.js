import express from 'express'

const app = express();

const port = 3000;

//middleware
app.use(express.json())

// Routes
app.get('/', (req, res) => {
    res.send("<h1>Kesa hai sher mera</h1>");
})



// Server start
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})