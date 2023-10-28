const mongoose = require('mongoose')

const connectDb = handler => async (req, res) => {
    if (mongoose.connections[0].readyState) {
        return handler(req, res)
    }
    await mongoose.connect("mongodb+srv://zbytes1:6grjM4LDiPxifCxC@cluster0.wjnraoh.mongodb.net/?retryWrites=true&w=majority")
    return handler(req, res)
}
export default connectDb;