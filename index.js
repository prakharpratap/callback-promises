const MongoClient=require('mongodb').MongoClient;
const assert=require('assert');
const dboper=require('./operation.js');

const url='mongodb://localhost:27017/';
const dbName='conFusion';

MongoClient.connect(url,function(err,client){
    assert.equal(err,null);

    console.log('connected successfully');
    const dbs=client.db(dbName);
    dboper.insertDocument(dbs,{"name":"saurabh","age":14},'dishes',function(result){

        console.log('inserted document\n',result.ops);

        dboper.findDocuments(dbs,'dishes',function(docs){
            console.log("found document",docs);

            dboper.updateDocument(dbs,{"name":"saurabh"},{"age":18},'dishes',function(result) {

                console.log("updated document", result.result);

                dboper.findDocuments(dbs,'dishes',function(docs){
                    console.log("found document",docs);
                dbs.dropCollection('dishes', function (err, result) {
                    assert.equal(err, null);

                    console.log("everything is dropped");

                    client.close();
                });
            });
            });
        });

    });

});