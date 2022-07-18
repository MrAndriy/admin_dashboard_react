const { Router } = require('express');
const router = new Router();
const userRouter = require('./userRouter');
const hotelRouter = require('./hotelRouter');
const roomRouter = require('./roomRouter');

router.use('/users', userRouter);
router.use('/hotels', hotelRouter);
router.use('/rooms', roomRouter);

module.exports = router;
