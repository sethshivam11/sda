const require("mongoose");
const MONGODB_URL = process.env;

exports.connect = () => {
  mongoose.connect(MONGODB_URL , {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
