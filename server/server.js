const express = require('express');
const path = require('path');
let app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

app.use((req, res, next) => {
    console.log(`${req.url}\n`);
    next();
})
app.use(bodyParser.urlencoded({ extended: false }));


app.post('/formsubmissions', (req, res) => {
    let object = {
        name: req.body.name,
        food: req.body.email
    }
    // fs.readFileSync('formsubmissions.json', {}, (err, data) => {
    //     console.log(err)
    // });
    fs.writeFileSync('formsubmissions.json', JSON.stringify(object), (err) => {
        console.log(err)
    });
    res.send('Thank you for submitting your Contact!');
});

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/index.html'));
// });

// app.get('/style.css', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/style.css'));
// });

// app.get('/order/:name', (req, res) => {
//     let name = req.params.name;
//     let email = req.query.email;
//     res.send(`Your name is ${name} and email is ${email}`);
// })

// <<<---- Express Takes Precedent ----->>> \\

app.use(express.static(path.join(__dirname, '../public')));

// <<<---- Express Takes Precedent ----->>> \\

app.listen(3000);