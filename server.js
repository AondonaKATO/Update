const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000; // Set your desired port number

// Mock user data (replace with a database in a real application)
const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' }
];

app.use(bodyParser.json());

app.use(express.static(__dirname));

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        res.json({ success: true });
    } else {
        res.status(401).json({ success: false });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${127.0.0.1:5500}`);
});
