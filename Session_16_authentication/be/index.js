const express = require('express');
const jwt = require('jsonwebtoken');

const cors = require('cors');


const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
}));
app.use(express.json())
const users = [
    { id: 1, username: "alice", password: "123456", photoUrl: "url" }
];

app.get('/hello', (req, res) => {
    res.send("world");
})
app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find(u => u.username === username && u.password === password);
    if (!user) {
        res.status(401).send("Wrong username or password")
        return;
    }

    const token = jwt.sign(
        {
            username: user.username,
        },
        "MY_SECRET_KEY",
        {
            expiresIn: 60,
        });
    res.json({
        user: {
            username: user.username, photoUrl: user.photoUrl
        },
        token: token,
    })
})

app.get('/me', (req, res) => {
    const token = req.headers.authorization;
    if (!token) {
        res.status(401).send("JWT missing");
        return;
    }
    const jwtString = token.split(" ")[1];
    jwt.verify(jwtString, "MY_SECRET_KEY", (err, decoded) => {
        console.log(err)
        if (err) {
            res.status(401).send("invalid jwt")
        }
        else {
            const username = decoded.username;
            const user = users.find((u) => u.username === username);
            if (user) {
                res.json({
                    username: user.username, photoUrl: user.photoUrl
                })
            }
            else {
                res.status(401).send("User not found")
            }
        }
    })
})

app.get('/students', (req, res) => {
    if (!req.headers.authorization) {
        res.status(401).send("JWT missing");
    }
    else {
        res.json([{ id: 1, username: "alice" }])
    }
})
app.listen(5000, () => {
    console.log("App is running at 5000")
})