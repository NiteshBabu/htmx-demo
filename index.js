import express from "express";
import cors from "cors";

const app = express();

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use(cors())

app.get("/users", async (req, res) => {
    const resp = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await resp.json()
    res.send(users)
})

app.get("/check", async (req, res) => {
    const {email, mobile} = req.query

    const regxEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
    const regxMobile = /^(\+91|\+91\-|0)?[789]\d{9}$/

    if (email) {
        if (!regxEmail.test(email)) {
            res.send("This is wrong !")
        }
        else {
            res.send("Looks good 😇")
        }
    }

    if (mobile) {
        if (!regxMobile.test(mobile)) {
            res.send("This is wrong !")
        }
        else {
            res.send("Looks good 😇")
        }
    }
})

app.listen(3000, () => console.log("Listening on Port 3000!"))