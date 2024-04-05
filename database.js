const mongoose = require('mongoose');

const connectToDb = async () => await mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log("Successfully Connected to Database."))
.catch(err => {
    console.log(err);
});

module.exports = connectToDb;