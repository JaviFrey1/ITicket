const { Events, SubCategories, Categories } = require("../db");
const { v4: uuidv4 } = require("uuid");

async function AddEvent(req, res, next) {
  const id = uuidv4();
  let data = { ...req.body, id };

  try {
    const createdEvent = await Events.create({
      name: data.name,
      artist: data.artist,
      place: data.place,
      address: data.address,
      location: data.location,
      province: data.province,
      price: data.price,
      image: data.image,
      totalTickets:data.availableTickets,
      availableTickets: data.availableTickets,
      date: data.date,
      time: data.time,
      isImportant: data.isImportant,
    });
    const cat = await Categories.findOne({
      where: { id: parseInt(data.category) },
    });
    await createdEvent.addCategories(cat);

    data.subCategories.map(async e => {
      if (typeof e === "string") { e = JSON.parse(e) }

      const [subCat, created] = await SubCategories.findOrCreate({
        where: {
          genre: e.genre,
          catId: e.catId
        }

      });

      await createdEvent.addSubCategories(subCat);
      if (created) {

        const category = await Categories.findOne({
          where: {
            id: subCat.catId
          }
        })
        await category.addSubCategories(subCat)
      }

    })
    return res.send("Evento Creado Satisfactoriamente");
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
}



async function updateEvent(req, res, next) {
  const id = req.params.id;
  

  const {
    name,
    artist,
    place,
    address,
    location,
    province,
    price,
    image,
    availableTickets,
    date,
    time,
    subCategories,
    category
  } = req.body;
  try {
    await Events.update(
      {
        name,
        artist,
        place,
        address,
        location,
        province,
        price,
        image,
        availableTickets,
        date,
        time,

      },
      {
        where: {
          id: id,
        },
      }
    );

    let eventUpdated = await Events.findByPk(id);

    const cat = await Categories.findOne({
      where: { id: parseInt(category) },
    });

    await eventUpdated.setCategories(cat);
    


    subCategories.map(async obj => {
      if (typeof obj === "string") { obj = JSON.parse(obj) }


      const [subCat, created] = await SubCategories.findOrCreate({
        where: {
          genre: obj.genre,
          catId: obj.catId
        }

      });
      await eventUpdated.setSubCategories(subCat);
      if (created) {
        const category = await Categories.findOne({
          where: {
            id: subCat.catId
          }
        })
        await category.addSubCategories(subCat)
      }
    }
    )

    res.json(eventUpdated)
  } catch (error) {
    next(error)
  }

}


async function deleteEvent(req, res, next) {
  let id = req.params.id

  try {
    await Events.destroy({
      where: {
        id: id
      }
    })
    return res.send('borrado')
  } catch (error) {
    next(error)
  }

}
async function updateAvailable(req, res, next) {
  let { eventId, cantidad } = req.query;


  try {
    const before = await Events.findByPk(
      eventId
    )
   
    const evento = await Events.update(
      {
        availableTickets: before.availableTickets - cantidad
      },
      {
        where: {
          id: eventId,
        },
      }
    );
    res.json(evento)

  } catch (error) {
    next(error)
  }
}


module.exports = {
  AddEvent,
  updateEvent,
  deleteEvent,
  updateAvailable
};
