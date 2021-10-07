const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const events = require('./events');
const event = require('./event');
const categories = require('./categories');
const subcategories = require('./subCategories');
const bulkevents = require ('./bulkevents')
const filter = require('./filter')




const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/events', events );
router.use('/bulkevents', bulkevents );



router.use('/categories', categories);
router.use('/subcategories', subcategories);
router.use('/event',event );
router.use('/filter', filter)




module.exports = router;
