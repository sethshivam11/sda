const mongoose = require("mongoose");
const { MONGODB_URL } = process.env;

exports.connect = () => {
    mongoose.set("strictQuery", false);
    mongoose.connect(MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}
