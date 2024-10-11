const {MongoClient} = require('mongodb');

const client = new MongoClient(`mongodb+srv://ashwin:b6XZyIFNaOkJs65D@cluster0.g3jer.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);
module.exports = async function connection(){
    try {
        await client.connect(process.env.DB);
        console.log('connection success');
    } catch (err) {
        console.log(err);
    }
}