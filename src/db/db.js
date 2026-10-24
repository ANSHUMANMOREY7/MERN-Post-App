const mongoose = require('mongoose')

async function connectDB() {
    
await mongoose.connect("mongodb+srv://anshumanmorey2_db_user:Morey123@backendpractice.15qrqwz.mongodb.net/PROJECT-1")
console.log('connected to DB 🟢')
}

module.exports= connectDB

