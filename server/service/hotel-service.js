const ApiError = require('../error/ApiError');
const Hotel = require('../models/hotel');

class HotelService {
  async create(newHotel) {
    //check if hotel with this name exists
    const hotelWithThisName = await Hotel.findOne({ name: newHotel.name });
    if (!!hotelWithThisName) {
      throw ApiError.BadRequest('Hotel with this name already exists');
    }
    const hotel = await Hotel.create(newHotel);
    return newHotel;
  }

  async getAll() {
    const hotels = await Hotel.find();
    if (!hotels) {
      throw ApiError.NotFound('No hotels found');
    }
    return hotels;
  }

  async getOne(id) {
    const hotel = await Hotel.findById(id);
    if (!hotel) {
      throw ApiError.NotFound('Hotel not found');
    }
    return hotel;
  }

  async update(id, updHotel) {
    //check if hotel exists
    if (Object.keys(updHotel).length === 0) {
      throw ApiError.BadRequest('Enter data of hotel');
    }

    const hotel = await Hotel.findById(id);
    if (!hotel) {
      throw ApiError.NotFound('Hotel not found');
    }

    //check if hotel with this name exists
    const hotelWithThisName = await Hotel.findOne({ name: updHotel.name });
    if (hotelWithThisName && hotelWithThisName._id != id) {
      throw ApiError.BadRequest('Hotel with this name already exists');
    }
    const updatedHotel = await Hotel.findByIdAndUpdate(id, updHotel, {
      new: true,
    });
    return updatedHotel;
  }

  async delete(id) {
    const hotel = await Hotel.findByIdAndDelete(id);
    if (!hotel) {
      throw ApiError.NotFound('Hotel not found');
    }
    return hotel;
  }

  async deleteAll() {
    const hotels = await Hotel.deleteMany();
    if (!hotels) {
      throw ApiError.NotFound('No hotels found');
    }
    return hotels;
  }

  async countByCity(cities) {
    const list = await Promise.all(
      cities.map(async (city) => {
        const hotel = await Hotel.find({ city });
        return { city, count: hotel.length };
      })
    );
    return list;
  }

  async countByType() {
    const list = await Hotel.aggregate([
      { $group: { _id: '$type', count: { $sum: 1 } } },
    ]);
    return list;
  }
}

module.exports = new HotelService();
