import mongoose from "mongoose"

const doctorSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true
        },
        salary:{
            type: String,
            required: true
        },
        qualification:{
            type: String,
            required: true
        },
        experienceInNumber:{
            type: Number,
            required: true,
            default: 0
        },
        wrokInHospitals:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Hospital',
            default: 0
        },
    },
    {timestamps: true}
)

export  const Doctor = mongoose.model("Doctor", doctorSchema)