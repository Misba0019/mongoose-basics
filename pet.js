const mongoose = require('mongoose');

// async function to Connect to the DataBase
async function connectToDatabase() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/petApp');
        console.log('MongoDB connected');
    } catch (err) {
        console.error('Connection Error:', err);
    }
}

// Create a Pet Schema
const petSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 10
        // Make sure that the name is not more than 10 characters
    },
    age: {
        type: Number,
        required: true, // Form of validation
        min: [0, 'Age must be positive']
    },
    onSale: {
        type: Boolean,
        default: true
    },
    breed: {
        type: String
    },
    size: {
        type: String,
        enum: ['S', 'M', 'L']
    }
});

// Method to get a greeting from a pet
petSchema.methods.greet = function () {
    console.log('Hello, I am ' + this.name);
} // This is a method that can be used on the Pet Model

// Method to toggle the onSale status of a pet
petSchema.methods.toggleOnSale = function () {
    this.onSale = !this.onSale;
    this.save();
} // this refers to the particular Pet instance

// Static method to check if a pet is on sale
petSchema.statics.fireSale = function () {
    return this.updateMany({}, { onSale: true });
} // This is a static method that can be used on the Pet Model

//----------------------------------------------------------------------------------------

// Create a Pet Model
const Pet = mongoose.model('Pet', petSchema);

// Create Pet instances
const pet1 = new Pet({ name: 'Casper', age: 4, breed: 'Shih-tzu', size: 'S' });
const pet2 = new Pet({ name: 'Snowy', age: 2, onSale: false, breed: 'Poodle', size: 'M' });
const pet3 = new Pet({ name: 'Bella', age: 1, breed: 'Labrador', size: 'L' });

// async function for Finding All Pets
async function findAllPets() {
    try {
        const allPets = await Pet.find({});
        console.log('All Pets:', allPets);
    } catch (err) {
        console.error('Error finding pets:', err);
    }
}

// async function for Saving Pets
// async function savePets() {
//     await pet1.save();
//     await pet2.save();
//     await pet3.save();
//     console.log('Pets saved');
// }

// async function for Running the Operations
async function run() {
    await connectToDatabase();
    await Pet.fireSale().then( res => console.log(res) );
    // await pet1.greet();
    // await pet1.toggleOnSale();
    // await findAllPets();
    //    await savePets();
}

run();