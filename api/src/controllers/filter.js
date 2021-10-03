const { Events, Categories, SubCategories } = require('../db');


async function dataParseada(){
    const dataBase = await Events.findAll({
        include: [
          {
            model: Categories,
            through: {
              attributes: [],
            },
          },

          {
            model: SubCategories,
            through: {
              attributes: [],
            },
          },
        ],
      });
      if (dataBase.length > 0) {
        const eventDb = dataBase.map((result) => {
          return {
            name: result.name,
            id: result.id,
            category: result.categories.map((cat) => cat.id),
            subCategories: result.subCategories,
            artist: result.artist,
            place: result.place,
            address: result.address,
            image: result.image,
            price: result.price,
            availableTickets: result.availableTickets,
            date: result.date,
            time: result.time,
            isImportant:result.isImportant
          };
        });
        console.log(eventDb)
    return eventDb;
    }
}


async function filtroCategories (req, res, next){

    let {id} =req.query
      
    try {
       
        const eventDb = await dataParseada();

        
       
        const filtrados = [];

        eventDb.map(e => e.category[0] === id ? filtrados.push(e) : null );

        filtrados.length > 0 ? res.send(filtrados) : res.send('No hay filtrados de esa categoria')

        }catch(error){
            next(error)
        }

    }


async function filtroSubCategories(req, res, next){

    let {genre} = req.query

    try {
        
        const eventDb = await dataParseada();
        const filtrados = [];

        eventDb.map(e => e.subCategories.map( s => s.genre.toLowerCase() === genre.toLowerCase() ? filtrados.push(e) : null ) )

        filtrados.length > 0 ? res.send(filtrados) : res.send('No hay eventos de ese genero') 

    } catch (error) {
        next(error)
    }
}


async function filtroLocalidad(req, res, next){

  let {localidad, provincia} = req.query;

  try {
    const eventDb = await dataParseada();
    const filtrados = [];

    eventDb?.map(e => {    console.log(e);
      e.location === localidad ? filtrados.push(e) :  e.province === provincia ? filtrados.push(e) :  null})
    console.log(filtrados)


    filtrados.length > 0 ? res.send(filtrados) : res.send('No hay eventos en esa localidad o provincia')

  } catch (error) {
      next(error)
  }

}

async function filtroFecha(req, res, next){

  let {date} = req.query;
  let splited = date.split("/");

  try {
    
    const eventDb = await dataParseada();
    const filtrados = [];

    eventDb.map(e => e.date.split("/")[2] === splited[2] && e.date.split("/")[1] === splited[1] && e.date.split("/")[0] === splited[0] ? filtrados.push(e) : null)

    if (filtrados.length > 0) return res.send(filtrados) 

    else{ 
      eventDb.map(m => m.date.split('/')[1] === splited[1] && m.date.split('/')[0] === splited[0] ? filtrados.push(m) : null)

      if(filtrados.length > 0) return res.send(filtrados) 

      else{
         res.send('No hay eventos en el mes')
      }
    }
 
  } catch (error) {
      next(error)
  }

}


module.exports = {
    filtroCategories,
    filtroSubCategories,
    filtroLocalidad,
    filtroFecha
}
