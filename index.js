import express from 'express'
import mongoose from 'mongoose'
import router from './router.js'

const PORT = 5000;
const DB_URL = `mongodb+srv://admin:admin@cluster0.gfp4m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const app = express();

app.use(express.json());
app.use('/api', router);

async function startApp() {
    try {
        await mongoose.connect(DB_URL, {
            useUnifiedTopology: true, 
            useNewUrlParser: true, 
        })
        app.listen(PORT, () => console.log('SERVER HAS BEEN STARTED ON ' + PORT))
    }
    catch (e) {
        console.log(e)
    }
}

startApp()
