const {Router} = require('express');
const User = require('../models/User');
const router = Router();
const {check, validationResult} = require('express-validator');

router.post('/add',
    [
        check('name', 'Некорректное имя').isLength({min: 2}),
        check('age', 'Некорректное имя').isLength({min: 1}),
        check('city', 'Некорректное имя').isLength({min: 2}),
        check('phone', 'Некорректное имя').isLength({min: 8})
    ]
    ,
    async (req,res) =>{
        try{    
            const errors = validationResult(req)
            if(!errors.isEmpty()){
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Некорректные данные'
                })
            }

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
