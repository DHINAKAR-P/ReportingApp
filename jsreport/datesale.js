var MongoClient = require('mongodb').MongoClient;

function beforeRender(req, res, done) {
    MongoClient.connect('mongodb://localhost:27017/reportingapp', function(err, db) {
        var collection = db.collection('invoices').find().toArray(function(err, results) {
            if (err)
                return done(err);
            console.log("the data ---->" + JSON.stringify(results))
             var count = {};
            results.forEach((o) => {
                o.shippingdate = new Date(o.shippingdate);
                var shippingdate = o.shippingdate.getDate() + '/' + (o.shippingdate.getMonth() + 1);
               
                count[shippingdate] = count[shippingdate] || {
                    value: 0,
                    customer: o.customer
                };
                count[shippingdate].value++;
                
            });
            console.log("the role ----->"+JSON.stringify(count))
            req.data.users = results
            req.data.shippingdate = count
            done();
        });
    });
}