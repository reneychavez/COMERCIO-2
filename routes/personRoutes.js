const router = require('express').Router()

const Person = require('../models/Person')

router.post("/", async (req, res) => {

    const {name} = req.body;

    if(await UserModel.findOne({name})){
        return res.status(400).json({
            error: true,
            message: "Name already exists"
        });
    }

    const User = await UserModel.create (req.body)
    
    return res.json({
        error: false,
        message: "Registred With Sucess",
        data: User
    });
})

module.exports = router;