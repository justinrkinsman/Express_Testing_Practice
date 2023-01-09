const mongoose = require('mongoose')

const mongoDb = `mongodb+srv://justinAPI:justinAPIPassword@cluster0.anvsmwy.mongodb.net/blog_api_database?retryWrites=true&w=majority`

mongoose.connect(mongoDb, { useNewUrlParser: true })
const db = mongoose.connection
db.on("error", console.error.bind(console, "mongo connection error"))