const MongoClient=require('mongodb').MongoClient;
const assert=require('assert');

const url='mongodb://localhost:27017/';
const dbName='conFusion';

MongoClient.connect(url,function(err,client){
    assert.equal(err,null);


    console.log('successfully connected');

    const dbs=client.db(dbName);
    const coll=dbs.collection('dishes');
    coll.insertOne({"name":"shaurya","age":34},function(err,result){
        assert.equal(err,null);

        console.log('inserted successfully\n',result.ops);

        coll.find({}).toArray(function(err,docs){
            assert.equal(err,null);

            console.log("found\n",docs);

            dbs.dropCollection('dishes',function(err,result){
                assert.equal(err,null);


                console.log('dropped everything\n');

                client.close();
            });
        });
    });
});
