const router = require("express").Router();
var mercadopago = require("mercadopago");
mercadopago.configure({
  access_token:
    "TEST-6314881473504412-041618-63661bf4d27675dedd43cb65bd487f2f-255887181",
});

router.post("/checkout", async (req, res) => {
  try {
    const { totalPrice, title, quantity } = req.body;
    var unit_price = totalPrice / quantity;

    var preference = {
      items: [
        {
          title: title,
          quantity: quantity,
          unit_price: unit_price
        },
      ],
      back_urls: {
        success: "http://localhost:3000/home",
        failure: "http://localhost:3000/rechazo",
        pending: "http://localhost:3000/home",
      },
      auto_return: "approved",
    };

    const link = await mercadopago.preferences.create(preference);
    res.json(link.body.init_point)
  } catch (error) {
    console.log('MERCADO',error)
  }
});

module.exports = router;