const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.send("Home Test")
})


app.listen(3000, () => {
    console.log("Listening to PORT 3000")
})