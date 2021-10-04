// const fs = require('fs');
// const path = require('path');

// var FileReader = require('filereader')
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
        isImportant:result.isImportant
      };
    });
    return eventDb
  }
}

async function getAllEvents(req, res) {
  let name = req.query.name;
  // try{
  //   const eventsLoaded = await finder()
  //   eventsLoaded? null : await Events.bulkCreate(array)
  //    }catch(err){console.log('error en bulkCreate', err)}
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
        .send({ error: "Ocurrió un error durante la busqueda" });
    }
  } else {
    try {

      const dataBase = await finder()
      if (dataBase.length > 0) return res.send(dataBase)
      else return res.send([]);
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

var array = [
  {
    name: "Festival del Amor",
    subCategories: "Rock",
    date: "31/12/2021",

  }, {
    name: "Daniel Drexler",
    subCategories: "Rock",
    date: "1/03/2022",

  }, {
    name: "El Gusto es Nuestro",
    subCategories: "Comedia",
    date: "16/10/2022",
  }, {
    name: "Electro Music Festival",
    subCategories: "Electronica",
    date: "09/07/2022",
  }, {
    name: "Chole Rock",
    subCategories: "Rock",
    date: "03/08/2022",
  }
]


// function urlGetter(){
//   const reader = new FileReader();
//   const urls = fs.readdirSync(path.join(__dirname, '../images'))
//     .map(async (file) => {
//       reader.readAsDataURL(file);
//       const formData = new FormData();
//       formData.append("file", file);
//       formData.append("upload_preset", "di4u9mje");
//       const response = await Axios.post(
//         "https://api.cloudinary.com/v1_1/tukiteck/image/upload",
//         formData
//       )
//       return response.data.secure_url })

//   return urls

// }

// console.log(urlGetter())
  








module.exports = {
  getAllEvents,
  getEventById,
};
