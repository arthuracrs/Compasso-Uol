const mongoDBService = require('../../src/services/mongo');
const mongoose = require('mongoose');

let basicSetup = () => {
    before((done)=>{
        mongoDBService.dbConnect()
                .once('open', ()=>done())
                .on('error',(error) => done(error))
    })
    beforeEach((done)=>{
      const collectionName = 'cities'
      mongoose.connection.db.listCollections({name: collectionName})
            .next((error,collection)=>{
                if(collection){
                    mongoose.connection.db.dropCollection(collectionName)
                    .then(() => done())
                    .catch((err) => done(err))
                }
                else{
                    done(error)
                }
            })
        
        
    })

    after((done)=>{
        mongoDBService.dbClose()
                .then(()=>done())
                .catch((err)=>done(err))
    })
}

module.exports = basicSetup;