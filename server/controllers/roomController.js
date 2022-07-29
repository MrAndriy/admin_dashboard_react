const roomService = require('../service/room-service');

class RoomController {
  //create a new room
  async createRoom(req, res, next) {
    const { hotelId } = req.params;
    const newRoom = new Room(req.body);
    try {
      const room = await roomService.create(newRoom, hotelId);
      return res.json(savedRoom);
    } catch (e) {
      next(e);
    }
  }

  //get all rooms
  getAllRooms = async (req, res, next) => {
    try {
      const rooms = await roomService.getAll();
      res.json(rooms);
    } catch (e) {
      next(e);
    }
  };

  //get a room
  getRoom = async (req, res, next) => {
    const { roomId } = req.params;
    try {
      const room = await roomService.getOne(roomId);
      res.json(room);
    } catch (e) {
      next(e);
    }
  };

  //update a room
  updateRoom = async (req, res, next) => {
    const { roomId } = req.params;
    try {
      const room = await roomService.update(roomId, req.body);
      res.json(room);
    } catch (e) {
      next(e);
    }
  };

  //delete a room
  deleteRoom = async (req, res, next) => {
    const hotelId = req.params.hotelId;
    const roomId = req.params.roomId;
    try {
      const room = await roomService.delete(hotelId, roomId);
      res.json(room);
    } catch (e) {
      next(e);
    }
  };

  //delete all rooms
  deleteAllRooms = async (req, res, next) => {
    try {
      const rooms = await roomService.deleteAll();
      res.json(rooms);
    } catch (e) {
      next(e);
    }
  };
}

module.exports = new RoomController();
