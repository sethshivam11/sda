const mongoose = require("mongoose");
const { MONGODB_URL } = process.env;

console.log(MONGODB_URL)

exports.connect = () => {
    mongoose.set("strictQuery", false);
    mongoose.connect(MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then()
    .catch((error) => {
        console.log(error);
    });
}
    var contactSchema = new mongoose.Schema({
        name: String,
        phone: String,
        email: String,
        address: String,
        desc: String
    });
    //model for schema
    var Contact = mongoose.model('Contact', contactSchema);