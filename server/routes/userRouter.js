const Router = require('express');
const router = Router();
//controller
const userController = require('../controllers/userController');
//middleware
const { check } = require('express-validator');
const authMiddleware = require('../middleware/authMiddleware');
const checkRole = require('../middleware/checkRoleMiddleware');

/**
 *
 * caller function for global error handling
 * route all calls throught this to try and handle errors
 */
const use = (fn) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

//registration
router.post(
  '/registration',
  [
    check('email', 'Not correct email').isEmail(),
    check('password', 'Length of password must be min 6 and max 32').isLength({
      min: 6,
      max: 32,
    }),
    check('fullname', 'Enter your Full Name').exists(),
  ],
  userController.registration
);

//login
router.post(
  '/login',
  [
    check('email', 'Enter correct email').normalizeEmail().isEmail(),
    check('password', 'Length of password must be min 6 and max 32').isLength({
      min: 6,
      max: 32,
    }),
  ],

  userController.login
);

//logout
router.get('/logout', userController.logout);

//get all users
router.get('/',
//  authMiddleware, checkRole('ADMIN'),
  userController.getAllUsers);

//get user by id
router.get('/find/:id',
//  authMiddleware,
  userController.getUserById);

//update user by id
router.put('/:id',
//  authMiddleware,
  userController.updateUser);

// //delete user by id
router.delete('/:id',
//  authMiddleware,
  userController.deleteUserById);

// //delete all users
router.delete('/',
//  checkRole('ADMIN'),
  userController.deleteAllUsers);

module.exports = router;
