const Room = require('../models/room');
const Hotel = require('../models/hotel');

class RoomController {
  //create a new room
  async createRoom(req, res, next) {
    const { hotelId } = req.params;
    const newRoom = new Room(req.body);
    try {
      const hotel = await Hotel.findById(hotelId);
      if (!hotel) {
        return res.status(404).json({
          message: 'Hotel not found',
        });
      }
      //check if room already exists
      const room = await Room.findOne({
        title: newRoom.title,
        hotel: hotelId,
      });
      //check if each roomNumber is already exists
      const roomNumber = await Room.findOne({
        roomNumbers: newRoom.roomNumbers,
        hotel: hotelId,
      });

      if (room || roomNumber) {
        return res.status(400).json({
          message: `${
            room
              ? 'Room with this title  already exists'
              : 'Room with this roomNumber already exists'
          }`,
        });
      }
      //save room
      const savedRoom = await newRoom.save();
      await Hotel.findByIdAndUpdate(hotelId, {
        $push: { rooms: savedRoom._id },
      });
      return res.status(201).json(savedRoom);
    } catch (error) {
      next(error.message);
    }
  }

  //get all rooms
  getAllRooms = async (req, res, next) => {
    try {
      const rooms = await Room.find();
      //check if rooms exist
      if (!rooms) {
        return res.status(404).json({
          message: 'Rooms not found',
        });
      }
      res.status(200).json(rooms);
    } catch (error) {
      next(error);
    }
  };

  //get a room
  getRoom = async (req, res, next) => {
    const { roomId } = req.params;
    try {
      //check if room exists
      const room = await Room.findById(roomId);
      if (!room) {
        return res.status(404).json({
          message: 'Room not found',
        });
      }
      res.status(200).json(room);
    } catch (error) {
      next(error);
    }
  };

  //update a room
  updateRoom = async (req, res, next) => {
    const { roomId } = req.params;
    const { title, roomNumbers } = req.body;
    try {
      //check if room exists
      const room = await Room.findById(roomId);
      if (!room) {
        return res.status(404).json({
          message: 'Room not found',
        });
      }
      //check if room exists
      if (Object.keys(req.body).length === 0) {
        return res.status(400).json({
          message: 'Enter data of hotel',
        });
      }
      //check if room with this title  or number exists
      const roomWithThisNumber = await Room.findOne({ roomNumbers });
      const roomWithThisTitle = await Room.findOne({ title });
      if (roomWithThisTitle || roomWithThisNumber) {
        return res.status(400).json({
          message: `Room with this ${
            roomWithThisNumber ? 'number' : 'title'
          } already exists`,
        });
      }
      //update room
      const updatedRoom = await Room.findByIdAndUpdate(roomId, req.body, {
        new: true,
      });
      res.status(200).json(updatedRoom);
    } catch (error) {
      next(error);
    }
  };

  //delete a room
  deleteRoom = async (req, res, next) => {
    const hotelId = req.params.hotelId;
    const roomId = req.params.roomId;
    try {
      //check if room exists
      const room = await Room.findById(roomId);
      if (!room) {
        return res.status(404).json({
          message: 'Room not found',
        });
      }
      //delete room
      const deletedRoom = await Room.findByIdAndDelete(roomId);
      //delete room from hotel
      const hotel = await Hotel.find({ rooms: roomId });
      await Hotel.findByIdAndUpdate(hotel, {
        $pull: { rooms: roomId },
      });
      res.status(200).json(deletedRoom);
    } catch (error) {
      next(error);
    }
  };
}

module.exports = new RoomController();
