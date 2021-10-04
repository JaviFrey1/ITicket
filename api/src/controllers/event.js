const { Events, SubCategories, Categories } = require("../db");
const { v4: uuidv4 } = require("uuid");

async function AddEvent(req, res, next) {
  const id = uuidv4();
  let data = { ...req.body, id };
  if (
    !data.category ||
    data.subCategories.length === 0 ||
    !data.name ||
    !data.artist ||
    !data.place ||
    !data.address ||
    !data.location ||
    !data.province ||
    !data.price ||
    !data.availableTickets ||
    !data.date ||
    !data.time ||
    !data.isImportant
  ) {
    return res.send("Por favor completa todos los datos");
  }
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
      availableTickets: data.availableTickets,
      date: data.date,
      time: data.time,
      isImportant: data.isImportant
    });
    const cat = await Categories.findOne({
      where: { id: data.category },
    });
    await createdEvent.addCategories(cat);

    data.subCategories.map(async (el) => {
      const subCat = await SubCategories.findOne({
        where: {
          genre: el,
        },
      });

      await createdEvent.addSubCategories(subCat);
    });
    
    return res.send("Evento Creado Satisfactoriamente");
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
}

module.exports = {
  AddEvent,
};
