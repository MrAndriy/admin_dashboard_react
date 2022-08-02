const ApiError = require('../error/apiError');
const hotelService = require('../service/hotel-service');

class HotelController {
  //create Hotel
  async creteHotel(req, res, next) {
    try {
      const hotel = await hotelService.create(req.body);
      res.json(hotel);
    } catch (e) {
      next(e);
    }
  }

  //get all Hotels
  async getHotels(req, res, next) {
    try {
      const hotels = await hotelService.getAll();
      return res.json(hotels);
    } catch (e) {
      next(e);
    }
  }

  //get Hotel by Id
  async getHotel(req, res, next) {
    try {
      const { id } = req.params;
      const hotel = await hotelService.getOne(id);
      return res.json(hotel);
    } catch (e) {
      next(e);
    }
  }

  //update Hotel by Id
  async updateHotel(req, res, next) {
    try {
      const { id } = req.params;
      const updatedHotel = await hotelService.update(id, req.body);
      res.json(updatedHotel);
    } catch (e) {
      next(e);
    }
  }

  //delete Hotel by Id
  async deleteHotel(req, res, next) {
    try {
      const { id } = req.params;
      const hotel = await hotelService.delete(id);
      res.json(hotel);
    } catch (e) {
      next(e);
    }
  }

  //delete all Hotels
  async deleteHotels(req, res, next) {
    try {
      const hotels = await hotelService.deleteAll();
      return res.json(hotels);
    } catch (e) {
      next(e);
    }
  }

  //count by city
  async countByCity(req, res, next) {
    const cities = req.query.cities.split(',');
    try {
      const list = await hotelService.countByCity(cities);

      return res.json(list);
    } catch (e) {
      next(e);
    }
  }

  //count by type
  async countByType(req, res, next) {
    try {
      const list = await hotelService.countByType();
      return res.json(list);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new HotelController();
