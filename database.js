const require("mongoose");
const MONGODB_URL = process.env;

exports.connect = () => {
  mongoose.connect(MONGODB_URL , {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
var contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
    desc: String
});
//model for schema
var Contact = mongoose.model('Contact', contactSchema);
