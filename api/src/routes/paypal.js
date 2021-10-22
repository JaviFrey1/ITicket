const paypal = require("paypal-rest-sdk");

const router = require("express").Router();

paypal.configure({
    mode:"sandbox",
    client_id: "ASvFaY_vNpuUFSfJTo8S-8_Dk3hfLQjZMGyER4Cm0OMacoAyD-HoEjCQOzzJrhoNf4zkGEAPY2QpkVsl",
    client_secret: "EFNU5WlJd3ub-_tdrcartl7kp6H-Gqn4LDZ2ZmNlhC3GLsRmkcyRJcyNwlJ9p5b_a4Hy7NYVaLN380Ta"
});



router.post("/paypal", (req, res) => {
  
    let data = {...req.body}
    console.log('ESTOY EN BACK',req.body)
    
    data.price = Math.round(data.price / 170)


    var create_payment_json = {
        intent: "sale",
        payer: {
            payment_method: "paypal"
        },
        redirect_urls: {
            return_url: "http://localhost:3000/home",
            cancel_url: "http://localhost:3001/cancel"
        },
        transactions: [
            {
                item_list: {
                    items: [
                        {
                            name: data.name,
                            sku: "item",
                            price: data.price,
                            currency: "USD",
                            quantity: data.quantity
                        }
                    ]
                },
                amount: {
                    currency: "USD",
                    total: (data.quantity * data.price),
                },
                description: "This is the payment description."
            }
        ]
    };

    paypal.payment.create(create_payment_json, function(error, payment) {
        if (error) {
            throw error;
        } else {
            console.log("Create Payment Response");
            console.log(payment);
            res.json(payment.links[1].href);
        }
    });
});


router.get("/success", (req, res) => {
    // res.send("Success");
    var PayerID = req.query.PayerID;
    var paymentId = req.query.paymentId;
    var execute_payment_json = {
        payer_id: PayerID,
        transactions: [
            {
                amount: {
                    currency: "USD",
                    total: ''
                }
            }
        ]
    };

    paypal.payment.execute(paymentId, execute_payment_json, function(
        error,
        payment
    ) {
        if (error) {
            console.log(error.response);
            throw error;
        } else {
            console.log("Get Payment Response");
            console.log(JSON.stringify(payment));
            res.render("success");
        }
    });
});

router.get("cancel", (req, res) => {
    res.send("cancel");
});


module.exports = router;