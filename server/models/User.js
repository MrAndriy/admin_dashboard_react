const { default: mongoose } = require('mongoose');

const userSchema = new mongoose.Schema({
  fullname: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  country: { type: String, required: true },
  img: { type: String },
  city: { type: String, required: true },
  phone: { type: String, required: true },
  role: { type: String, default: 'USER' },
  created: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', userSchema);
