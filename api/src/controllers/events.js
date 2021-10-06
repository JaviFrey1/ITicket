
const { Events, Categories, SubCategories } = require("../db");


async function finder() {
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
  }
  );
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
    return eventDb
  }else return []
}

async function getAllEvents(req, res) {
  let name = req.query.name;
 
  try {
    if (name) {
      const searcheado = name.toLowerCase();
      try {

        const eventDb = await finder()
        if (eventDb.length > 0) {

          const filtered = eventDb.filter(
            (event) =>
              event.artist.toLowerCase().includes(searcheado) ||
              event.name.toLowerCase().includes(searcheado)
          );
          return res.json(filtered);
        } else return res.send([]);
      } catch (error) {
        return res
          .status(400)
          .send({ error: "Ocurrió un error durante la busqueda a" });
      }
    } else {
      try {
        const dataBase = await finder();
        if (dataBase.length > 0) return res.send(dataBase)
        else return res.send([]);
      } catch (error) {
        return res
          .status(400)
          .send({ error: "Ocurrió un error durante la busqueda b" });
      }
    }
  } catch (error) {
    console.log(error)
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
        subCategories: dataBase.subCategories,
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
  finder
};
