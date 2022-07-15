const Router = require('express');
const router = Router();

const checkRole = require('../middleware/checkRoleMiddleware');
const roomController = require('../controllers/roomController');

//create
router.post('/:hotelId', checkRole('ADMIN'), roomController.createRoom);

//get all
router.get('/', roomController.getAllRooms);

//get one
router.get('/:roomId', roomController.getRoom);

//update
router.put('/:roomId', checkRole('ADMIN'), roomController.updateRoom);

//delete
router.delete('/:roomId', checkRole('ADMIN'), roomController.deleteRoom);

module.exports = router;
