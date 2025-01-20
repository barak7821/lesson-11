import Express from "express"
import cors from "cors"
import fs from "fs/promises"

const app = Express() // initiates a new express server
app.use(Express.json())
app.use(cors({
    origin: "*"
}))

app.use(Express.static("public"))

app.get("/", (req, res) => {
    res.sendFile("index.html", { root: "./public" })
})

app.get("/signup", (req, res) => {
    res.sendFile("signup.html", { root: "./public" })
})

app.get("/home", (req, res) => {
    res.sendFile("homepage.html", { root: "./public" })
})

const data = []

// READ
app.get("/users", (req, res) => {
    res.json(data)
})

// CREATE
app.post("/users", async (req, res) => {
    const userData = req.body
    data.push(userData)
    
    try {
        await saveUserData(userData)
    } catch (error) {
        console.error(error)
    }
})

async function saveUserData(userData) {
    try {
        const filePath = './users.txt'
        
        let data = ""
        try {
            data = await fs.readFile(filePath, 'utf8')
        } catch (error) {
            console.log(error)
        }
        
        data += `\n${JSON.stringify(userData)}`
        
        await fs.writeFile(filePath, data, 'utf8')
    } catch (error) {
        console.log(error)
    }
}

app.listen(3000, () => { // start listening on the specified port
    console.log("listening on 3000...")
})
