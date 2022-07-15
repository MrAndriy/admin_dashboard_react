const { default: mongoose } = require('mongoose');
const { Schema, model } = require('mongoose');

const userSchema = new Schema({
	fullname: { type: String, required: true, unique: true },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	role: { type: String, default: 'USER' },
	created: { type: Date, default: Date.now },
});

module.exports = mongoose.models.User || model('User', userSchema);
