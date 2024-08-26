import mongoose from "mongoose";

const connect = async () => {
    try {
       mongoose.connect(process.env.MONGO)
    } catch (error) {
        throw new Error("Connection échoué!")
    }
}

export default connect