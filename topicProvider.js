var mongo = require('mongodb-wrapper')

function TopicProvider(host, port) {
  this.db = mongo.db(host, port, "node-mongo-topic")
  this.db.collection('topics')
}


TopicProvider.prototype.findAll = function(callback) {
  this.db.topics.find().toArray(function(err, topics) {
    callback(topics);
  });
};

exports.TopicProvider = TopicProvider;
