const jwt = require('jsonwebtoken');
const model = require('../models/myTable');
const bcryptjs = require('bcryptjs')

const signUp = async (req, res) => {
    try{
        const {fullname, email, password} = req.body;
        const saltedPassword = bcryptjs.genSaltSync(10)
        const hashedPassword = bcryptjs.hashSync(password, saltedPassword)

        const data = {
            fullname,
            email,
            password: hashedPassword
        }

        const newUser = await model(data);
        const myToken = jwt.sign({
            id: newUser._id,
            password: newUser.password,
            isAdmin: newUser.isAdmin
        }, process.env.JWTTOKEN, {
            expiresIn: "1d"
        })

        newUser.token = myToken
        await newUser.save()

        res.status(201).json({
            message: "Sign Up Successful",
            data: newUser
        })
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
}

module.exports={
    signUp
}