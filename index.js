const MongoClient=require('mongodb').MongoClient;
const assert=require('assert');

const url='mongodb://localhost:27017/';

const dbName='conFusion';


MongoClient.connect(url,function(err,client){
    assert.equal(err,null);

    console.log('connected successfully');

    const db=client.db(dbName);//db i have to access
    const collection=db.collection('dishes')// collection i have to access
    collection.insertOne({"name":"prakhar","description":"studious"},function(err,result){
      assert.equal(err,null);


      console.log('after insert\n');
      console.log(result.ops);


        collection.find({}).toArray(function(err,docs){
            assert.equal(err,null);


            console.log('found\n');
            console.log(docs);

            db.dropCollection('dishes',function(err,result){
                assert.equal(err,null);


                console.log('everything dropped');

                client.close();
            });
        });


    });



});