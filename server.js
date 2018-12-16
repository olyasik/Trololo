const express = require('express');
const app = express();
const port = process.env.PORT || 3002;

app.get(`/TickleTrololo`, (req, res) => {
    res.send(`Trololo got request from ${JSON.stringify(req.headers)}`);
});

app.listen(port, () => {
    console.log(`Trololo is listening on port ${port}`);
})

