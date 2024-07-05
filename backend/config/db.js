import mongoose from 'mongoose';

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://vaishalipateriya2:190923@cluster0.adwhtg9.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}