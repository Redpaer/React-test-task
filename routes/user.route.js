const {Router} = require('express');
const User = require('../models/User');
const router = Router();
const {check, validationResult} = require('express-validator');

router.post('/add', async (req,res) =>{
        try{    
            const {name, age, city, phone} = req.body

            const isUsed = await User.findOne({ phone })

            if(isUsed){
                return res.status(300).json({message: 'Данный телефон уже занят!'})
            }

            const user = new User({
                name,age,city,phone
            });

            await user.save()

            res.status(201).json({message:'Пользователь создан'})


        }catch (error){
            console.log(error);
        }
});

module.exports = router