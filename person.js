const mongoose = require('mongoose');

async function connectToDatabase() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/personApp');
        console.log('MongoDB connected');
    } catch (err) {
        console.error('Connection Error:', err);
    }
}
connectToDatabase();
// Connecting to MongoDB in that Mongo server

const personSchema = new mongoose.Schema({
    first: {
        type: String,
        required: true,
        maxlength: 5
    },
    last: {
        type: String,
        required: true,
        // Form of validation
    }
})

personSchema.virtual('fullName').get(function(){
    return `${this.first} ${this.last}`
})

personSchema.pre('save', async function() {
    this.first = this.first.toUpperCase();
    // This will save first name in uppercase no matter what
    this.last = this.last.toUpperCase();
    // This will save the last name in uppercase
    console.log('About to save!');
})
// This is a middleware that will run before saving the document

personSchema.post('save', async function () {
    console.log('Just saved!');
})
// This is a middleware that will run after saving the document

const Person = mongoose.model('Person', personSchema);
// Create a Person Model