import express from 'express';

const app = express();

const PORT = 3000;

app.use(express.urlencoded({extended: true}));

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home')
});

app.post('/submit', (req, res) => {
    const newPost = {
        author: req.body.author,
        title: req.body.title,
        content: req.body.content
    }

    console.log(newPost);

    res.render('confirmation', { post: newPost });
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${3000}`);
})