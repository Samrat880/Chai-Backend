import express from 'express'

const app = express();

app.get('/', (req,res) => {
    res.send('Server is ready')
})

app.get('/api/jokes', (req,res) => {
    const jokes = [
        {
            id:1,
            title: 'A joke',
            content: 'This is a Joke'
        },
        {
            id:2,
            title:'2nd Joke',
            content: 'joke is joke '
        },
        {
            id:3,
            title:'3th Joke',
            content: 'joke is joke '
        },
        {
            id:4,
            title:'4th Joke',
            content: 'joke is joke '
        },
        {
            id:5,
            title:'5th Joke',
            content: 'joke is joke '
        },
        {
            id:6,
            title:'6th Joke',
            content: 'joke is joke '
        }
    ]
    res.send(jokes);
})


const port = 3000;

app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`)
})