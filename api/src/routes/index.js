const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const events = require('./events.js');
const event = require('./event.js');
const categories = require('./categories.js');
const subcategories = require('./subCategories.js');
const bulkevents = require ('./bulkevents.js');
const filter = require('./filter.js');
const google = require('./google.js');
const login = require('./login.js');
const users = require('./users.js');
const mercadopago = require('./mercadopago.js');
const tickets = require('./tickets.js');
const recommended = require('./recommended');
const paypal = require('./paypal')

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

router.use('/', google);

router.use('/', login);

router.use('/', mercadopago);

router.use('/', paypal);

module.exports = router;
