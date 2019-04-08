const MongoClient=require('mongodb').MongoClient;
const assert=require('assert');
const dboper=require('./callback_operation.js');

const url='mongodb://localhost:27017/';
const dbName='conFusion';

MongoClient.connect(url).then(function(client){


    console.log('connected successfully');
    const dbs=client.db(dbName);
    dboper.insertDocument(dbs,{"name":"saurabh","age":14},'dishes')
        .then(function(result) {

            console.log('inserted document\n', result.ops);

            return dboper.findDocuments(dbs, 'dishes');
        })
        .then(function(docs) {
            console.log("found document", docs);

            return dboper.updateDocument(dbs, {"name": "saurabh"}, {"age": 18}, 'dishes')
        })

        .then(function(result) {

            console.log("updated document", result.result);

            return dboper.findDocuments(dbs, 'dishes')
        })
        .then(function(docs) {
            console.log("found document", docs);
            return dbs.dropCollection('dishes')
        })
    .then(function (result) {


                        console.log("everything is dropped");

                        client.close();
                    })



.catch(function(err){console.log(err)});
})
    .catch(function(err){console.log(err)});