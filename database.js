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
