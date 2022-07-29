const ApiError = require('../error/apiError');
const Room = require('../models/room');
const Hotel = require('../models/hotel');

class RoomService {
  async create(newRoom, hotelId) {
    const hotel = await Hotel.findById(hotelId);
    if (!hotel) {
      throw ApiError.NotFound('Hotel not found');
    }
    //check if room with this title exists
    const roomWithThisTitle = await Room.findOne({
      title: newRoom.title,
      hotel: hotelId,
    });
    if (!!roomWithThisTitle) {
      throw ApiError.BadRequest('Room with this title already exists');
    }
    //check if room with this roomNumber exists
    const roomWithThisRoomNumber = await Room.findOne({
      roomNumbers: newRoom.roomNumbers,
      hotel: hotelId,
    });
    if (!!roomWithThisRoomNumber) {
      throw ApiError.BadRequest('Room with this room number already exists');
    }

    const room = await Room.create(newRoom);
    await Hotel.findByIdAndUpdate(hotelId, {
      $push: { rooms: room._id },
    });
    return room;
  }

  async getAll() {
    const rooms = await Room.find();
    //check if rooms exists
    if (!rooms) {
      throw ApiError.NotFound('No rooms found');
    }
    return rooms;
  }

  async getOne(id) {
    const room = await Room.findById(id);
    //check if room exists
    if (!room) {
      throw ApiError.NotFound('Room not found');
    }
    return room;
  }

  async update(id, updRoom) {
    //check if room exists
    if (Object.keys(updRoom).length === 0) {
      throw ApiError.BadRequest('Enter data of room');
    }

    const room = await Room.findById(id);
    if (!room) {
      throw ApiError.NotFound('Room not found');
    }

    //check if room with this title exists
    const roomWithThisTitle = await Room.findOne({
      title: updRoom.title,
    });
    if (roomWithThisTitle && roomWithThisTitle._id != id) {
      throw ApiError.BadRequest('Room with this title already exists');
    }
    //check if room with this roomNumber exists
    const roomWithThisRoomNumber = await Room.findOne({
      roomNumbers: updRoom.roomNumbers,
    });
    if (roomWithThisRoomNumber && roomWithThisRoomNumber._id != id) {
      throw ApiError.BadRequest('Room with this room number already exists');
    }

    const updatedRoom = await Room.findByIdAndUpdate(id, updRoom, {
      new: true,
    });
    return updatedRoom;
  }

  async delete(hotelId, roomId) {
    const room = await Room.findByIdAndDelete(roomId);
    //check if room exists
    if (!room) {
      throw ApiError.NotFound('Room not found');
    }

    await Hotel.findByIdAndUpdate(hotelId, {
      $pull: { rooms: roomId },
    });
    return room;
  }

  async deleteAll() {
    const rooms = await Room.deleteMany();
    //check if rooms exists
    if (!rooms) {
      throw ApiError.NotFound('No rooms found');
    }
    return rooms;
  }
}

module.exports = new RoomService();
