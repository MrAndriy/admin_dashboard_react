const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    // hotel: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: 'Hotel',
    //   required: true,
    // },
    price: { type: Number, required: true },
    desc: { type: String, required: true },
    maxPeople: { type: Number, required: true },
    roomNumbers: {
      type: Array,
      default: [],
      number: Number,
      unavailebleDates: { type: [Date] },
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.models.Room || mongoose.model('Room', RoomSchema);
