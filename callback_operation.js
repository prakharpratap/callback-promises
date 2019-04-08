const assert=require('assert');

module.exports.insertDocument=function(db,document,collection,callback){
    const coll=db.collection(collection);
    return coll.insert(document);
};

module.exports.findDocuments=function(db,collection,callback){
    const coll=db.collection(collection);
    return coll.find({}).toArray();
};


module.exports.removeDocument=function(db,document,collection,callback){
    const coll=db.collection(collection);
    return coll.removeOne(document);
};




module.exports.updateDocument=function(db,document,update,collection,callback){
    const coll=db.collection(collection);


    return coll.updateOne(document,{$set:update},null);
};