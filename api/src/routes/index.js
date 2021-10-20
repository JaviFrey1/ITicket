const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const events = require('./events');
const event = require('./event');
const categories = require('./categories');
const subcategories = require('./subcategories');
const bulkevents = require ('./bulkevents');
const filter = require('./filter');
const google = require('./google');
const login = require('./login');
const users = require('./users');
const mercadopago = require('./mercadopago');
const tickets = require('./tickets');
const recommended = require('./recommended');
const paypal = require('./paypal');
const resetPass = require('./resetPassword');
const stats = require('./stats');
const confirmPass = require('./confirmPassword');
const forgotPass = require('./forgotPassword');
const checkPass = require('./checkPassword')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/events', events );
router.use('/bulkevents', bulkevents );


router.use('/categories', categories);
router.use('/subcategories', subcategories);
router.use('/event', event);
router.use('/filter', filter);
router.use('/users', users);
router.use('/tickets', tickets);
router.use('/recommended', recommended);
router.use('/password', resetPass);
router.use('/stats', stats);
router.use('/confirm', confirmPass);
router.use('/forgot', forgotPass);
router.use('/confirmForgot', confirmPass);
router.use('/checkPass', checkPass);


router.use('/', google);

router.use('/', login);

router.use('/', mercadopago);

router.use('/', paypal);

module.exports = router
    
