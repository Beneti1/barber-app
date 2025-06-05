
const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    emri: { type: String, required: true },
    data: { type: String, required: true },
    ora: { type: String, required: true },
    telefoni: { type: String },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Appointment', appointmentSchema);
