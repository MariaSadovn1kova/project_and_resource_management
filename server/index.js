const express = require('express')
const projectRouter = require('./routes/project.routes')

const PORT = process.env.PORT || 3000

const app = express()
app.use(express.json())
app.use('/api', projectRouter)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))