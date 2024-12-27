// db password priscriptoMern

import mongoose from 'mongoose'

const connectDB = async () => {
  mongoose.connection.on('connected' , () => console.log('Database conneted'))
  await mongoose.connect(`${process.env.MONGODB_URI}/priscripto`)
}
 export default connectDB