import mongoose from 'mongoose'
import { MONGO_URI } from '../config/index.js'
export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI)
    console.log('MongoDB connected')
  } catch (error) {
    console.error(error)
  }
}
