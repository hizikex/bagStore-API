const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    fullname: {
        type: String,
        required: [true, "fullname is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
    isAdmin: {
        password: {
            type: Boolean,
            default: false
        }
    },
    token: {
        type: String,
    }
},{
    timestamps: true
});

const userModel = mongoose.model('myTable', schema);

module.exports = userModel;