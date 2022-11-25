const {MongoClient} = require('mongodb')

const client = new MongoClient('mongodb+srv://sashazernin:2552436qwerrewq@cluster0.c9d6y5r.mongodb.net/mongo?retryWrites=true&w=majority')

const start = async () => {
    try{
        await client.connect()
        console.log('connect passed')
        const users = client.db().collection('users')
        users.insertOne({name:'sasha',age:18})
    }catch(e){
        console.log(e)
    }
}

start()