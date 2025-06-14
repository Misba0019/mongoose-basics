const mongoose = require('mongoose');

async function connectToDatabase() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/shopApp');
        console.log('MongoDB connected');
    } catch (err) {
        console.error('Connection Error:', err);
    }
}
connectToDatabase(); // Connecting to MongoDB in that Mongo server

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        // This will make sure that the name is required
        maxlength: 20
        // This will make sure that the name is not more than 20 characters
    },
    price: {
        type: Number,
        required: true, // Form of validation
        min: [0, 'Price must be positive']
        // This message will be shown if the price is less than 0
    },
    onSale: {
        type: Boolean,
        default: false
        // Default value
    },
    categories: {
        type: [String]
        // Array of Strings
    },
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    },
    size: {
        type: String,
        enum: ['S', 'M', 'L']
        // The enum validation will make sure that the size is one of these
    }
});
// Defined a Product Schema.
// - Constraints and Validations are more common to use in the Schema

const Product = mongoose.model('Product', productSchema);
// Capital letter in the start of the Model

const bike = new Product( {name: 'Cycling Jersey', price: '299', color: 'blue', categories: ['Cycling', 123 ], size: 'S' } )
// Creating a new Product
// - The number will be turned into a string
// - The color is not defined in the Schema, so it will not be saved in the database
// - The size has enum, so it will be saved in the database

// bike.save() // Saving the data in the database
// .then(data => {
//     console.log("It Worked");
//     console.log(data);
// })
// .catch(err => {
//     console.log("Oh No Error!");
//     console.log(err);
// }) // Promise

// Here, we're creating a new Product and saving it in the database
// - The color is not defined in the Schema, so it will not be saved in the database
// - The save() method is used to save the document in the db. Returns a Promise.

// Use db.products.find() to find all products in the DataBase.