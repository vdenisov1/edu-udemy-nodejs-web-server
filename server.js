const express = require('express');

let app = express();

/**
 * Middleware helps you add additional configurations to process requests.
 */
app.use(express.static(`${__dirname}/public`));

app.get('/', (req, res) => {
    // res.send('<h1>Hello Express</h1>\n');
    res.send({
        name: 'Vlad',
        likes: [
            'Running',
            'Walking'
        ]
    });
});

app.get('/about', (req, res) => {
    res.send('<h1>About Page</h1>');
});

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: "Bad Request"
    });
});

app.listen(3000, () => {
    console.log('Server is up.');
});