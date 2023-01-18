const express = require('express')
const projectRouter = require('./routes/project.routes')
const cors = require('cors') 

const PORT = process.env.PORT || 3000

const app = express()
app.use(cors ({
    origin: "http://localhost:8080"
}))

app.use(express.json())
app.use('/api', projectRouter)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))