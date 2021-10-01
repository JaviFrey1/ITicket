const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const events = require('./events.js');
const event = require('./event.js');
const categories = require('./categories.js');
const subcategories = require('./subCategories.js');




const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/events', events );
router.use('/categories', categories);
router.use('/subcategories', subcategories);
router.use('/event',event );




module.exports = router;
