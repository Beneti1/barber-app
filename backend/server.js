const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json()); 

const Appointment = require('./models/Appointment');

app.post('/api/termin', async (req, res) => {
    try {
        const newAppointment = new Appointment(req.body);
        await newAppointment.save();
        res.status(201).json({ message: 'Termini u ruajt me sukses!' });
    } catch (error) {
        res.status(500).json({ error: 'Gabim gjatë ruajtjes së terminit.' });
    }
});

app.get('/api/termin', async (req, res) => {
    try {
        const appointments = await Appointment.find();
        res.json(appointments);
    } catch (error) {
        res.status(500).json({ error: 'Gabim gjatë leximit të termineve.' });
    }
});

mongoose.connect('mongodb://localhost:27017/barber', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log(' Lidhja me MongoDB u krye me sukses!'))
.catch((err) => console.error(' Gabim gjatë lidhjes me MongoDB:', err));

app.get('/', (req, res) => {
    res.send('Serveri është aktiv 🚀');
});

app.listen(PORT, () => {
    console.log(` Serveri po dëgjon në http://localhost:${PORT}`);
});
