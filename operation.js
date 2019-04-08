const assert=require('assert');

module.exports.insertDocument=function(db,document,collection,callback){
    const coll=db.collection(collection);
    coll.insert(document,function(err,result){
        assert.equal(err,null);


        console.log("Inserted " + result.result.n  +
            " documents into the collection " + collection);
        callback(result);
    });
};
module.exports.findDocuments=function(db,collection,callback){
    const coll=db.collection(collection);
    coll.find({}).toArray(function(err,docs){
        assert.equal(err,null);

        callback(docs);
    });
};


module.exports.removeDocument=function(db,document,collection,callback){
    const coll=db.collection(collection);
    coll.removeOne(document,function(err,result){
        assert.equal(err,null);

        console.log("remover document",document);
        callback(result);
    });
};




module.exports.updateDocument=function(db,document,update,collection,callback){
    const coll=db.collection(collection);


    coll.updateOne(document,{$set:update},null,function(err,result){
        assert.equal(err,null);

        console.log("the updated document is ",document);
        callback(result);

    });
};