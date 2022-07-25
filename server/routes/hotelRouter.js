const Router = require('express');
const router = Router();

//controller
const hotelController = require('../controllers/hotelController');
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware');

//routes

//create hotel
router.post('/',
//  checkRoleMiddleware('ADMIN'),
  hotelController.creteHotel);

//get hotel by id
router.get('/find/:id', hotelController.getHotel);

//get all hotels
router.get('/', hotelController.getHotels);

//update hotel by id
router.put('/:id',
//  checkRoleMiddleware('ADMIN'),
  hotelController.updateHotel);

//delete hotel by id
router.delete(
  '/:id',
  checkRoleMiddleware('ADMIN'),
  hotelController.deleteHotel
);

//delete all hotels
router.delete('/', checkRoleMiddleware('ADMIN'), hotelController.deleteHotels);

//count by city
router.get('/countByCity', hotelController.countByCity);

//count by type
router.get('/countByType', hotelController.countByType);

module.exports = router;
