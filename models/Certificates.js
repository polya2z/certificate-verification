const mongoose = require('mongoose')

const CertificateSchema = new mongoose.Schema({
    studentName: { type: String, required: true },
    certificateId: { type: String, required: true, unique: true },
    issueDate: { type: String, required: true },
    studentCollege: { type: String, required: true },
}, { timestamps: true });

mongoose.models = {}
export default mongoose.model("Certificates", CertificateSchema)