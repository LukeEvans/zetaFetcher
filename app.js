var util = require('util');
var _ = require('underscore');

var CronJob = require('cron').CronJob
  , BingSearcher = require('./bingSearch').BingSearcher
  , TopicProvider = require('./topicProvider').TopicProvider;

var bingSearcher = new BingSearcher();
var topicProvider = new TopicProvider("192.168.99.100", 27017);

function runUpdate() {
  topicProvider.findAll(function(res) {
    _.each(res, function(topic) {
      console.log("Searching for topic: " + topic.name);
      bingSearcher.search("self driving cars");
    });
  });
};

// ToDo: run on cron
//
// Every weekday at 11:30 = 00 30 11 * * 1-5
var job = new CronJob('* * * * *', function() {
  /*
   *Run a query
  */
  runUpdate();
  }, function () {
    /* This function is executed when the job stops */
  },
  true, /* Start the job right now */
  'America/Denver' /* Time zone of this job. */
);

//job.start();
runUpdate();
