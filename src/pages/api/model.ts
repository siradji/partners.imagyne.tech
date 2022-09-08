import mongoose from "mongoose";

const schema = new mongoose.Schema({
    business: {
        type:String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    referrals: {
        type: Number,
        required: true,
        default: 0
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
})
global.Partner = global.Partner || mongoose.model("partner", schema);

export default global.Partner;