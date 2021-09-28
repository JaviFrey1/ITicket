const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const pokemons = require('./pokemon.js');
const types = require('./type.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/pokemon', pokemons);
router.use('/type', types);


module.exports = router;
