const Hotel = require('../models/hotel');
const ApiError = require('../error/apiError');

class HotelController {
  //create Hotel
  async creteHotel(req, res, next) {
    try {
      //check if hotel with this name exists
      const hotelWithThisName = await Hotel.findOne({ name: req.body.name });
      if (!!hotelWithThisName) {
        return res
          .status(404)
          .json({ message: 'Hotel with this name already exists' });
      }
      const hotel = await Hotel.create(req.body);
      res.send(hotel);
    } catch (e) {
      return res.status(500).json({ message: e.message });
    }
  }

  //get all Hotels
  async getHotels(req, res, next) {
    try {
      const hotels = await Hotel.find();
      if (!hotels) {
        return res.status(404).json({
          message: 'No hotels found',
        });
      }
      return res.status(200).json({
        //count how much hotels in db and send it to frontend
        message: `${hotels.length}  ${
          hotels.length == 1 ? 'hotel' : 'hotels'
        } found`,
        hotels,
      });
    } catch (e) {
      return res.status(500).json({ message: e.message });
    }
  }

  //get Hotel by Id
  async getHotel(req, res, next) {
    try {
      const { id } = req.params;
      const hotel = await Hotel.findById(id);
      //check if hotel exists
      if (!hotel) {
        return res.status(404).json({
          message: `Hotel with id ${id} not found`,
        });
      }
      return res.status(200).json({
        message: 'Hotel found',
        hotel,
      });
    } catch (e) {
      return res.status(500).json({ message: e.message });
    }
  }

  //update Hotel by Id
  async updateHotel(req, res, next) {
    try {
      const { id } = req.params;
      //check if hotel exists
      if (Object.keys(req.body).length === 0) {
        return res.status(400).json({
          message: 'Enter data of hotel',
        });
      }
      const hotel = await Hotel.findById(id);
      if (!hotel) {
        return res.status(404).json({
          message: 'Hotel not found',
        });
      }
      //check if hotel with this name exists
      const hotelWithThisName = await Hotel.findOne({ name: req.body.name });
      if (hotelWithThisName && hotelWithThisName._id != id) {
        return res
          .status(404)
          .json({ message: 'Hotel with this name already exists' });
      }
      //update hotel
      const updatedHotel = await Hotel.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res
        .status(200)
        .json({ message: 'Hotel updated successfully', updatedHotel });
    } catch (e) {
      return res.status(500).json({ message: e.message });
    }
  }

  //delete Hotel by Id
  async deleteHotel(req, res, next) {
    try {
      const { id } = req.params;
      const hotel = await Hotel.findByIdAndDelete(id);
      if (!hotel) {
        return res.status(404).json({
          message: 'Hotel not found',
        });
      }
      res.status(200).json({ message: 'Hotel deleted successfully', hotel });
    } catch (e) {
      return res.status(500).json({ message: e.message });
    }
  }

  //delete all Hotels
  async deleteHotels(req, res, next) {
    try {
      const hotels = await Hotel.deleteMany();
      return res.status(200).json({
        message: `${hotels.length} ${
          hotels.length == 1 ? 'hotel' : 'hotels'
        } deleted successfully`,
        hotels,
      });
    } catch (e) {
      return res.status(500).json({ message: e.message });
    }
  }

  //count by city
  async countByCity(req, res, next) {
    const cities = req.query.cities.split(',');
    try {
      const list = await Promise.all(
        cities.map((city) => {
          return Hotel.countDocuments({ city: city });
        })
      );

      return res.status(200).json({ list });
    } catch (e) {
      return res.status(500).json({ message: e.message });
    }
  }

  //count by type
  async countByType(req, res, next) {
    try {
      const hotelCount = await Hotel.countDocuments({ type: 'Hotel' });
      const apartmentCount = await Hotel.countDocuments({ type: 'Apartment' });
      const resortCount = await Hotel.countDocuments({ type: 'Resort' });
      const villaCount = await Hotel.countDocuments({ type: 'Villa' });
      const cabinCount = await Hotel.countDocuments({ type: 'Cabin' });

      res.status(200).json([
        { type: 'hotels', count: hotelCount },
        { type: 'apartments', count: apartmentCount },
        { type: 'resorts', count: resortCount },
        { type: 'vallas', count: villaCount },
        { type: 'cabins', count: cabinCount },
      ]);
    } catch (e) {
      return res.status(500).json({ message: e.message });
    }
  }
}

module.exports = new HotelController();
