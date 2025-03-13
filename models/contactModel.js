const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
    {
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User"
        },
        name:{
            type: String,
            required: [true, "Please Fill Contact name"]
        },
        email:{
            type: String,
            required: [true, "Please Fill Contact email address."]
        },
        phone: {
            type: String,
            required: [true, "Please Fill Contact phone number"]
            
        }
    },
    {
        timestamps: true
    })

module.exports = mongoose.model("Contact", contactSchema);