const { Events, Categories, SubCategories } = require("../db");

async function dataParseada() {
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
        location:result.location,
        province:result.province,
        image: result.image,
        price: result.price,
        availableTickets: result.availableTickets,
        date: result.date,
        time: result.time,
        isImportant: result.isImportant,
      };
    });
    console.log("EVENT DB EN FINDER", eventDb);
    return eventDb;
  }
}

async function filtroCategories(req, res, next) {
  let { id } = req.query;

  try {
    const eventDb = await dataParseada();

    const filtrados = [];

    eventDb.map((e) => (e.category[0] === id ? filtrados.push(e) : null));

    filtrados.length > 0
      ? res.send(filtrados)
      : res.send("No hay filtrados de esa categoria");
  } catch (error) {
    next(error);
  }
}

async function filtroSubCategories(req, res, next) {
  let { genre } = req.query;
  console.log("genre", genre);

  try {
    const eventDb = await dataParseada();
    console.log("EVENTDB EN FILTROLOCALIDAD", eventDb);

    const filtrados = [];

    eventDb.map((e) =>
      e.subCategories.map((s) =>
        s.genre.toLowerCase() === genre.toLowerCase() ? filtrados.push(e) : null
      )
    );

    filtrados.length > 0
      ? res.send(filtrados)
      : res.send("No hay eventos de ese genero");
  } catch (error) {
    next(error);
  }
}

async function filtroLocalidad(req, res, next) {
  let { localidad, provincia } = req.query;
  console.log("localidad, provincia", localidad, provincia);

  try {
    const eventDb = await dataParseada();
    const filtrados = [];

    eventDb?.map((e) => {
     console.log(' LOCATION, PROVINCE',e.location, e.province)
      e.location.toLowerCase().includes(localidad.toLowerCase())
        ? filtrados.push(e)
        : e.province.toLowerCase().includes(provincia.toLowerCase())
        ? filtrados.push(e)
        : null;
    });
    console.log('filtrados',filtrados);

    filtrados.length > 0
      ? res.send(filtrados)
      : res.send("No hay eventos en esa localidad o provincia");
  } catch (error) {
    next(error);
  }
}

async function filtroFecha(req, res, next) {
  let { date } = req.query;
  let splited = date.split("/");
  // const eventDb = await dataParseada();
  // res.send(eventDb);
  try {
    const eventDb = await dataParseada();
    let filtrados = [];

    eventDb.map((e) => (e.date === date ? filtrados.push(e) : null));

    // filtrados = eventDb.filter((e) => e.date === date);
    console.log("FILTRADDOS :", filtrados);

    if (filtrados.length > 0) return res.send(filtrados);
    else {
      eventDb.map((m) =>
        m.date.split("/")[1] === splited[1] &&
        m.date.split("/")[2] === splited[2]
          ? filtrados.push(m)
          : null
      );

      if (filtrados.length > 0) return res.send(filtrados);
      else {
        res.send("No hay eventos en el mes");
      }
    }
  } catch (error) {
    next(error);
  }
}

module.exports = {
  filtroCategories,
  filtroSubCategories,
  filtroLocalidad,
  filtroFecha,
};
