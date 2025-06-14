# Mongoose Basics

This project demonstrates basic usage of Mongoose with MongoDB in Node.js.  
It includes examples of schemas, models, instance methods, static methods, and CRUD operations.

## Technologies Used

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)

## Getting Started

### 1. Install Dependencies

```bash
npm install mongoose
```

### 2. Start MongoDB

Ensure your MongoDB server is running locally.  
If you have MongoDB installed, you can typically start it with:

```bash
mongosh
```

### 3. Run Example Scripts

To create and save example data, update the sample data as needed, then uncomment the relevant `save` or `insertMany` function calls in each script. After that, run:

```bash
node product.js
node pet.js
node person.js
node index.js
```

### 4. View Data in MongoDB Shell

Open the MongoDB shell:

```bash
mongosh
```

Switch to the appropriate database and view your data:

```bash
use shopApp      # for products
db.products.find().pretty()

use petsApp      # for pets
db.pets.find().pretty()

use personApp    # for people
db.people.find().pretty()

use movieApp     # for movies
db.movies.find().pretty()
```

### 5. Experiment

You can also experiment with the instance and static methods defined in each file by calling them in

## Project Structure

- `product.js` – Product schema and model example
- `pet.js` – Pet schema with instance and static methods
- `person.js` – Person schema example
- `index.js` – Movie schema example

## Feedback ⭐️ 
If you like this project, consider starring the repo to show your support! 

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.