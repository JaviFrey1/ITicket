const { Events, Categories, SubCategories } = require("../db");
const { Op } = require("sequelize");


async function getAllEvents(req, res) {
  let name = req.query.name;

  // let page = req.query.page; //Nuevo
  // let allEvents = []; //Nuevo          
  // const eventsPerPage = 4;//Nuevo
  // page = page? page : 1; //Nuevo



  if (name) {
    const searcheado = name.toLowerCase();
    try {
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
            category: result.categories.map((cat) => cat.name),
            subCategories: result.subCategories.map((subCat) => subCat.genre),
            artist: result.artist,
            place: result.place,
            address: result.address,
            location: result.location,
            province: result.province,
            image: result.image,
            price: result.price,
            availableTickets: result.availableTickets,
            date: result.date,
            time: result.time,
            isImportant: result.isImportant
          };
        });
      
        const filtered = eventDb.filter(
          (event) =>
            event.artist.toLowerCase().includes(searcheado) ||
            event.name.toLowerCase().includes(searcheado)
        );
        // let result = allEvents.slice((eventsPerPage * (page - 1)), (eventsPerPage * (page - 1)) + eventsPerPage);// Nuevo

        return res.json(filtered);
      } else return res.send("Evento Inexistente");
    } catch (error) {
      return res
        .status(400)
        .send({ error: "Ocurrió un error durante la busqueda" });
    }
  } else {
    try {
      // const {page, size} = req.query; //Nuevo (forma Mati --> QUERY)

      const dataBase = await Events.findAll({
        // limit:size, //Nuevo (Forma Mati --> QUERY)
        // offset: page * size, //Nuevo (Forma Mati --> QUERY)

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
            category: result.categories.map((cat) => cat.name),
            subCategories: result.subCategories.map((subCat) => subCat.genre),
            artist: result.artist,
            place: result.place,
            address: result.address,
            location: result.location,
            province: result.province,
            image: result.image,
            price: result.price,
            availableTickets: result.availableTickets,
            date: result.date,
            time: result.time,
            isImportant: result.isImportant
          };
        });
        // let result = eventDb.slice((eventsPerPage * (page - 1)), (eventsPerPage * (page - 1)) + eventsPerPage);// Nuevo

        res.json(eventDb); // lo cambie por eventDB
      } else return res.send([]);
    } catch (error) {
      return res
        .status(400)
        .send({ error: "Ocurrió un error durante la busqueda" });
    }
  }
}

async function getEventById(req, res) {
  let { id } = req.params;

  try {
    const dataBase = await Events.findOne({
      where: {
        id: id,
      },
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

    if (dataBase) {
      var finalEvent = {
        name: dataBase.name,
        id: dataBase.id,
        category: dataBase.categories.map((cat) => cat.name),
        subCategories: dataBase.subCategories.map((subCat) => subCat.genre),
        artist: dataBase.artist,
        place: dataBase.place,
        address: dataBase.address,
        location: dataBase.location,
        province: dataBase.province,
        image: dataBase.image,
        price: dataBase.price,
        availableTickets: dataBase.availableTickets,
        date: dataBase.date,
        time: dataBase.time,
        isImportant: dataBase.isImportant
      };
      res.json(finalEvent);
    } else return res.json("No encontramos ese evento");
  } catch (error) {
    return res.status(400).send({ error: "Id no existe" });
  }
}





module.exports = {
  getAllEvents,
  getEventById,
};
